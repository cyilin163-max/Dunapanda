# Dunapanda 角色与后台设计方案

## 目标

在现有官网基础上扩展三种角色能力：

- `admin`：商品、库存、分类、活动和用户管理
- `customer`：普通零售用户，看到零售价，使用购物车
- `wholesaler`：批发商用户，登录后看到批发价，使用批发购物车规则

第一阶段先实现：

- 账号登录
- 角色识别
- 零售价 / 批发价双价格体系
- 普通购物车
- 批发商购物车
- 后台商品管理
- 后台库存管理

暂不进入第一阶段：

- 在线支付
- 物流配送
- 多门店仓库调拨
- 优惠券
- 发票系统

## 技术方案

建议技术栈：

- 前台与后台：`Next.js App Router`
- 数据库：`Supabase Postgres`
- 登录与权限：`Supabase Auth`
- 商品图片：`Supabase Storage`
- 后台路径：`/admin`

站点结构建议：

- 官网前台：`/`
- 登录页：`/login`
- 批发申请页：`/wholesale/apply`
- 用户中心：`/account`
- 后台：`/admin`

## 角色定义

### 1. Admin

权限：

- 创建 / 编辑 / 删除商品
- 上下架商品
- 增减库存
- 管理分类与子分类
- 设置零售价与批发价
- 审核批发商账号
- 管理活动专题

访问规则：

- 只有 `role = admin` 才能访问 `/admin`

### 2. Customer

权限：

- 浏览全部公开商品
- 查看零售价
- 加入购物车
- 提交普通订单或询价单
- 查看自己的订单记录

访问规则：

- 默认注册用户角色为 `customer`

### 3. Wholesaler

权限：

- 浏览商品
- 查看批发价
- 查看起订量、整箱规格
- 使用批发购物车
- 提交批发订单 / 询价

访问规则：

- 用户注册后先是 `customer`
- 提交批发申请
- 由 `admin` 审核通过后升级为 `wholesaler`

## 前台价格显示逻辑

### 未登录用户

- 可浏览商品
- 显示零售价
- 可以加入购物车，或在结账前要求登录

### Customer 登录后

- 显示零售价
- 正常零售购物车逻辑

### Wholesaler 登录后

- 商品卡显示批发价
- 商品详情页显示：
  - 批发价
  - 起订量
  - 整箱规格
  - 当前库存状态

建议展示方式：

- 普通用户：只显示 `零售价`
- 批发商：主显示 `批发价`
- 可选：批发商同时看到较小的零售价作为参考

## 数据表设计

以下为建议的核心表。

### profiles

存扩展用户资料与角色。

字段：

- `id` uuid pk，关联 auth user id
- `email` text
- `display_name` text
- `phone` text
- `role` text
- `status` text
- `company_name` text nullable
- `tax_id` text nullable
- `created_at` timestamptz
- `updated_at` timestamptz

枚举建议：

- `role`: `admin | customer | wholesaler`
- `status`: `active | pending | disabled`

### wholesale_applications

批发商申请表。

字段：

- `id` uuid pk
- `user_id` uuid fk -> profiles.id
- `company_name` text
- `contact_name` text
- `phone` text
- `email` text
- `tax_id` text nullable
- `business_address` text nullable
- `notes` text nullable
- `review_status` text
- `reviewed_by` uuid nullable
- `reviewed_at` timestamptz nullable
- `created_at` timestamptz

枚举建议：

- `review_status`: `pending | approved | rejected`

### categories

一级分类。

字段：

- `id` uuid pk
- `slug` text unique
- `name_zh` text
- `name_en` text
- `name_hu` text
- `sort_order` int
- `is_active` boolean
- `hero_image` text nullable
- `created_at` timestamptz
- `updated_at` timestamptz

### subcategories

二级分类。

字段：

- `id` uuid pk
- `category_id` uuid fk -> categories.id
- `slug` text unique
- `name_zh` text
- `name_en` text
- `name_hu` text
- `sort_order` int
- `is_active` boolean
- `created_at` timestamptz
- `updated_at` timestamptz

### brands

品牌表。

字段：

- `id` uuid pk
- `slug` text unique
- `name` text
- `origin_country` text nullable
- `is_active` boolean

### products

商品主表。

字段：

- `id` uuid pk
- `slug` text unique
- `sku` text unique
- `category_id` uuid fk -> categories.id
- `subcategory_id` uuid fk -> subcategories.id
- `brand_id` uuid nullable fk -> brands.id
- `status` text
- `badge` text nullable
- `name_zh` text
- `name_en` text
- `name_hu` text
- `subtitle_zh` text nullable
- `subtitle_en` text nullable
- `subtitle_hu` text nullable
- `description_zh` text
- `description_en` text
- `description_hu` text
- `origin_zh` text nullable
- `origin_en` text nullable
- `origin_hu` text nullable
- `size_zh` text nullable
- `size_en` text nullable
- `size_hu` text nullable
- `retail_price` numeric(10,2)
- `wholesale_price` numeric(10,2) nullable
- `wholesale_min_qty` int nullable
- `case_size` int nullable
- `stock_quantity` int
- `stock_status` text
- `is_featured` boolean
- `is_visible` boolean
- `created_at` timestamptz
- `updated_at` timestamptz

枚举建议：

- `status`: `draft | active | archived`
- `badge`: `new | popular | seasonal`
- `stock_status`: `in_stock | limited | out_of_stock | seasonal`

### product_images

商品图片。

字段：

- `id` uuid pk
- `product_id` uuid fk -> products.id
- `image_url` text
- `alt_zh` text nullable
- `alt_en` text nullable
- `alt_hu` text nullable
- `sort_order` int
- `is_cover` boolean

### product_tags

商品标签表。

字段：

- `id` uuid pk
- `product_id` uuid fk -> products.id
- `label_zh` text
- `label_en` text
- `label_hu` text
- `sort_order` int

### inventory_logs

库存操作日志。

字段：

- `id` uuid pk
- `product_id` uuid fk -> products.id
- `changed_by` uuid fk -> profiles.id
- `change_type` text
- `before_qty` int
- `delta_qty` int
- `after_qty` int
- `note` text nullable
- `created_at` timestamptz

枚举建议：

- `change_type`: `manual_add | manual_reduce | order_reserved | order_cancelled | restock`

### carts

购物车主表。

字段：

- `id` uuid pk
- `user_id` uuid fk -> profiles.id
- `cart_type` text
- `created_at` timestamptz
- `updated_at` timestamptz

枚举建议：

- `cart_type`: `retail | wholesale`

### cart_items

购物车商品项。

字段：

- `id` uuid pk
- `cart_id` uuid fk -> carts.id
- `product_id` uuid fk -> products.id
- `quantity` int
- `unit_price` numeric(10,2)
- `price_type` text
- `created_at` timestamptz

枚举建议：

- `price_type`: `retail | wholesale`

### orders

订单主表。

字段：

- `id` uuid pk
- `order_no` text unique
- `user_id` uuid fk -> profiles.id
- `order_type` text
- `status` text
- `subtotal_amount` numeric(10,2)
- `notes` text nullable
- `created_at` timestamptz
- `updated_at` timestamptz

枚举建议：

- `order_type`: `retail | wholesale`
- `status`: `pending | confirmed | fulfilled | cancelled`

### order_items

订单行项目。

字段：

- `id` uuid pk
- `order_id` uuid fk -> orders.id
- `product_id` uuid fk -> products.id
- `product_name_snapshot` text
- `quantity` int
- `unit_price` numeric(10,2)
- `price_type` text

### promotions

活动专题表。

字段：

- `id` uuid pk
- `slug` text unique
- `title_zh` text
- `title_en` text
- `title_hu` text
- `description_zh` text
- `description_en` text
- `description_hu` text
- `start_at` timestamptz
- `end_at` timestamptz
- `is_active` boolean

## 关键业务规则

### 1. 商品价格规则

- 每个商品必须有 `retail_price`
- 批发商品可配置 `wholesale_price`
- 若用户不是 `wholesaler`，前台不能返回批发价

### 2. 批发购物规则

- 只有 `wholesaler` 才能把商品加入批发购物车
- 批发商品应校验 `wholesale_min_qty`
- 若商品设置了整箱规格，可提示按箱购买

### 3. 库存规则

- `admin` 可手动增减库存
- 下单时应冻结或扣减库存
- 每次库存变化都记录到 `inventory_logs`

### 4. 批发申请规则

- 普通用户提交申请后，状态为 `pending`
- `admin` 审核通过后：
  - `profiles.role` 改为 `wholesaler`
  - `wholesale_applications.review_status` 改为 `approved`

## 页面与后台结构

### 前台新增页面

- `/login`
- `/register`
- `/account`
- `/account/orders`
- `/wholesale/apply`
- `/cart`

### 后台页面

- `/admin`
- `/admin/products`
- `/admin/products/new`
- `/admin/products/[id]`
- `/admin/categories`
- `/admin/inventory`
- `/admin/orders`
- `/admin/users`
- `/admin/wholesale-applications`
- `/admin/promotions`

## 后台页面第一版内容

### Dashboard

- 今日订单数
- 低库存商品
- 待审核批发商数量
- 最近库存操作

### 商品管理

- 商品列表
- 搜索
- 按分类筛选
- 上下架切换
- 新增 / 编辑商品

### 商品编辑页

- 基本信息
- 分类与子分类
- 品牌
- 零售价
- 批发价
- 起订量
- 整箱规格
- 库存
- 图片上传
- 标签

### 库存管理

- 商品库存列表
- 手动加库存
- 手动减库存
- 库存日志

### 批发申请管理

- 待审核申请列表
- 查看公司信息
- 批准 / 拒绝

## 前端接口建议

可先规划这些服务接口：

- `GET /api/products`
- `GET /api/products/:slug`
- `POST /api/admin/products`
- `PATCH /api/admin/products/:id`
- `POST /api/admin/products/:id/inventory`
- `GET /api/categories`
- `POST /api/wholesale/apply`
- `GET /api/admin/wholesale-applications`
- `PATCH /api/admin/wholesale-applications/:id`
- `POST /api/cart/items`
- `PATCH /api/cart/items/:id`
- `POST /api/orders`

## 推荐开发顺序

### Phase 1

- 接 Supabase
- 做登录
- 建 `profiles`
- 实现角色守卫

### Phase 2

- 建商品、分类、图片、库存表
- 后台商品管理
- 后台库存管理

### Phase 3

- 前台价格分层
- 普通购物车
- 批发购物车

### Phase 4

- 批发申请
- 后台审核
- 订单记录

## 当前项目下一步建议

最适合马上开始做的是：

1. 接入 Supabase 基础配置
2. 落数据库 schema
3. 做 `profiles + 角色`
4. 先搭 `/admin` 骨架页面

## 文件建议

后续可新增：

- `src/lib/supabase/`
- `src/lib/auth/`
- `src/types/commerce.ts`
- `src/app/admin/`
- `src/app/api/`

