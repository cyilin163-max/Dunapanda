create type public.app_role as enum ('admin', 'customer', 'wholesaler');

create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  email text not null unique,
  full_name text not null default '',
  role public.app_role not null default 'customer',
  company_name text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.catalog_products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  category_slug text not null,
  subcategory_slug text not null,
  sku text not null unique,
  title_zh text not null,
  title_en text not null,
  title_hu text not null,
  subtitle_zh text not null,
  subtitle_en text not null,
  subtitle_hu text not null,
  description_zh text not null,
  description_en text not null,
  description_hu text not null,
  origin_zh text not null,
  origin_en text not null,
  origin_hu text not null,
  size_zh text not null,
  size_en text not null,
  size_hu text not null,
  brand text not null,
  brand_slug text not null,
  hero_image text not null,
  badge text,
  stock_status text not null default 'in-stock',
  stock_quantity integer not null default 0,
  wholesale_min_quantity integer not null default 3,
  retail_price numeric(10,2) not null,
  wholesale_price numeric(10,2) not null,
  currency text not null default 'EUR',
  tags jsonb not null default '[]'::jsonb,
  filters jsonb not null default '[]'::jsonb,
  attributes jsonb not null default '[]'::jsonb,
  gallery jsonb not null default '[]'::jsonb,
  gradient text not null default 'from-amber-300/30 via-white to-lime-100',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.inventory_logs (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.catalog_products(id) on delete cascade,
  product_title text not null,
  change integer not null,
  note text not null default '',
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.wholesale_applications (
  id uuid primary key default gen_random_uuid(),
  user_email text not null,
  contact_name text not null,
  company_name text not null,
  tax_id text not null,
  note text not null default '',
  status text not null default 'pending',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, coalesce(new.email, ''), coalesce(new.raw_user_meta_data ->> 'full_name', ''));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
