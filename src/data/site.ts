import { Category, FAQ, Product, Promotion, StoreDetail } from "@/types/site";

export const categories: Category[] = [
  {
    slug: "fresh-produce",
    icon: "青",
    theme: "from-emerald-200 via-white to-lime-100",
    heroImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    title: {
      zh: "新鲜蔬果",
      en: "Fresh Produce",
      hu: "Friss zoldseg es gyumolcs",
    },
    shortDescription: {
      zh: "每日上新的亚洲叶菜、香草、水果与根茎类。",
      en: "Daily-arriving Asian greens, herbs, fruits, and roots.",
      hu: "Naponta erkezo azsiai zoldsegek, fuszernovenyek, gyumolcsok es gyokerek.",
    },
    longDescription: {
      zh: "从上海青、茼蒿、韭黄到榴莲、山竹和热带水果，这一类是门店最能体现新鲜度与采购能力的核心区域。",
      en: "From Shanghai bok choy and chrysanthemum greens to durian and mangosteen, this category reflects the store's freshness and sourcing strength.",
      hu: "A pak choitol es tonghaotol a durianig es mangosztanig ez a kategoria mutatja meg legjobban az uzlet frissesseget es beszerzesi erejet.",
    },
    highlights: [
      {
        zh: "支持按到货日、产地与叶菜类型筛选",
        en: "Filter by arrival day, origin, and produce type",
        hu: "Szures beerkezesi nap, szarmazas es termektipus szerint",
      },
      {
        zh: "适合做本周到货和季节热卖专题",
        en: "Ideal for weekly arrivals and seasonal specials",
        hu: "Heti beerkezesekhez es szezonalis kiemelesekhez idealis",
      },
    ],
    subcategories: [
      { slug: "leafy-greens", title: { zh: "叶菜类", en: "Leafy Greens", hu: "Leveles zoldsegek" } },
      { slug: "roots", title: { zh: "根茎类", en: "Roots", hu: "Gyokerek" } },
      { slug: "tropical-fruit", title: { zh: "热带水果", en: "Tropical Fruit", hu: "Tropusi gyumolcs" } },
    ],
  },
  {
    slug: "frozen-deli",
    icon: "鲜",
    theme: "from-sky-200 via-white to-cyan-100",
    heroImage:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
    title: {
      zh: "冷冻与熟食",
      en: "Frozen & Deli",
      hu: "Fagyasztott es deli",
    },
    shortDescription: {
      zh: "水饺、点心、丸滑、火锅配菜和便利熟食。",
      en: "Dumplings, dim sum, fish balls, hotpot staples, and deli foods.",
      hu: "Gombocok, dim sum, golyok, hotpot alapok es deli termekek.",
    },
    longDescription: {
      zh: "这部分更适合做家庭囤货、聚会采购和门店热卖，后续也最容易扩展成预订与到店自提逻辑。",
      en: "This range suits family stocking, gathering purchases, and bestsellers, and can later support preorder and pickup flows.",
      hu: "Ez a valasztek alkalmas csaladi feltoltesre, osszejovetelekre es bolt slager termekekre, kesobb pedig elorendeleshez es szemelyes atvetelhez is.",
    },
    highlights: [
      {
        zh: "支持家庭装与餐饮装规格区分",
        en: "Supports household and restaurant pack sizes",
        hu: "Kulon kezeli az otthoni es vendeglato kiszereleseket",
      },
      {
        zh: "适合接预订、限时锁货和门店提货",
        en: "Ready for preorder, reservation, and store pickup",
        hu: "Elorendeleshez, foglalashoz es uzleti atvetelhez is alkalmas",
      },
    ],
    subcategories: [
      { slug: "dumplings", title: { zh: "水饺点心", en: "Dumplings & Dim Sum", hu: "Gomboc es dim sum" } },
      { slug: "hotpot-frozen", title: { zh: "火锅冷冻", en: "Frozen Hotpot", hu: "Fagyasztott hotpot" } },
      { slug: "prepared-deli", title: { zh: "熟食专区", en: "Prepared Deli", hu: "Kesz deli" } },
    ],
  },
  {
    slug: "snacks-drinks",
    icon: "茶",
    theme: "from-amber-200 via-white to-orange-100",
    heroImage:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=80",
    title: {
      zh: "零食饮料",
      en: "Snacks & Drinks",
      hu: "Nassolnivalok es italok",
    },
    shortDescription: {
      zh: "热门零食、汽水、茶饮、功能饮料与便利店小食。",
      en: "Popular snacks, sodas, teas, energy drinks, and convenience picks.",
      hu: "Nepszeru nasik, uditok, tea italok, energiaitalok es gyors kedvencek.",
    },
    longDescription: {
      zh: "这是最适合做社媒传播和主题陈列的一类，既适合新品上架，也适合做品牌联名和节庆礼盒。",
      en: "This is the most social-friendly category, perfect for new arrivals, brand collaborations, and festive gift edits.",
      hu: "Ez a legjobban kozossegi mediara szabott kategoria, idealis ujdonsagokhoz, markas egyuttmukodesekhez es unnepi valogatasokhoz.",
    },
    highlights: [
      {
        zh: "支持按口味、品牌、糖度和国家筛选",
        en: "Filter by flavor, brand, sugar level, and country",
        hu: "Szures iz, marka, cukorszint es orszag szerint",
      },
      {
        zh: "适合做新品、爆款和节庆礼盒模块",
        en: "Great for new arrivals, bestsellers, and gift edits",
        hu: "Tokeletes ujdonsagokhoz, slagertermekekhez es ajandek valogatasokhoz",
      },
    ],
    subcategories: [
      { slug: "sparkling", title: { zh: "汽水饮料", en: "Sparkling Drinks", hu: "Szensavas italok" } },
      { slug: "tea-coffee", title: { zh: "茶饮咖啡", en: "Tea & Coffee", hu: "Tea es kave" } },
      { slug: "sweet-snacks", title: { zh: "甜咸零食", en: "Snacks", hu: "Nasik" } },
    ],
  },
  {
    slug: "sauces-pantry",
    icon: "酱",
    theme: "from-stone-200 via-white to-yellow-100",
    heroImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    title: {
      zh: "调味与粮油",
      en: "Sauces & Pantry",
      hu: "Szoszok es kamra",
    },
    shortDescription: {
      zh: "酱油、底料、面条、米、油和厨房基础货。",
      en: "Soy sauces, soup bases, noodles, rice, oils, and pantry staples.",
      hu: "Szojaszoszok, alapok, tesztak, rizs, olajok es kamra alapanyagok.",
    },
    longDescription: {
      zh: "这是最适合做长期目录沉淀的一类，后续接后台时也最适合展示品牌、规格、口味、库存与推荐食谱。",
      en: "This is the strongest long-tail catalog category and the best place to connect brand data, sizes, flavors, stock, and recipes.",
      hu: "Ez a legerosebb hosszu katalogus kategoria, ahol a markaadatok, meretek, izvilag, keszlet es receptek is jol kapcsolhatok.",
    },
    highlights: [
      {
        zh: "支持品牌、规格、辣度和使用场景筛选",
        en: "Filter by brand, size, spice level, and use case",
        hu: "Szures marka, meret, csiposseg es felhasznalas szerint",
      },
      {
        zh: "适合扩展成菜谱、搭配和品牌故事内容",
        en: "Ready for recipes, pairings, and brand stories",
        hu: "Receptekhez, parositasokhoz es markatortenetekhez is alkalmas",
      },
    ],
    subcategories: [
      { slug: "soy-sauce", title: { zh: "酱油醋类", en: "Soy Sauce & Vinegar", hu: "Szojaszosz es ecet" } },
      { slug: "hotpot-base", title: { zh: "火锅底料", en: "Hotpot Base", hu: "Hotpot alap" } },
      { slug: "rice-noodles", title: { zh: "米面粮油", en: "Rice & Noodles", hu: "Rizs es teszta" } },
    ],
  },
];

categories.push(
  {
    slug: "asian-snacks",
    icon: "零",
    theme: "from-pink-200 via-white to-amber-100",
    heroImage:
      "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&w=1200&q=80",
    title: { zh: "亚洲零食", en: "Asian Snacks", hu: "Azsiai nasik" },
    shortDescription: {
      zh: "饼干、薯片、果冻、海苔和追剧时最容易顺手拿的一整排小零食。",
      en: "Biscuits, chips, jelly cups, seaweed snacks, and easy grab-and-go favorites.",
      hu: "Kekszek, chipsek, zselek, algasnackek es gyorsan leemelheto kedvencek.",
    },
    longDescription: {
      zh: "这一区适合做热卖排行、办公室囤货和周末聚会零食推荐，也很适合放新品和限定口味。",
      en: "A perfect category for bestsellers, office snack stock-ups, weekend sharing packs, and limited-edition flavors.",
      hu: "Tokeletes kategoria slagertermekekhez, irodai feltolteshez, hetvegi megosztos nasikhoz es limitalt izzesekhez.",
    },
    highlights: [
      {
        zh: "适合做热卖榜、进口零食专题和限定口味推荐",
        en: "Perfect for bestseller lists, imported snack edits, and limited flavors",
        hu: "Ideal slagerlistakhoz, import nasi valogatasokhoz es limitalt izzesekhez",
      },
      {
        zh: "支持按口味、品牌和分享装规格做筛选",
        en: "Supports flavor, brand, and sharing-pack filters",
        hu: "Iz, marka es csaladi kiszereles szerinti szuresre is alkalmas",
      },
    ],
    subcategories: [
      { slug: "chips-crackers", title: { zh: "薯片饼干", en: "Chips & Crackers", hu: "Chipsek es kekszek" } },
      { slug: "seaweed-jelly", title: { zh: "海苔果冻", en: "Seaweed & Jelly", hu: "Alga es zsele" } },
      { slug: "gift-snacks", title: { zh: "分享装零食", en: "Sharing Packs", hu: "Megosztos nasik" } },
    ],
  },
  {
    slug: "seafood",
    icon: "海",
    theme: "from-cyan-200 via-white to-blue-100",
    heroImage:
      "https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&w=1200&q=80",
    title: { zh: "海鲜", en: "Seafood", hu: "Tenger gyumolcsei" },
    shortDescription: {
      zh: "虾、鱼片、贝类和火锅海鲜盘，适合周末聚餐和节日大餐。",
      en: "Shrimp, fish fillets, shellfish, and seafood platters for hotpot and weekend dinners.",
      hu: "Rakok, halszeletek, kagylok es hotpot taltengeri valogatasok.",
    },
    longDescription: {
      zh: "适合做冷柜专区、火锅海鲜组合和节庆采购专题，强调新鲜感和规格信息。",
      en: "Ideal for freezer highlights, seafood combinations, and festive shopping with clear freshness and sizing info.",
      hu: "Fagyasztos kiemelesekhez, tengeri kombinaciokhoz es unnepi bevasarlashoz egyarant eros kategoria.",
    },
    highlights: [
      {
        zh: "适合按规格、整只或去壳状态以及冷冻方式筛选",
        en: "Works well with size, shell-on, shell-off, and freezing-method filters",
        hu: "Jol szurheto meret, pucoltseg es fagyasztasi mod szerint",
      },
      {
        zh: "适合火锅拼盘、节庆海鲜餐和家庭冷冻常备",
        en: "Great for hotpot platters, festive seafood dinners, and freezer essentials",
        hu: "Hotpot talakhoz, unnepi vacsorakhoz es fagyasztos alapkeszlethez is idealis",
      },
    ],
    subcategories: [
      { slug: "shrimp", title: { zh: "虾类", en: "Shrimp", hu: "Rak" } },
      { slug: "fish-fillet", title: { zh: "鱼片", en: "Fish Fillets", hu: "Halszeletek" } },
      { slug: "shellfish", title: { zh: "贝类", en: "Shellfish", hu: "Kagylok" } },
    ],
  },
  {
    slug: "desserts",
    icon: "甜",
    theme: "from-rose-200 via-white to-yellow-100",
    heroImage:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
    title: { zh: "甜品", en: "Desserts", hu: "Desszertek" },
    shortDescription: {
      zh: "麻薯、蛋糕卷、布丁、雪糕和饭后最容易想带走的一点甜。",
      en: "Mochi, cake rolls, pudding, ice cream, and easy dessert picks for after dinner.",
      hu: "Mocsi, piskotatekercs, pudding, fagylalt es vacsora utani desszertek.",
    },
    longDescription: {
      zh: "这一区很适合做下午茶、节庆礼盒和新品甜点展示，也适合做联名甜品专题。",
      en: "A strong category for tea-time picks, festive dessert boxes, and new sweet collaborations.",
      hu: "Kivalo teazas valogatasokhoz, unnepi desszertdobozokhoz es uj edessegek kiemelesehez.",
    },
    highlights: [
      {
        zh: "适合按冷藏、冷冻和常温甜品做分层展示",
        en: "Easy to segment into chilled, frozen, and shelf-stable desserts",
        hu: "Jol retegzett hutott, fagyasztott es polcos desszertek szerint",
      },
      {
        zh: "适合做下午茶、新品和节庆送礼专题",
        en: "Great for afternoon tea, new arrivals, and gift-ready dessert edits",
        hu: "Teazashoz, ujdonsagokhoz es ajandekdesszertekhez is idealis",
      },
    ],
    subcategories: [
      { slug: "mochi", title: { zh: "麻薯", en: "Mochi", hu: "Mocsi" } },
      { slug: "pudding-cake", title: { zh: "布丁蛋糕", en: "Pudding & Cake", hu: "Pudding es sutemeny" } },
      { slug: "ice-cream", title: { zh: "雪糕冰品", en: "Ice Cream", hu: "Fagylalt" } },
    ],
  },
  {
    slug: "daily-essentials",
    icon: "日",
    theme: "from-lime-200 via-white to-stone-100",
    heroImage:
      "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=1200&q=80",
    title: { zh: "日常用品", en: "Daily Essentials", hu: "Mindennapi hasznalati cikkek" },
    shortDescription: {
      zh: "纸巾、清洁、餐具、厨房消耗品和家里每天都会顺手补上的用品。",
      en: "Tissues, cleaning items, tableware, kitchen supplies, and everyday home essentials.",
      hu: "Papiraruk, tisztitoszerek, evoeszkozok es minden, amit nap mint nap potolni kell.",
    },
    longDescription: {
      zh: "适合和厨房、收纳、清洁专区联动，也适合做家庭补货和门店高频刚需板块。",
      en: "A reliable section for kitchen, storage, cleaning, and routine household restocking.",
      hu: "Megbizhato kategoria konyhai, tarolasi, tisztitasi es mindennapi otthoni utanpotlashoz.",
    },
    highlights: [
      {
        zh: "适合按厨房、清洁和一次性用品分类筛选",
        en: "Works well with kitchen, cleaning, and disposable-item filters",
        hu: "Jol szurheto konyhai, tisztitos es eldobhato termekek szerint",
      },
      {
        zh: "适合做高频刚需、家庭补货和收银台周边推荐",
        en: "Perfect for routine restocks, household basics, and checkout-side picks",
        hu: "Ideal rutin utanpotlashoz, alapcikkekhez es kassza kozeli ajanlatokhoz",
      },
    ],
    subcategories: [
      { slug: "kitchen-tools", title: { zh: "厨房用品", en: "Kitchen Supplies", hu: "Konyhai kellékek" } },
      { slug: "cleaning", title: { zh: "清洁用品", en: "Cleaning", hu: "Tisztitas" } },
      { slug: "tableware", title: { zh: "餐具耗材", en: "Tableware", hu: "Etkezesi kellékek" } },
    ],
  },
);

const categoryOverrides: Record<string, Partial<Category>> = {
  "fresh-produce": {
    title: { zh: "新鲜蔬果", en: "Fresh Produce", hu: "Friss zoldseg es gyumolcs" },
    shortDescription: {
      zh: "叶菜、根茎、菌菇、香草和热带水果按真实门店采购节奏持续更新。",
      en: "Leafy greens, roots, mushrooms, herbs, and tropical fruit updated around real store buying cycles.",
      hu: "Leveles zoldsegek, gyokerek, gombak, fuszernovenyek es tropusi gyumolcsok valos bolti beszerzesi ritmus szerint.",
    },
    longDescription: {
      zh: "适合承接每周到货、门店上新和季节性陈列，是最能体现亚洲超市新鲜度与采购能力的核心大类。",
      en: "Ideal for weekly arrivals, new-in merchandising, and seasonal edits, and the clearest expression of freshness in an Asian market.",
      hu: "Idealis heti beerkezesekhez, uj termekes kiemelesekhez es szezonalis rendezeshez, ez mutatja meg legjobban a bolt frissesseget.",
    },
    highlights: [
      { zh: "可按叶菜、根茎、菌菇、香草与热带水果继续细分", en: "Easy to break down into greens, roots, mushrooms, herbs, and tropical fruit", hu: "Jol bonthato leveles, gyoker, gomba, fuszernoveny es tropusi gyumolcs almappakra" },
      { zh: "适合做本周到货、节气蔬果和火锅必备专题", en: "Works well for weekly arrivals, seasonal produce, and hotpot staples", hu: "Jol mukodik heti beerkezes, szezonalis zoldseg-gyumolcs es hotpot temakhoz" },
    ],
    subcategories: [
      { slug: "leafy-greens", title: { zh: "叶菜类", en: "Leafy Greens", hu: "Leveles zoldsegek" } },
      { slug: "roots", title: { zh: "根茎类", en: "Roots", hu: "Gyokerek" } },
      { slug: "mushrooms", title: { zh: "菌菇类", en: "Mushrooms", hu: "Gombak" } },
      { slug: "herbs", title: { zh: "香草香料菜", en: "Herbs", hu: "Fuszernovenyek" } },
      { slug: "tropical-fruit", title: { zh: "热带水果", en: "Tropical Fruit", hu: "Tropusi gyumolcsok" } },
    ],
  },
  "frozen-deli": {
    title: { zh: "冷冻与熟食", en: "Frozen & Deli", hu: "Fagyasztott es deli" },
    shortDescription: {
      zh: "水饺、烧卖、包点、火锅丸滑和预制熟食，是家庭囤货与聚餐采购的重点区域。",
      en: "Dumplings, dim sum, buns, hotpot balls, and ready deli picks for family stock-ups and gatherings.",
      hu: "Gombocok, dim sum, gombocfelek, hotpot golyok es kesz deli termekek csaladi feltolteshez es osszejovetelekhez.",
    },
    longDescription: {
      zh: "这类商品非常适合做冷柜陈列、周末囤货和门店热卖专题，后面也最容易承接预订与到店自提逻辑。",
      en: "Perfect for freezer merchandising, weekend stock-up edits, and bestsellers, and ready for later preorder or pickup flows.",
      hu: "Kifejezetten eros fagyasztos merchandisinghez, hetvegi feltolteshez es slagertermekes kiemelesekhez, kesobb elorendelessel is jol bovithetto.",
    },
    highlights: [
      { zh: "适合继续拆成水饺云吞、烧卖虾饺、火锅冻品和包点面食", en: "Naturally splits into dumplings, dim sum, hotpot frozen, and buns or pastries", hu: "Jol bonthato gombocokra, dim sumra, hotpot fagyasztottra es tesztas termekekre" },
      { zh: "适合做家庭装、餐饮装和节庆囤货专题", en: "Useful for household packs, catering sizes, and festive stock-up edits", hu: "Jol mukodik otthoni, vendeglato es unnepi feltolto valogatasokhoz" },
    ],
    subcategories: [
      { slug: "dumplings", title: { zh: "水饺云吞", en: "Dumplings & Wontons", hu: "Gombocok es wontonok" } },
      { slug: "dim-sum", title: { zh: "烧卖虾饺", en: "Dim Sum", hu: "Dim sum" } },
      { slug: "hotpot-frozen", title: { zh: "火锅丸滑", en: "Hotpot Frozen", hu: "Hotpot fagyasztott" } },
      { slug: "buns-pastry", title: { zh: "包点面食", en: "Buns & Pastry", hu: "Bunok es tesztak" } },
      { slug: "prepared-deli", title: { zh: "预制熟食", en: "Prepared Deli", hu: "Kesz deli" } },
    ],
  },
  "snacks-drinks": {
    title: { zh: "零食饮料", en: "Snacks & Drinks", hu: "Nassolnivalok es italok" },
    shortDescription: {
      zh: "汽水、茶饮、果汁、办公室零食和便利小食，是最适合做爆款与上新推荐的一类。",
      en: "Soft drinks, tea, juice, office snacks, and convenience treats made for launches and bestseller edits.",
      hu: "Uditok, teaitalok, levek, irodai nasik es gyors finomsagok, amelyek a legjobbak ujdonsagokhoz es slagerlistakhoz.",
    },
    longDescription: {
      zh: "适合做新品、联名、节庆礼盒和社媒传播内容，也是最容易吸引年轻客群浏览的入口类目。",
      en: "Ideal for new arrivals, collaborations, gift edits, and social-first campaigns that attract younger shoppers.",
      hu: "Ujdonsagokhoz, kooperaciokhoz, ajandek valogatasokhoz es kozossegi media kampanyokhoz is eros kategoria.",
    },
    highlights: [
      { zh: "可继续拆成汽水果汁、茶饮咖啡、即饮饮料和便利零食", en: "Can be segmented into soda, juice, tea, coffee, ready-to-drink, and snack picks", hu: "Bonthato uditokre, levekre, teara, kavera, azonnal ihato es nasi al-kategoriakra" },
      { zh: "适合做热卖榜、新品榜和节庆礼盒推荐", en: "Great for bestseller lists, new-in picks, and festive gift edits", hu: "Slagerlistakhoz, uj termekekhez es unnepi valogatasokhoz egyarant jo" },
    ],
    subcategories: [
      { slug: "sparkling", title: { zh: "汽水果汁", en: "Soda & Juice", hu: "Uditok es levek" } },
      { slug: "tea-coffee", title: { zh: "茶饮咖啡", en: "Tea & Coffee", hu: "Tea es kave" } },
      { slug: "sweet-snacks", title: { zh: "便利零食", en: "Convenience Snacks", hu: "Gyors nasik" } },
      { slug: "functional-drinks", title: { zh: "功能饮料", en: "Functional Drinks", hu: "Funkcionalis italok" } },
      { slug: "instant-drinks", title: { zh: "冲泡饮品", en: "Instant Drinks", hu: "Poritalok es instant italok" } },
    ],
  },
  "sauces-pantry": {
    title: { zh: "调味与粮油", en: "Sauces & Pantry", hu: "Szoszok es kamra" },
    shortDescription: {
      zh: "酱油、醋、辣酱、火锅底料、米面粮油和干货，是最适合做长期目录沉淀的大类。",
      en: "Soy sauce, vinegar, chili condiments, hotpot bases, rice, noodles, and dry goods for a deep long-tail catalog.",
      hu: "Szojaszosz, ecet, csipos szoszok, hotpot alapok, rizs, tesztak es szaraz aru mely katalogushoz.",
    },
    longDescription: {
      zh: "这一类最适合接品牌、规格、辣度和烹饪场景等后台字段，也适合扩展成食谱搭配与专题推荐。",
      en: "Best suited for backend-driven brand, pack size, spice level, and cooking-use data, plus recipe and pairing content.",
      hu: "Ez a kategoria kapcsolhato legjobban markakhoz, meretekhez, csiposseghez es felhasznalasi modokhoz, valamint receptekhez is.",
    },
    highlights: [
      { zh: "适合继续细分为酱油醋、火锅底料、辣椒酱、米面粮油和干货", en: "Breaks down well into soy sauces, hotpot bases, chili condiments, rice and noodles, and dry goods", hu: "Jol bonthato szojaszoszra, hotpot alapra, csipos szoszokra, rizs-tesztara es szaraz arura" },
      { zh: "适合做菜谱搭配、品牌推荐和厨房常备专题", en: "Ideal for recipe pairings, brand edits, and pantry essential features", hu: "Receptekhez, markaajanlokhoz es kamra alapanyag kiemelesekhez kifejezetten jo" },
    ],
    subcategories: [
      { slug: "soy-sauce", title: { zh: "酱油醋类", en: "Soy Sauce & Vinegar", hu: "Szojaszosz es ecet" } },
      { slug: "hotpot-base", title: { zh: "火锅底料", en: "Hotpot Base", hu: "Hotpot alap" } },
      { slug: "chili-condiments", title: { zh: "辣椒酱料", en: "Chili Condiments", hu: "Csipos szoszok" } },
      { slug: "rice-noodles", title: { zh: "米面粮油", en: "Rice, Noodles & Oils", hu: "Rizs, teszta es olaj" } },
      { slug: "dry-goods", title: { zh: "干货香料", en: "Dry Goods & Spices", hu: "Szaraz aru es fuszerek" } },
    ],
  },
  "asian-snacks": {
    title: { zh: "亚洲零食", en: "Asian Snacks", hu: "Azsiai nasik" },
    shortDescription: {
      zh: "薯片、米果、海苔、果冻、辣味小食和分享装，是最适合做热卖榜单的高频板块。",
      en: "Chips, rice crackers, seaweed, jelly, spicy bites, and share packs built for snack-led bestseller edits.",
      hu: "Chipsek, rizskekszek, alga, zsele, csipos falatok es megoszthato csomagok a nasi slagerlistakhoz.",
    },
    longDescription: {
      zh: "很适合做办公室团购、周末追剧零食、社媒爆款和节庆礼盒搭配，更新节奏也可以更灵活。",
      en: "A strong category for office stock-ups, weekend sharing, social favorites, and seasonal snack gifting.",
      hu: "Irodai feltolteshez, hetvegi megosztos nasikhoz, kozossegi media kedvencekhez es unnepi nasi valogatasokhoz is jo.",
    },
    highlights: [
      { zh: "可拆成薯片米果、海苔果冻、糖果软糖、辣味零食和分享装", en: "Easy to split into chips, seaweed, jelly, sweets, spicy snacks, and sharing packs", hu: "Bonthato chipsre, algara, zselere, edessegre, csipos nasira es megoszthato csomagokra" },
      { zh: "适合做爆款榜、进口零食专题和限时口味推荐", en: "Works well for viral picks, imported snack edits, and limited flavor drops", hu: "Slagerlistakhoz, import nasi valogatasokhoz es limitalt izzesekhez idealis" },
    ],
    subcategories: [
      { slug: "chips-crackers", title: { zh: "薯片米果", en: "Chips & Rice Crackers", hu: "Chipsek es rizskekszek" } },
      { slug: "seaweed-jelly", title: { zh: "海苔果冻", en: "Seaweed & Jelly", hu: "Alga es zsele" } },
      { slug: "candies", title: { zh: "糖果软糖", en: "Candy & Gummies", hu: "Cukorkak es gumicukor" } },
      { slug: "spicy-snacks", title: { zh: "辣味零食", en: "Spicy Snacks", hu: "Csipos nasik" } },
      { slug: "gift-snacks", title: { zh: "分享装", en: "Sharing Packs", hu: "Megoszthato csomagok" } },
    ],
  },
  seafood: {
    title: { zh: "海鲜", en: "Seafood", hu: "Tenger gyumolcsei" },
    shortDescription: {
      zh: "虾、鱼片、贝类、鱿鱼和火锅海鲜组合，适合周末聚餐和节庆采购。",
      en: "Shrimp, fish fillets, shellfish, squid, and hotpot seafood combinations for weekend and festive shopping.",
      hu: "Rak, halszeletek, kagylok, tintahal es hotpot tengeri kombinaciok hetvegi es unnepi bevasarlashoz.",
    },
    longDescription: {
      zh: "适合做冷冻海鲜专区、火锅拼盘和家庭冷柜常备专题，强调规格、产地和使用场景会更好卖。",
      en: "Ideal for frozen seafood edits, hotpot platters, and freezer staples, especially when graded by size, origin, and use case.",
      hu: "Fagyasztott tengeri valogatasokhoz, hotpot talakhoz es alap fagyasztos keszlethez, ahol a meret, szarmazas es felhasznalas kulcsfontossagu.",
    },
    highlights: [
      { zh: "适合继续拆成虾类、鱼片、贝类、鱿鱼章鱼和火锅海鲜", en: "Naturally splits into shrimp, fish fillets, shellfish, squid or octopus, and hotpot seafood", hu: "Jol bonthato rakra, halszeletre, kagylora, tintahal-polipra es hotpot tengeri al-kategoriara" },
      { zh: "适合做节庆海鲜餐、火锅拼盘和冷柜常备专题", en: "Great for festive seafood dinners, hotpot platters, and freezer essentials", hu: "Unnepi tengeri vacsorakhoz, hotpot talakhoz es fagyasztos alapkeszlethez idealis" },
    ],
    subcategories: [
      { slug: "shrimp", title: { zh: "虾类", en: "Shrimp", hu: "Rak" } },
      { slug: "fish-fillet", title: { zh: "鱼片", en: "Fish Fillets", hu: "Halszeletek" } },
      { slug: "shellfish", title: { zh: "贝类", en: "Shellfish", hu: "Kagylok" } },
      { slug: "squid-octopus", title: { zh: "鱿鱼章鱼", en: "Squid & Octopus", hu: "Tintahal es polip" } },
      { slug: "hotpot-seafood", title: { zh: "火锅海鲜", en: "Hotpot Seafood", hu: "Hotpot tengeri valogatas" } },
    ],
  },
  desserts: {
    title: { zh: "甜品", en: "Desserts", hu: "Desszertek" },
    shortDescription: {
      zh: "麻薯、布丁、蛋糕、雪糕和饭后甜点，是茶饮、伴手礼和节庆礼盒的高适配板块。",
      en: "Mochi, pudding, cakes, ice cream, and after-dinner sweets for tea time, gifting, and festive edits.",
      hu: "Mocsi, pudding, sutemenyek, fagylalt es vacsora utani edessegek teazashoz, ajandekozashoz es unnepi valogatasokhoz.",
    },
    longDescription: {
      zh: "这一类很适合做下午茶、新品甜点、礼盒搭配和节庆送礼专题，也最容易强化品牌精致感。",
      en: "Perfect for afternoon tea edits, new dessert launches, gift boxes, and premium seasonal sweet stories.",
      hu: "Nagyon eros teatime valogatasokhoz, uj desszert megjelenesekhez, ajandekdobozokhoz es premium unnepi temakhoz.",
    },
    highlights: [
      { zh: "适合继续拆成麻薯、布丁果冻、蛋糕卷和雪糕冰品", en: "Easy to continue into mochi, pudding, jelly, cake, and frozen desserts", hu: "Jol bonthato mocsira, puddingra, zselere, sutemenyre es fagyasztott desszertekre" },
      { zh: "适合做下午茶、新品甜点和节庆送礼专题", en: "Strong for afternoon tea, new dessert edits, and festive gifting", hu: "Delutani teahoz, uj desszertekhez es unnepi ajandekozashoz is eros" },
    ],
    subcategories: [
      { slug: "mochi", title: { zh: "麻薯", en: "Mochi", hu: "Mocsi" } },
      { slug: "pudding-cake", title: { zh: "布丁蛋糕", en: "Pudding & Cake", hu: "Pudding es sutemeny" } },
      { slug: "ice-cream", title: { zh: "雪糕冰品", en: "Ice Cream", hu: "Fagylalt" } },
      { slug: "bakery-desserts", title: { zh: "烘焙甜点", en: "Bakery Desserts", hu: "Peksegi desszertek" } },
    ],
  },
  "daily-essentials": {
    title: { zh: "日常用品", en: "Daily Essentials", hu: "Mindennapi hasznalati cikkek" },
    shortDescription: {
      zh: "厨房用品、清洁用品、餐具耗材和保鲜收纳，承接家庭补货和门店高频刚需。",
      en: "Kitchen tools, cleaning supplies, tableware, and storage items for routine household and store needs.",
      hu: "Konyhai kellékek, tisztitoszerek, etkezesi kiegeszitok es tarolasi cikkek mindennapi otthoni es bolti utanpotlashoz.",
    },
    longDescription: {
      zh: "这一类适合做厨房常备、家庭补货、门店前台顺手购和节庆聚餐一次性用品推荐。",
      en: "A practical category for kitchen basics, household restocks, checkout add-ons, and disposable gathering supplies.",
      hu: "Praktikus kategoria konyhai alapokhoz, haztartasi utanpotlashoz, kassza melletti kiegeszitokhoz es unnepi eldobhato termekekhez.",
    },
    highlights: [
      { zh: "适合继续拆成厨房用品、清洁用品、餐具耗材和保鲜收纳", en: "Can be grouped into kitchen, cleaning, tableware, and storage", hu: "Bonthato konyhai, tisztitos, etkezesi es tarolasi al-kategoriakra" },
      { zh: "适合做日常补货、聚餐准备和厨房整理专题", en: "Useful for weekly restock, gathering prep, and kitchen organization edits", hu: "Heti utanpotlashoz, vendegvarashoz es konyhai rendezeshez egyarant jo" },
    ],
    subcategories: [
      { slug: "kitchen-tools", title: { zh: "厨房用品", en: "Kitchen Supplies", hu: "Konyhai kellekek" } },
      { slug: "cleaning", title: { zh: "清洁用品", en: "Cleaning", hu: "Tisztitas" } },
      { slug: "tableware", title: { zh: "餐具耗材", en: "Tableware", hu: "Etkezesi kellekek" } },
      { slug: "storage-wrap", title: { zh: "保鲜收纳", en: "Storage & Wrap", hu: "Tarolas es folia" } },
      { slug: "disposable", title: { zh: "一次性用品", en: "Disposable Supplies", hu: "Eldobhato kellekek" } },
    ],
  },
};

categories.forEach((category) => {
  const override = categoryOverrides[category.slug];
  if (!override) {
    return;
  }

  Object.assign(category, override);
});

export const products: Product[] = [
  {
    slug: "shanghai-bok-choy",
    categorySlug: "fresh-produce",
    subcategorySlug: "leafy-greens",
    sku: "FP-1001",
    badge: "new",
    priceLabel: "€2.80 / bunch",
    stockStatus: "in-stock",
    title: { zh: "上海青", en: "Shanghai Bok Choy", hu: "Sanghai pak choi" },
    subtitle: {
      zh: "门店高频补货叶菜",
      en: "High-turnover leafy green",
      hu: "Gyakran ujratoltott leveles aru",
    },
    description: {
      zh: "适合清炒、火锅和煲汤，能很好体现门店的当周新鲜到货节奏。",
      en: "Ideal for stir-fries, hotpot, and soups, and a great representation of fresh weekly arrivals.",
      hu: "Remek wokhoz, hotpothoz es leveshez, jol mutatja a heti friss beerkezest.",
    },
    origin: { zh: "荷兰温室", en: "Dutch greenhouse", hu: "Holland uveghaz" },
    brand: "Panda Select",
    brandSlug: "panda-select",
    size: { zh: "250g / 把", en: "250g / bunch", hu: "250g / csokor" },
    tags: [
      { zh: "火锅必备", en: "Hotpot staple", hu: "Hotpot alap" },
      { zh: "门店热卖", en: "Store bestseller", hu: "Bolt slager" },
    ],
    filters: [
      { key: "subcategory", value: "leafy-greens", label: { zh: "叶菜类", en: "Leafy Greens", hu: "Leveles zoldseg" } },
      { key: "brand", value: "panda-select", label: { zh: "熊猫精选", en: "Panda Select", hu: "Panda Select" } },
      { key: "origin", value: "netherlands", label: { zh: "荷兰", en: "Netherlands", hu: "Hollandia" } },
      { key: "dietary", value: "vegan", label: { zh: "纯素", en: "Vegan", hu: "Vegan" } },
    ],
    attributes: [
      {
        key: "temperature",
        label: { zh: "储存方式", en: "Storage", hu: "Tarolas" },
        value: { zh: "冷藏", en: "Chilled", hu: "Hutott" },
      },
      {
        key: "occasion",
        label: { zh: "推荐场景", en: "Best for", hu: "Javasolt alkalom" },
        value: { zh: "火锅 / 家常快炒", en: "Hotpot / home cooking", hu: "Hotpot / otthoni fozes" },
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=900&q=80",
        alt: { zh: "新鲜上海青", en: "Fresh bok choy", hu: "Friss pak choi" },
      },
      {
        src: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80",
        alt: { zh: "叶菜陈列", en: "Leafy greens display", hu: "Leveles aru display" },
      },
    ],
    gradient: "from-emerald-500/40 via-lime-100 to-white",
  },
  {
    slug: "handmade-pork-dumplings",
    categorySlug: "frozen-deli",
    subcategorySlug: "dumplings",
    sku: "FD-2033",
    badge: "popular",
    priceLabel: "€6.90 / pack",
    stockStatus: "in-stock",
    title: { zh: "手工猪肉水饺", en: "Handmade Pork Dumplings", hu: "Kezmuves serteshusos gomboc" },
    subtitle: {
      zh: "家庭装速冻经典单品",
      en: "Family freezer classic",
      hu: "Csaladi fagyasztott klasszikus",
    },
    description: {
      zh: "适合做囤货、聚餐和门店热销推荐，后续也适合接预订与到店自提逻辑。",
      en: "A strong frozen bestseller for family stock-up, gatherings, and future preorder workflows.",
      hu: "Csaladi feltolteshez, vendegvarashoz es kesobbi elorendeleshez is eros termek.",
    },
    origin: { zh: "匈牙利门店精选", en: "Store-selected in Hungary", hu: "Magyarorszagon valogatva" },
    brand: "North Harbor",
    brandSlug: "north-harbor",
    size: { zh: "800g", en: "800g", hu: "800g" },
    tags: [
      { zh: "家庭囤货", en: "Family stock-up", hu: "Csaladi keszlet" },
      { zh: "热卖", en: "Bestseller", hu: "Nepszeru" },
    ],
    filters: [
      { key: "subcategory", value: "dumplings", label: { zh: "水饺点心", en: "Dumplings & Dim Sum", hu: "Gomboc es dim sum" } },
      { key: "brand", value: "north-harbor", label: { zh: "北港", en: "North Harbor", hu: "North Harbor" } },
      { key: "origin", value: "hungary", label: { zh: "匈牙利精选", en: "Hungary selected", hu: "Magyar valogatas" } },
      { key: "dietary", value: "contains-meat", label: { zh: "含肉", en: "Contains meat", hu: "Hust tartalmaz" } },
    ],
    attributes: [
      {
        key: "temperature",
        label: { zh: "储存方式", en: "Storage", hu: "Tarolas" },
        value: { zh: "冷冻", en: "Frozen", hu: "Melyhutott" },
      },
      {
        key: "format",
        label: { zh: "包装形式", en: "Pack format", hu: "Kiszereles" },
        value: { zh: "家庭装", en: "Family pack", hu: "Csaladi csomag" },
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
        alt: { zh: "水饺近景", en: "Dumplings close-up", hu: "Gomboc kozelrol" },
      },
      {
        src: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=80",
        alt: { zh: "冷冻点心", en: "Frozen dumpling selection", hu: "Fagyasztott valogatas" },
      },
    ],
    gradient: "from-sky-500/35 via-cyan-100 to-white",
  },
  {
    slug: "white-peach-soda",
    categorySlug: "snacks-drinks",
    subcategorySlug: "sparkling",
    sku: "SD-1142",
    badge: "seasonal",
    priceLabel: "€2.20 / bottle",
    stockStatus: "limited",
    title: { zh: "白桃汽水", en: "White Peach Soda", hu: "Feher oszibarack udito" },
    subtitle: {
      zh: "社媒高热度饮品",
      en: "Social-friendly trending drink",
      hu: "Kozossegi mediaban nepszeru ital",
    },
    description: {
      zh: "适合首页新品、联名、夏日推荐和便利店饮品专题。",
      en: "Perfect for seasonal features, collaboration edits, and convenience-style drink curation.",
      hu: "Tokeletes szezonalis kiemeleshez, egyuttmukodesekhez es ital valogatasokhoz.",
    },
    origin: { zh: "日本", en: "Japan", hu: "Japan" },
    brand: "Momo Pop",
    brandSlug: "momo-pop",
    size: { zh: "330ml", en: "330ml", hu: "330ml" },
    tags: [
      { zh: "限时推荐", en: "Seasonal pick", hu: "Szezonalis valasztas" },
      { zh: "饮料", en: "Drink", hu: "Ital" },
    ],
    filters: [
      { key: "subcategory", value: "sparkling", label: { zh: "汽水饮料", en: "Sparkling Drinks", hu: "Szensavas italok" } },
      { key: "brand", value: "momo-pop", label: { zh: "桃气泡", en: "Momo Pop", hu: "Momo Pop" } },
      { key: "origin", value: "japan", label: { zh: "日本", en: "Japan", hu: "Japan" } },
      { key: "dietary", value: "vegetarian", label: { zh: "素食友好", en: "Vegetarian", hu: "Vega" } },
    ],
    attributes: [
      {
        key: "temperature",
        label: { zh: "饮用建议", en: "Best served", hu: "Legjobb fogyasztas" },
        value: { zh: "冰镇", en: "Chilled", hu: "Behutve" },
      },
      {
        key: "occasion",
        label: { zh: "推荐场景", en: "Best for", hu: "Alkalom" },
        value: { zh: "下午茶 / 聚会", en: "Tea break / gatherings", hu: "Teazas / osszejovetel" },
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",
        alt: { zh: "白桃汽水", en: "Peach soda", hu: "Barack udito" },
      },
      {
        src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
        alt: { zh: "饮料陈列", en: "Drink display", hu: "Ital display" },
      },
    ],
    gradient: "from-rose-400/35 via-orange-100 to-white",
  },
  {
    slug: "sichuan-hotpot-base",
    categorySlug: "sauces-pantry",
    subcategorySlug: "hotpot-base",
    sku: "SP-3308",
    badge: "popular",
    priceLabel: "€4.50 / box",
    stockStatus: "in-stock",
    title: { zh: "四川火锅底料", en: "Sichuan Hotpot Base", hu: "Szecsuani hotpot alap" },
    subtitle: {
      zh: "火锅专区核心单品",
      en: "Core hotpot pantry item",
      hu: "Alap hotpot kamra termek",
    },
    description: {
      zh: "适合接菜谱、食材搭配和辣度筛选，是很典型的后台目录商品结构样本。",
      en: "A strong candidate for recipes, ingredient pairings, and spice-level filtering in a backend-driven catalog.",
      hu: "Receptekhez, hozzavalo parositasokhoz es csipossegi szurokhöz idealis termek.",
    },
    origin: { zh: "中国四川", en: "Sichuan, China", hu: "Szecsuan, Kina" },
    brand: "River Spice",
    brandSlug: "river-spice",
    size: { zh: "220g", en: "220g", hu: "220g" },
    tags: [
      { zh: "火锅", en: "Hotpot", hu: "Hotpot" },
      { zh: "调味", en: "Sauce", hu: "Szosz" },
    ],
    filters: [
      { key: "subcategory", value: "hotpot-base", label: { zh: "火锅底料", en: "Hotpot Base", hu: "Hotpot alap" } },
      { key: "brand", value: "river-spice", label: { zh: "川河香", en: "River Spice", hu: "River Spice" } },
      { key: "origin", value: "china", label: { zh: "中国", en: "China", hu: "Kina" } },
      { key: "dietary", value: "contains-spice", label: { zh: "辛辣", en: "Spicy", hu: "Csipos" } },
    ],
    attributes: [
      {
        key: "spiceLevel",
        label: { zh: "辣度", en: "Spice level", hu: "Csiposseg" },
        value: { zh: "中高辣", en: "Medium-high", hu: "Kozepesen eros" },
      },
      {
        key: "occasion",
        label: { zh: "推荐场景", en: "Best for", hu: "Alkalom" },
        value: { zh: "家庭火锅 / 聚餐", en: "Home hotpot / gatherings", hu: "Otthoni hotpot / vendegseg" },
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1512003867696-6d5ce6835040?auto=format&fit=crop&w=900&q=80",
        alt: { zh: "火锅底料", en: "Hotpot base", hu: "Hotpot alap" },
      },
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        alt: { zh: "火锅食材", en: "Hotpot ingredients", hu: "Hotpot hozzavalok" },
      },
    ],
    gradient: "from-amber-500/35 via-yellow-100 to-white",
  },
];

products.push(
  {
    slug: "wasabi-rice-crackers",
    categorySlug: "asian-snacks",
    subcategorySlug: "chips-crackers",
    sku: "AS-2204",
    badge: "popular",
    priceLabel: "€3.60 / pack",
    stockStatus: "in-stock",
    title: { zh: "芥末米果", en: "Wasabi Rice Crackers", hu: "Wasabis rizskeksz" },
    subtitle: { zh: "办公室和追剧都很适合", en: "A crunchy favorite for desks and movie nights", hu: "Ropogos kedvenc irodaba es filmezeshez" },
    description: {
      zh: "适合做亚洲零食专题、办公室囤货和分享装推荐。",
      en: "Ideal for imported snack edits, office stock-ups, and sharing recommendations.",
      hu: "Import nasi valogatasokhoz es irodai keszlethez is idealis.",
    },
    origin: { zh: "日本", en: "Japan", hu: "Japan" },
    brand: "Snack Harbor",
    brandSlug: "snack-harbor",
    size: { zh: "180g", en: "180g", hu: "180g" },
    tags: [
      { zh: "零食热卖", en: "Snack bestseller", hu: "Nasi slager" },
      { zh: "分享装", en: "Sharing pack", hu: "Megosztos csomag" },
    ],
    filters: [
      { key: "subcategory", value: "chips-crackers", label: { zh: "薯片饼干", en: "Chips & Crackers", hu: "Chipsek es kekszek" } },
      { key: "brand", value: "snack-harbor", label: { zh: "零食港", en: "Snack Harbor", hu: "Snack Harbor" } },
      { key: "origin", value: "japan", label: { zh: "日本", en: "Japan", hu: "Japan" } },
      { key: "dietary", value: "vegetarian", label: { zh: "素食友好", en: "Vegetarian", hu: "Vega" } },
    ],
    attributes: [
      { key: "format", label: { zh: "Pack format", en: "Pack format", hu: "Kiszereles" }, value: { zh: "Sharing pack", en: "Sharing pack", hu: "Megosztos csomag" } },
      { key: "occasion", label: { zh: "Best for", en: "Best for", hu: "Alkalom" }, value: { zh: "Tea break", en: "Tea break", hu: "Teazas" } },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&w=900&q=80", alt: { zh: "Rice crackers", en: "Rice crackers", hu: "Rizskeksz" } },
      { src: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&w=900&q=80", alt: { zh: "Snack display", en: "Snack display", hu: "Nasi display" } },
    ],
    gradient: "from-pink-400/35 via-amber-100 to-white",
  },
  {
    slug: "black-tiger-shrimp",
    categorySlug: "seafood",
    subcategorySlug: "shrimp",
    sku: "SF-4106",
    badge: "popular",
    priceLabel: "€9.80 / tray",
    stockStatus: "in-stock",
    title: { zh: "黑虎虾", en: "Black Tiger Shrimp", hu: "Fekete tigrisrak" },
    subtitle: { zh: "火锅和烧烤都合适", en: "A reliable pick for hotpot and garlic grills", hu: "Hotpothoz es grillhez is remek valasztas" },
    description: {
      zh: "规格清晰、用途广，适合做海鲜专区主打，也适合家庭冷冻常备。",
      en: "Clearly graded and versatile, ideal for seafood highlights and home freezer stock.",
      hu: "Jol jelolt meretu, sokoldalu tengeri termek kiemeleshez es fagyasztos keszlethez.",
    },
    origin: { zh: "越南", en: "Vietnam", hu: "Vietnam" },
    brand: "Ocean Basket",
    brandSlug: "ocean-basket",
    size: { zh: "500g", en: "500g", hu: "500g" },
    tags: [
      { zh: "海鲜热卖", en: "Seafood favorite", hu: "Tengeri kedvenc" },
      { zh: "火锅推荐", en: "Hotpot pick", hu: "Hotpot valasztas" },
    ],
    filters: [
      { key: "subcategory", value: "shrimp", label: { zh: "虾类", en: "Shrimp", hu: "Rak" } },
      { key: "brand", value: "ocean-basket", label: { zh: "海鲜篮", en: "Ocean Basket", hu: "Ocean Basket" } },
      { key: "origin", value: "vietnam", label: { zh: "越南", en: "Vietnam", hu: "Vietnam" } },
      { key: "dietary", value: "contains-seafood", label: { zh: "海鲜", en: "Seafood", hu: "Tengeri etel" } },
    ],
    attributes: [
      { key: "temperature", label: { zh: "Storage", en: "Storage", hu: "Tarolas" }, value: { zh: "Frozen", en: "Frozen", hu: "Melyhutott" } },
      { key: "occasion", label: { zh: "Best for", en: "Best for", hu: "Alkalom" }, value: { zh: "Hotpot", en: "Hotpot", hu: "Hotpot" } },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&w=900&q=80", alt: { zh: "Black tiger shrimp", en: "Black tiger shrimp", hu: "Tigrisrak" } },
      { src: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80", alt: { zh: "Seafood display", en: "Seafood display", hu: "Tengeri display" } },
    ],
    gradient: "from-cyan-500/35 via-sky-100 to-white",
  },
  {
    slug: "matcha-mochi",
    categorySlug: "desserts",
    subcategorySlug: "mochi",
    sku: "DS-1205",
    badge: "new",
    priceLabel: "€4.20 / box",
    stockStatus: "limited",
    title: { zh: "抹茶麻薯", en: "Matcha Mochi", hu: "Matchas mocsi" },
    subtitle: { zh: "下午茶甜点", en: "A soft, giftable sweet for tea time and holiday boxes", hu: "Puha desszert teazashoz es unnepekre" },
    description: {
      zh: "口感软糯、甜度轻，适合做甜品专区、新品推荐和送礼专题。",
      en: "Soft and lightly sweet, perfect for dessert highlights, new arrivals, and gifting.",
      hu: "Lagyan ragacsos es finoman edes, desszert kiemelesekhez es ajandekcsomagokhoz idealis.",
    },
    origin: { zh: "台湾", en: "Taiwan", hu: "Taiwan" },
    brand: "Sweet Cloud",
    brandSlug: "sweet-cloud",
    size: { zh: "210g", en: "210g", hu: "210g" },
    tags: [
      { zh: "甜品推荐", en: "Dessert pick", hu: "Desszert valasztas" },
      { zh: "下午茶", en: "Tea time", hu: "Teazas" },
    ],
    filters: [
      { key: "subcategory", value: "mochi", label: { zh: "麻薯", en: "Mochi", hu: "Mocsi" } },
      { key: "brand", value: "sweet-cloud", label: { zh: "甜云", en: "Sweet Cloud", hu: "Sweet Cloud" } },
      { key: "origin", value: "taiwan", label: { zh: "台湾", en: "Taiwan", hu: "Taiwan" } },
      { key: "dietary", value: "vegetarian", label: { zh: "素食友好", en: "Vegetarian", hu: "Vega" } },
    ],
    attributes: [
      { key: "temperature", label: { zh: "Storage", en: "Storage", hu: "Tarolas" }, value: { zh: "Shelf stable", en: "Shelf stable", hu: "Szobahomerseklet" } },
      { key: "occasion", label: { zh: "Best for", en: "Best for", hu: "Alkalom" }, value: { zh: "Gifting", en: "Gifting", hu: "Ajandek" } },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80", alt: { zh: "Matcha mochi", en: "Matcha mochi", hu: "Matchas mocsi" } },
      { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80", alt: { zh: "Dessert display", en: "Dessert display", hu: "Desszert display" } },
    ],
    gradient: "from-rose-400/35 via-yellow-100 to-white",
  },
  {
    slug: "kitchen-paper-rolls",
    categorySlug: "daily-essentials",
    subcategorySlug: "cleaning",
    sku: "DE-5402",
    badge: "popular",
    priceLabel: "€5.10 / pack",
    stockStatus: "in-stock",
    title: { zh: "厨房纸巾", en: "Kitchen Paper Rolls", hu: "Konyhai torlopapir" },
    subtitle: { zh: "家庭补货常备", en: "An easy add-to-cart essential for every week", hu: "Hetrol hetre ujravasarolt alapdarab" },
    description: {
      zh: "适合日常补货、厨房清洁和门店收银台周边陈列。",
      en: "A dependable everyday restock item for kitchens, cleaning, and checkout-side placement.",
      hu: "Megbizhato utanpotlas konyhaba, takaritashoz es kassza kozeli elhelyezeshez.",
    },
    origin: { zh: "匈牙利", en: "Hungary", hu: "Magyarorszag" },
    brand: "Home Daily",
    brandSlug: "home-daily",
    size: { zh: "6卷装", en: "Pack of 6", hu: "6 tekercs" },
    tags: [
      { zh: "刚需补货", en: "Everyday restock", hu: "Mindennapi utanpotlas" },
      { zh: "厨房用品", en: "Kitchen essential", hu: "Konyhai alap" },
    ],
    filters: [
      { key: "subcategory", value: "cleaning", label: { zh: "清洁用品", en: "Cleaning", hu: "Tisztitas" } },
      { key: "brand", value: "home-daily", label: { zh: "日日家", en: "Home Daily", hu: "Home Daily" } },
      { key: "origin", value: "hungary", label: { zh: "匈牙利", en: "Hungary", hu: "Magyarorszag" } },
      { key: "dietary", value: "household", label: { zh: "家居用品", en: "Household", hu: "Haztartasi" } },
    ],
    attributes: [
      { key: "format", label: { zh: "Pack format", en: "Pack format", hu: "Kiszereles" }, value: { zh: "Home pack", en: "Home pack", hu: "Csaladi csomag" } },
      { key: "occasion", label: { zh: "Best for", en: "Best for", hu: "Alkalom" }, value: { zh: "Kitchen", en: "Kitchen", hu: "Konyha" } },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=900&q=80", alt: { zh: "Kitchen paper towels", en: "Kitchen paper towels", hu: "Konyhai torlopapir" } },
      { src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80", alt: { zh: "Household essentials", en: "Household essentials", hu: "Haztartasi alapok" } },
    ],
    gradient: "from-lime-400/35 via-stone-100 to-white",
  },
);

products.push(
  {
    slug: "enoki-mushroom",
    categorySlug: "fresh-produce",
    subcategorySlug: "mushrooms",
    sku: "FP-1036",
    badge: "popular",
    priceLabel: "€2.10 / pack",
    stockStatus: "in-stock",
    title: { zh: "金针菇", en: "Enoki Mushroom", hu: "Enoki gomba" },
    subtitle: { zh: "火锅、汤面和日式小菜都常备的一款菌菇", en: "A mushroom staple for hotpot, noodles, and small plates", hu: "Alap gomba hotpothoz, leveshez es koetekhez" },
    description: {
      zh: "门店高频补货的菌菇单品，适合火锅、汤面和快手炒菜，放在新鲜蔬果区很容易形成搭配购买。",
      en: "A frequent restock item that fits hotpot, noodle bowls, and quick stir-fries, and pairs well with fresh greens.",
      hu: "Gyakran utantoltott termek hotpothoz, tesztaleveshez es gyors serpenyos etelekhez, jol parosithato friss zoldekkel.",
    },
    origin: { zh: "韩国", en: "Korea", hu: "Del-Korea" },
    brand: "Panda Fresh",
    brandSlug: "panda-fresh",
    size: { zh: "200g / 盒", en: "200g / box", hu: "200g / doboz" },
    tags: [
      { zh: "菌菇热卖", en: "Mushroom pick", hu: "Gomba kedvenc" },
      { zh: "火锅常备", en: "Hotpot staple", hu: "Hotpot alap" },
    ],
    filters: [
      { key: "subcategory", value: "mushrooms", label: { zh: "菌菇类", en: "Mushrooms", hu: "Gombak" } },
      { key: "brand", value: "panda-fresh", label: { zh: "熊猫鲜选", en: "Panda Fresh", hu: "Panda Fresh" } },
      { key: "origin", value: "korea", label: { zh: "韩国", en: "Korea", hu: "Del-Korea" } },
      { key: "dietary", value: "vegetarian", label: { zh: "素食友好", en: "Vegetarian", hu: "Vega" } },
    ],
    attributes: [
      { key: "temperature", label: { zh: "储存方式", en: "Storage", hu: "Tarolas" }, value: { zh: "冷藏", en: "Chilled", hu: "Hutott" } },
      { key: "occasion", label: { zh: "推荐场景", en: "Best for", hu: "Alkalom" }, value: { zh: "火锅 / 汤面", en: "Hotpot / noodle soups", hu: "Hotpot / tesztaleves" } },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=900&q=80", alt: { zh: "金针菇", en: "Enoki mushroom", hu: "Enoki gomba" } },
      { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80", alt: { zh: "菌菇料理", en: "Mushroom dish", hu: "Gombas etel" } },
    ],
    gradient: "from-emerald-500/35 via-lime-100 to-white",
  },
  {
    slug: "shrimp-shumai",
    categorySlug: "frozen-deli",
    subcategorySlug: "dim-sum",
    sku: "FD-2078",
    badge: "popular",
    priceLabel: "€5.40 / tray",
    stockStatus: "in-stock",
    title: { zh: "鲜虾烧卖", en: "Shrimp Shumai", hu: "Rakas siumai" },
    subtitle: { zh: "蒸十分钟就能上桌的点心柜热卖", en: "A freezer dim sum pick ready in minutes", hu: "Par perc alatt talalhato fagyasztott dim sum kedvenc" },
    description: {
      zh: "适合家庭蒸点、周末聚餐和门店冷柜陈列，和虾饺、水饺一起组合时很容易形成整套购买。",
      en: "Ideal for home steaming, weekend gathering platters, and freezer merchandising alongside dumplings and har gow.",
      hu: "Otthoni gozolessel, hetvegi talakhoz es fagyasztos merchandisinghez idealis, gombocokkal egyutt eros valogatas.",
    },
    origin: { zh: "中国", en: "China", hu: "Kina" },
    brand: "Harbor Dim Sum",
    brandSlug: "harbor-dim-sum",
    size: { zh: "360g / 盒", en: "360g / tray", hu: "360g / talca" },
    tags: [
      { zh: "点心热卖", en: "Dim sum favorite", hu: "Dim sum kedvenc" },
      { zh: "聚餐推荐", en: "Gathering pick", hu: "Vendegvaro valasztas" },
    ],
    filters: [
      { key: "subcategory", value: "dim-sum", label: { zh: "烧卖虾饺", en: "Dim Sum", hu: "Dim sum" } },
      { key: "brand", value: "harbor-dim-sum", label: { zh: "港点坊", en: "Harbor Dim Sum", hu: "Harbor Dim Sum" } },
      { key: "origin", value: "china", label: { zh: "中国", en: "China", hu: "Kina" } },
      { key: "dietary", value: "contains-seafood", label: { zh: "含海鲜", en: "Contains seafood", hu: "Tengeri etelt tartalmaz" } },
    ],
    attributes: [
      { key: "temperature", label: { zh: "储存方式", en: "Storage", hu: "Tarolas" }, value: { zh: "冷冻", en: "Frozen", hu: "Melyhutott" } },
      { key: "occasion", label: { zh: "推荐场景", en: "Best for", hu: "Alkalom" }, value: { zh: "家庭蒸点 / 聚餐", en: "Family dim sum / gatherings", hu: "Csaladi dim sum / vendegek" } },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80", alt: { zh: "鲜虾烧卖", en: "Shrimp shumai", hu: "Rakas siumai" } },
      { src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80", alt: { zh: "蒸点拼盘", en: "Steamed dim sum platter", hu: "Gozolt dim sum tal" } },
    ],
    gradient: "from-sky-500/35 via-cyan-100 to-white",
  },
  {
    slug: "jasmine-green-tea",
    categorySlug: "snacks-drinks",
    subcategorySlug: "tea-coffee",
    sku: "SD-3310",
    badge: "new",
    priceLabel: "€2.40 / bottle",
    stockStatus: "limited",
    title: { zh: "茉莉绿茶", en: "Jasmine Green Tea", hu: "Jazmin zold tea" },
    subtitle: { zh: "冷藏柜里回头率很高的即饮茶", en: "A chilled ready-to-drink tea with broad appeal", hu: "Hutott, azonnal ihato tea, sokak kedvence" },
    description: {
      zh: "适合搭配甜品、零食和便当专区做组合陈列，也很适合做新品和午后茶饮推荐。",
      en: "Pairs well with sweets, snacks, and lunch-box picks, and works nicely in new-in and afternoon tea edits.",
      hu: "Jol parosithato desszertekkel, nasikkal es etelcsomagokkal, ujdonsagokhoz es teatime ajanlasokhoz is jo.",
    },
    origin: { zh: "中国", en: "China", hu: "Kina" },
    brand: "Tea Garden",
    brandSlug: "tea-garden",
    size: { zh: "500ml", en: "500ml", hu: "500ml" },
    tags: [
      { zh: "茶饮上新", en: "New tea pick", hu: "Uj tea ital" },
      { zh: "冷藏推荐", en: "Chilled favorite", hu: "Hutott kedvenc" },
    ],
    filters: [
      { key: "subcategory", value: "tea-coffee", label: { zh: "茶饮咖啡", en: "Tea & Coffee", hu: "Tea es kave" } },
      { key: "brand", value: "tea-garden", label: { zh: "茶园集", en: "Tea Garden", hu: "Tea Garden" } },
      { key: "origin", value: "china", label: { zh: "中国", en: "China", hu: "Kina" } },
      { key: "dietary", value: "low-sugar", label: { zh: "轻甜", en: "Lightly sweet", hu: "Enyhen edes" } },
    ],
    attributes: [
      { key: "temperature", label: { zh: "饮用建议", en: "Serve", hu: "Fogyasztas" }, value: { zh: "冷藏后更佳", en: "Best served chilled", hu: "Lehutve a legjobb" } },
      { key: "occasion", label: { zh: "推荐场景", en: "Best for", hu: "Alkalom" }, value: { zh: "午后茶饮", en: "Afternoon refreshment", hu: "Delutani felfrissules" } },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80", alt: { zh: "茉莉绿茶", en: "Jasmine green tea", hu: "Jazmin zold tea" } },
      { src: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80", alt: { zh: "冷饮柜茶饮", en: "Chilled tea display", hu: "Hutott tea display" } },
    ],
    gradient: "from-amber-500/35 via-lime-100 to-white",
  },
  {
    slug: "premium-soy-sauce",
    categorySlug: "sauces-pantry",
    subcategorySlug: "soy-sauce",
    sku: "SP-4402",
    badge: "popular",
    priceLabel: "€4.20 / bottle",
    stockStatus: "in-stock",
    title: { zh: "头抽生抽", en: "Premium Soy Sauce", hu: "Premium szojaszosz" },
    subtitle: { zh: "厨房常备、复购率很高的一支基础调味", en: "A pantry staple with strong repeat demand", hu: "Kamra alap, magas ujraveteli arannyal" },
    description: {
      zh: "适合搭配米面粮油、火锅底料和家常菜谱做整套推荐，也是目录里最适合做品牌和规格筛选的单品类型。",
      en: "Pairs naturally with pantry basics, hotpot bases, and home-cooking bundles, and is ideal for brand and size filtering.",
      hu: "Jol parosithato alap kamra termekekkel, hotpot alapokkal es otthoni fozos valogatasokkal, marka es meret szerint is jol szurheto.",
    },
    origin: { zh: "中国", en: "China", hu: "Kina" },
    brand: "Golden Pantry",
    brandSlug: "golden-pantry",
    size: { zh: "500ml", en: "500ml", hu: "500ml" },
    tags: [
      { zh: "厨房常备", en: "Pantry staple", hu: "Kamra alap" },
      { zh: "调味热卖", en: "Sauce bestseller", hu: "Szosz slager" },
    ],
    filters: [
      { key: "subcategory", value: "soy-sauce", label: { zh: "酱油醋类", en: "Soy Sauce & Vinegar", hu: "Szojaszosz es ecet" } },
      { key: "brand", value: "golden-pantry", label: { zh: "金仓调味", en: "Golden Pantry", hu: "Golden Pantry" } },
      { key: "origin", value: "china", label: { zh: "中国", en: "China", hu: "Kina" } },
      { key: "dietary", value: "cooking-essential", label: { zh: "烹饪常备", en: "Cooking essential", hu: "Fozesi alap" } },
    ],
    attributes: [
      { key: "format", label: { zh: "规格", en: "Format", hu: "Meret" }, value: { zh: "家用瓶装", en: "Home bottle", hu: "Otthoni palack" } },
      { key: "occasion", label: { zh: "推荐场景", en: "Best for", hu: "Alkalom" }, value: { zh: "炒菜 / 蘸料", en: "Stir-fry / dipping", hu: "Serpenyos etelek / martogatos" } },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80", alt: { zh: "酱油瓶", en: "Soy sauce bottle", hu: "Szojaszosz palack" } },
      { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80", alt: { zh: "厨房调味", en: "Pantry cooking setup", hu: "Konyhai alapanyagok" } },
    ],
    gradient: "from-stone-500/30 via-yellow-100 to-white",
  },
  {
    slug: "crispy-seaweed-rolls",
    categorySlug: "asian-snacks",
    subcategorySlug: "seaweed-jelly",
    sku: "AS-2232",
    badge: "new",
    priceLabel: "€3.20 / pack",
    stockStatus: "in-stock",
    title: { zh: "海苔脆卷", en: "Crispy Seaweed Rolls", hu: "Ropogos algatekercs" },
    subtitle: { zh: "轻巧好拿、很适合收银台和办公室补货", en: "A light grab-and-go snack for desk drawers and checkout edits", hu: "Konnyu nasi fiokba es kassza melle" },
    description: {
      zh: "适合做办公室补货、小包装分享和低负担零食推荐，也很适合和茶饮一起做组合陈列。",
      en: "Great for office stocking, compact sharing packs, and lighter snack selections paired with tea.",
      hu: "Irodai feltolteshez, kisebb megoszthato csomagokhoz es konnyed nasi valogatasokhoz is alkalmas.",
    },
    origin: { zh: "韩国", en: "Korea", hu: "Del-Korea" },
    brand: "Seaside Crisp",
    brandSlug: "seaside-crisp",
    size: { zh: "90g", en: "90g", hu: "90g" },
    tags: [
      { zh: "零食上新", en: "Snack new-in", hu: "Uj nasi" },
      { zh: "轻负担", en: "Light snack", hu: "Konnyu nasi" },
    ],
    filters: [
      { key: "subcategory", value: "seaweed-jelly", label: { zh: "海苔果冻", en: "Seaweed & Jelly", hu: "Alga es zsele" } },
      { key: "brand", value: "seaside-crisp", label: { zh: "海边脆脆", en: "Seaside Crisp", hu: "Seaside Crisp" } },
      { key: "origin", value: "korea", label: { zh: "韩国", en: "Korea", hu: "Del-Korea" } },
      { key: "dietary", value: "light-snack", label: { zh: "轻口零食", en: "Light snack", hu: "Konnyu nasi" } },
    ],
    attributes: [
      { key: "format", label: { zh: "包装形式", en: "Pack format", hu: "Kiszereles" }, value: { zh: "独立小包", en: "Individual packs", hu: "Kulon csomagolt" } },
      { key: "occasion", label: { zh: "推荐场景", en: "Best for", hu: "Alkalom" }, value: { zh: "办公室 / 收银台", en: "Office / checkout", hu: "Iroda / kassza" } },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80", alt: { zh: "海苔脆卷", en: "Seaweed snack", hu: "Alga nasi" } },
      { src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80", alt: { zh: "小包装零食", en: "Snack packs", hu: "Kis nasi csomagok" } },
    ],
    gradient: "from-pink-400/35 via-lime-100 to-white",
  },
  {
    slug: "half-shell-scallops",
    categorySlug: "seafood",
    subcategorySlug: "shellfish",
    sku: "SF-4134",
    badge: "seasonal",
    priceLabel: "€12.50 / tray",
    stockStatus: "seasonal",
    title: { zh: "半壳扇贝", en: "Half-shell Scallops", hu: "Felkagylos fesu kagylo" },
    subtitle: { zh: "节庆海鲜餐和烤箱拼盘都很适合", en: "A festive seafood option for platters and oven dishes", hu: "Unnepi tengeri valasztas talakhoz es sutoben keszulo etelekhez" },
    description: {
      zh: "适合周末海鲜餐、节庆聚餐和门店冷冻海鲜专题，也很适合和虾类、鱼片一起做高客单组合。",
      en: "Works well in festive seafood edits, weekend dinners, and premium frozen combinations alongside shrimp and fillets.",
      hu: "Jol mutat unnepi tengeri valogatasokban, hetvegi vacsorakhoz es premium fagyasztott kombinaciokban rakkal es halszeletekkel.",
    },
    origin: { zh: "越南", en: "Vietnam", hu: "Vietnam" },
    brand: "Ocean Basket",
    brandSlug: "ocean-basket",
    size: { zh: "800g / 盘", en: "800g / tray", hu: "800g / talca" },
    tags: [
      { zh: "节庆推荐", en: "Festive pick", hu: "Unnepi valasztas" },
      { zh: "海鲜拼盘", en: "Seafood platter", hu: "Tengeri tal" },
    ],
    filters: [
      { key: "subcategory", value: "shellfish", label: { zh: "贝类", en: "Shellfish", hu: "Kagylok" } },
      { key: "brand", value: "ocean-basket", label: { zh: "海鲜篮", en: "Ocean Basket", hu: "Ocean Basket" } },
      { key: "origin", value: "vietnam", label: { zh: "越南", en: "Vietnam", hu: "Vietnam" } },
      { key: "dietary", value: "contains-seafood", label: { zh: "含海鲜", en: "Contains seafood", hu: "Tengeri etelt tartalmaz" } },
    ],
    attributes: [
      { key: "temperature", label: { zh: "储存方式", en: "Storage", hu: "Tarolas" }, value: { zh: "冷冻", en: "Frozen", hu: "Melyhutott" } },
      { key: "occasion", label: { zh: "推荐场景", en: "Best for", hu: "Alkalom" }, value: { zh: "节庆海鲜餐", en: "Festive seafood dinner", hu: "Unnepi tengeri vacsora" } },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80", alt: { zh: "半壳扇贝", en: "Half-shell scallops", hu: "Fesu kagylo" } },
      { src: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=80", alt: { zh: "海鲜拼盘", en: "Seafood platter", hu: "Tengeri tal" } },
    ],
    gradient: "from-cyan-500/35 via-blue-100 to-white",
  },
  {
    slug: "mango-pudding-cups",
    categorySlug: "desserts",
    subcategorySlug: "pudding-cake",
    sku: "DS-1284",
    badge: "popular",
    priceLabel: "€3.80 / box",
    stockStatus: "in-stock",
    title: { zh: "芒果布丁杯", en: "Mango Pudding Cups", hu: "Mangopuding pohar" },
    subtitle: { zh: "冷藏柜里很容易被顺手带走的一款甜品", en: "A chilled dessert pick with broad family appeal", hu: "Hutott desszert, amit konnyu bedobni a kosarba" },
    description: {
      zh: "适合放在甜品柜、茶饮旁和门店收银动线附近，也很适合做下午茶和亲子甜点推荐。",
      en: "A strong fit for dessert chillers, tea pairings, and easy checkout-side sweet picks.",
      hu: "Jol illik hutott desszertpolcra, tea melle es kassza kozeli edes valogatasokhoz.",
    },
    origin: { zh: "香港", en: "Hong Kong", hu: "Hongkong" },
    brand: "Sweet Cloud",
    brandSlug: "sweet-cloud",
    size: { zh: "4杯装", en: "Pack of 4", hu: "4 pohar" },
    tags: [
      { zh: "甜品热卖", en: "Dessert bestseller", hu: "Desszert slager" },
      { zh: "下午茶", en: "Tea time", hu: "Teazas" },
    ],
    filters: [
      { key: "subcategory", value: "pudding-cake", label: { zh: "布丁蛋糕", en: "Pudding & Cake", hu: "Pudding es sutemeny" } },
      { key: "brand", value: "sweet-cloud", label: { zh: "甜云", en: "Sweet Cloud", hu: "Sweet Cloud" } },
      { key: "origin", value: "hong-kong", label: { zh: "香港", en: "Hong Kong", hu: "Hongkong" } },
      { key: "dietary", value: "dessert", label: { zh: "甜品", en: "Dessert", hu: "Desszert" } },
    ],
    attributes: [
      { key: "temperature", label: { zh: "储存方式", en: "Storage", hu: "Tarolas" }, value: { zh: "冷藏", en: "Chilled", hu: "Hutott" } },
      { key: "occasion", label: { zh: "推荐场景", en: "Best for", hu: "Alkalom" }, value: { zh: "下午茶 / 亲子分享", en: "Tea time / family sharing", hu: "Teazas / csaladi megosztas" } },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80", alt: { zh: "芒果布丁杯", en: "Mango pudding", hu: "Mangopuding" } },
      { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80", alt: { zh: "甜品柜", en: "Dessert display", hu: "Desszert display" } },
    ],
    gradient: "from-rose-400/35 via-amber-100 to-white",
  },
  {
    slug: "bamboo-chopsticks",
    categorySlug: "daily-essentials",
    subcategorySlug: "tableware",
    sku: "DE-5486",
    badge: "popular",
    priceLabel: "€2.60 / pack",
    stockStatus: "in-stock",
    title: { zh: "竹筷家庭装", en: "Bamboo Chopsticks", hu: "Bambusz evoeszkoz keszlet" },
    subtitle: { zh: "聚餐、火锅和外带备餐都会顺手拿的一款耗材", en: "A tableware staple for hotpot, takeout, and gatherings", hu: "Etkezesi alap hotpothoz, elvitelhez es vendegekhez" },
    description: {
      zh: "适合放在火锅底料、餐具耗材和收银动线附近，和纸巾、纸杯一起很容易形成家庭补货组合。",
      en: "Fits naturally beside hotpot bases, disposables, and checkout extras, and bundles well with tissues and cups.",
      hu: "Jol illik hotpot alapok, eldobhato kellekek es kassza kozeli kiegeszitok melle, papirtermekekkel egyutt konnyu csomagositani.",
    },
    origin: { zh: "中国", en: "China", hu: "Kina" },
    brand: "Home Daily",
    brandSlug: "home-daily",
    size: { zh: "20双装", en: "Pack of 20", hu: "20 par" },
    tags: [
      { zh: "聚餐常备", en: "Gathering staple", hu: "Vendegvaro alap" },
      { zh: "餐具耗材", en: "Tableware pick", hu: "Etkezesi kellek" },
    ],
    filters: [
      { key: "subcategory", value: "tableware", label: { zh: "餐具耗材", en: "Tableware", hu: "Etkezesi kellekek" } },
      { key: "brand", value: "home-daily", label: { zh: "日日家", en: "Home Daily", hu: "Home Daily" } },
      { key: "origin", value: "china", label: { zh: "中国", en: "China", hu: "Kina" } },
      { key: "dietary", value: "household", label: { zh: "家居用品", en: "Household", hu: "Haztartasi" } },
    ],
    attributes: [
      { key: "format", label: { zh: "包装形式", en: "Pack format", hu: "Kiszereles" }, value: { zh: "家庭分享装", en: "Family pack", hu: "Csaladi csomag" } },
      { key: "occasion", label: { zh: "推荐场景", en: "Best for", hu: "Alkalom" }, value: { zh: "火锅 / 聚餐", en: "Hotpot / gatherings", hu: "Hotpot / vendegek" } },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80", alt: { zh: "竹筷家庭装", en: "Bamboo chopsticks", hu: "Bambusz evoeszkoz" } },
      { src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80", alt: { zh: "餐具耗材", en: "Tableware supplies", hu: "Etkezesi kellekek" } },
    ],
    gradient: "from-lime-400/35 via-stone-100 to-white",
  },
);

export const promotions: Promotion[] = [
  {
    slug: "weekend-hotpot",
    title: { zh: "周末火锅选品周", en: "Weekend Hotpot Edit", hu: "Hetvegi hotpot valogatas" },
    description: {
      zh: "集中展示火锅底料、丸滑、叶菜和蘸料，适合做首页强视觉专题。",
      en: "A focused campaign around soup bases, fish balls, greens, and dipping sauces for a strong homepage edit.",
      hu: "Egy eros kezdolapi kampany levesalapokkal, golyokkal, zoldsegekkel es martogatosokkal.",
    },
    period: "2026.03.20 - 2026.04.15",
    cta: { zh: "查看活动清单", en: "View Campaign Picks", hu: "Kampany termekek" },
  },
  {
    slug: "spring-refresh",
    title: { zh: "春季门店上新", en: "Spring New Arrivals", hu: "Tavaszi ujdonsagok" },
    description: {
      zh: "聚焦零食饮料和新鲜蔬果，适合新品标签、专题推荐和到店提醒。",
      en: "A spring edit focused on snacks, drinks, and fresh produce, perfect for new-arrival tagging and seasonal merchandising.",
      hu: "Tavaszi valogatas nassolnivalokkal, italokkal es friss aruval, uj termek jeloleshez es szezonalis merchandisinghez.",
    },
    period: "2026.03.21 - 2026.05.01",
    cta: { zh: "浏览新品", en: "Browse New Arrivals", hu: "Uj termekek" },
  },
];

export const faqs: FAQ[] = [
  {
    question: { zh: "网站上的商品可以直接下单吗？", en: "Can I place an order directly on the website?", hu: "Lehet kozvetlenul rendelni a weboldalon?" },
    answer: {
      zh: "当前版本定位为品牌官网和商品目录，不接在线支付。网站会引导用户到店购买、电话咨询或联系门店。",
      en: "Not yet. This version is a brand site and product catalog, so purchases are directed to in-store shopping or store contact.",
      hu: "Meg nem. Ez a verzio markaoldal es katalogus, igy a vasarlas jelenleg uzletben vagy kapcsolatfelvetellel tortenik.",
    },
  },
  {
    question: { zh: "商品数据后续能接后台吗？", en: "Can the product data be connected to a backend later?", hu: "Kapcsolhato kesobb hatterrendszerhez?" },
    answer: {
      zh: "可以。当前前端已经按分类、子分类、品牌、筛选字段、商品详情和活动模块来组织数据结构。",
      en: "Yes. The current frontend already models categories, subcategories, brands, filters, product details, and campaigns in a backend-friendly way.",
      hu: "Igen. A frontend mar most kategoriak, al-kategoriak, markak, szurok, termekreszletek es kampanyok szerint szervezi az adatokat.",
    },
  },
  {
    question: { zh: "支持哪些语言？", en: "Which languages are supported?", hu: "Milyen nyelvek tamogatottak?" },
    answer: {
      zh: "默认中文，支持 English 和匈牙利语切换，适合服务华人、本地消费者和国际访客。",
      en: "Chinese is the default, with English and Hungarian available for local shoppers and international visitors.",
      hu: "Az alapertelmezett nyelv kinai, de angolul es magyarul is elerheto.",
    },
  },
];

export const storeDetail: StoreDetail = {
  address: "Jegenye u. 26-28, Budapest 1107",
  hours: "Mon - Sun 09:00 - 21:00",
  phone: "+36 1 234 5678",
  email: "info@pandasupermarket.hu",
  mapUrl: "https://maps.google.com/?q=Jegenye+u.+26-28,+Budapest+1107",
};

export const featureStats = [
  { value: "3000+", label: { zh: "目录商品", en: "catalog items", hu: "katalogus termek" } },
  { value: "24h", label: { zh: "新品更新节奏", en: "new-arrival rhythm", hu: "uj termek frissites" } },
  { value: "8", label: { zh: "核心品类带", en: "merchandising bands", hu: "fo merchandising sav" } },
  { value: "3", label: { zh: "语言版本", en: "language modes", hu: "nyelvi mod" } },
];
