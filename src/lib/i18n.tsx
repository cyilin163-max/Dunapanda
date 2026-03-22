"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Locale, LocalizedText } from "@/types/site";

type Dictionary = {
  brand: string;
  brandSubline: string;
  nav: {
    home: string;
    categories: string;
    promotions: string;
    about: string;
    store: string;
    contact: string;
    faq: string;
  };
  actions: {
    browseCatalog: string;
    exploreCategories: string;
    contactStore: string;
    getDirections: string;
    searchPlaceholder: string;
    search: string;
    viewAll: string;
    readMore: string;
    visitStore: string;
    sendInquiry: string;
  };
  labels: {
    defaultLanguage: string;
    inStock: string;
    limited: string;
    seasonal: string;
    featuredCategory: string;
    quickFacts: string;
    noResults: string;
    suggestions: string;
    address: string;
    hours: string;
    brand: string;
    size: string;
    origin: string;
    category: string;
    contact: string;
    storePicks: string;
    catalogSearch: string;
    searchHelper: string;
    allBrands: string;
    allSubcategories: string;
    allProducts: string;
    results: string;
    highlights: string;
    todayFocus: string;
    weekendPick: string;
    bestSeller: string;
    serviceLanguages: string;
    name: string;
    email: string;
    subject: string;
    message: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  zh: {
    brand: "熊猫超市",
    brandSubline: "布达佩斯现代亚洲商超",
    nav: {
      home: "首页",
      categories: "商品分类",
      promotions: "优惠活动",
      about: "关于我们",
      store: "门店信息",
      contact: "联系我们",
      faq: "常见问题",
    },
    actions: {
      browseCatalog: "浏览商品目录",
      exploreCategories: "查看全部分类",
      contactStore: "联系门店",
      getDirections: "导航到店",
      searchPlaceholder: "搜索商品、品牌或活动",
      search: "搜索",
      viewAll: "查看全部",
      readMore: "查看详情",
      visitStore: "查看门店信息",
      sendInquiry: "发送咨询",
    },
    labels: {
      defaultLanguage: "中文优先",
      inStock: "门店有货",
      limited: "限量供应",
      seasonal: "季节限定",
      featuredCategory: "精选分类",
      quickFacts: "门店速览",
      noResults: "暂时没有找到相关商品",
      suggestions: "试试热门分类，或直接联系门店获取当日到货信息。",
      address: "地址",
      hours: "营业时间",
      brand: "品牌",
      size: "规格",
      origin: "产地",
      category: "分类",
      contact: "联系方式",
      storePicks: "门店精选",
      catalogSearch: "目录筛选",
      searchHelper: "按品牌、子分类或关键字快速找到今晚想做的那一桌。",
      allBrands: "全部品牌",
      allSubcategories: "全部子分类",
      allProducts: "全部商品",
      results: "项结果",
      highlights: "本区看点",
      todayFocus: "今日重点",
      weekendPick: "周末囤货",
      bestSeller: "门店热卖",
      serviceLanguages: "门店服务语言",
      name: "姓名",
      email: "邮箱",
      subject: "主题",
      message: "留言内容",
    },
  },
  en: {
    brand: "Panda Supermarket",
    brandSubline: "Modern Asian Grocery in Budapest",
    nav: {
      home: "Home",
      categories: "Categories",
      promotions: "Promotions",
      about: "About",
      store: "Store",
      contact: "Contact",
      faq: "FAQ",
    },
    actions: {
      browseCatalog: "Browse Catalog",
      exploreCategories: "View Categories",
      contactStore: "Contact Store",
      getDirections: "Get Directions",
      searchPlaceholder: "Search products, brands, or campaigns",
      search: "Search",
      viewAll: "View All",
      readMore: "View Details",
      visitStore: "View Store Info",
      sendInquiry: "Send Inquiry",
    },
    labels: {
      defaultLanguage: "Chinese first",
      inStock: "In store",
      limited: "Limited stock",
      seasonal: "Seasonal",
      featuredCategory: "Featured Categories",
      quickFacts: "Store Snapshot",
      noResults: "No matching products found",
      suggestions: "Try a popular category or contact the store for today's arrivals.",
      address: "Address",
      hours: "Hours",
      brand: "Brand",
      size: "Size",
      origin: "Origin",
      category: "Category",
      contact: "Contact",
      storePicks: "Store Picks",
      catalogSearch: "Catalog Search",
      searchHelper: "Filter by brand, subcategory, or keyword to find tonight's cart faster.",
      allBrands: "All Brands",
      allSubcategories: "All Subcategories",
      allProducts: "All Products",
      results: "results",
      highlights: "Highlights",
      todayFocus: "Today's Focus",
      weekendPick: "Weekend Pick",
      bestSeller: "Best Seller",
      serviceLanguages: "Service Languages",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },
  },
  hu: {
    brand: "Panda Supermarket",
    brandSubline: "Modern azsiai szupermarket Budapesten",
    nav: {
      home: "Kezdolap",
      categories: "Kategoriak",
      promotions: "Akciok",
      about: "Rolunk",
      store: "Uzlet",
      contact: "Kapcsolat",
      faq: "GYIK",
    },
    actions: {
      browseCatalog: "Katalogus megnyitasa",
      exploreCategories: "Kategoriak megtekintese",
      contactStore: "Kapcsolat az uzlettel",
      getDirections: "Utvonalterv",
      searchPlaceholder: "Kereses termekre, markara vagy kampanyra",
      search: "Kereses",
      viewAll: "Osszes",
      readMore: "Reszletek",
      visitStore: "Uzletinformacio",
      sendInquiry: "Uzenet kuldese",
    },
    labels: {
      defaultLanguage: "Kinai alapertelmezett",
      inStock: "Boltban elerheto",
      limited: "Korlatozott keszlet",
      seasonal: "Szezonalis",
      featuredCategory: "Kiemelt kategoriak",
      quickFacts: "Uzletattekintes",
      noResults: "Nem talaltunk megfelelo termeket",
      suggestions: "Probald meg a nepszeru kategoriakat, vagy erdeklodj az uzletnel a mai beerkezesrol.",
      address: "Cim",
      hours: "Nyitvatartas",
      brand: "Marka",
      size: "Meret",
      origin: "Szarmadasi hely",
      category: "Kategoria",
      contact: "Kapcsolat",
      storePicks: "Uzlet valogatas",
      catalogSearch: "Katalogusszures",
      searchHelper: "Marka, alkategoria vagy kulcsszo alapjan gyorsan megtalalhatod, mi kerul ma a kosarba.",
      allBrands: "Osszes marka",
      allSubcategories: "Osszes alkategoria",
      allProducts: "Osszes termek",
      results: "talalat",
      highlights: "Fobb pontok",
      todayFocus: "Mai ajanlat",
      weekendPick: "Hetvegi feltoltes",
      bestSeller: "Legnepszerubb",
      serviceLanguages: "Kiszolgalasi nyelvek",
      name: "Nev",
      email: "Email",
      subject: "Targy",
      message: "Uzenet",
    },
  },
};

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Dictionary;
  t: (value: LocalizedText) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "zh";
    const stored = window.localStorage.getItem("panda-locale") as Locale | null;
    return stored && dictionaries[stored] ? stored : "zh";
  });

  const setLocale = (nextLocale: Locale) => {
    window.localStorage.setItem("panda-locale", nextLocale);
    setLocaleState(nextLocale);
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      dict: dictionaries[locale],
      t: (localizedValue) => localizedValue[locale],
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
