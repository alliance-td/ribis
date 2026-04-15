import productsRaw from "@/data/products.json";
import categoriesRaw from "@/data/categories.json";
import { Product, Category } from "./types";

export const products: Product[] = (productsRaw as unknown as Product[]).filter(
  (p) => p.slug !== "2"
);

export const categories: Category[] = categoriesRaw as Category[];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(
    (p) => p.category_slug === categorySlug || p.categories.includes(categorySlug)
  );
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getDiscountedProducts(): Product[] {
  return products.filter((p) => p.old_price && p.old_price !== "");
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.category_slug === product.category_slug ||
          p.categories.some((c) => product.categories.includes(c)))
    )
    .slice(0, limit);
}

export function getCategoryProductCount(categorySlug: string): number {
  return getProductsByCategory(categorySlug).length;
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  products.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getAllFuels(): string[] {
  const fuels = new Set<string>();
  products.forEach((p) => {
    const fuel = p.attributes["Двигатель, топливо"];
    if (fuel) fuels.add(fuel);
  });
  return Array.from(fuels).sort();
}

export function getAllWheels(): string[] {
  const wheels = new Set<string>();
  products.forEach((p) => {
    const wheel = p.attributes["Колёсная формула"];
    if (wheel) wheels.add(wheel);
  });
  return Array.from(wheels).sort();
}

export const TAG_NAMES: Record<string, string> = {
  avarijnyj: "Аварийный",
  avtobus: "Автобус",
  avtovyshka: "Автовышка",
  avtogudronator: "Автогудронатор",
  avtomasterskaya: "Автомастерская",
  czisterna: "Автоцистерна",
  benzovoz: "Бензовоз",
  burovaya: "Буровая",
  vahtovyj: "Вахтовый",
  veterinarnyj: "Ветеринарный",
  gruzovoj: "Грузовой",
  kmu: "КМУ",
  katafalk: "Катафалк",
  laboratoriya: "Лаборатория",
  maslostancziya: "Маслостанция",
  mikroavtobus: "Микроавтобус",
  musorovoz: "Мусоровоз",
  "opasnyj-gruz": "Опасный груз",
  radioaktivnye: "Радиоактивные",
  refrizherator: "Рефрижератор",
  spalnik: "Спальник",
  speczialnyj: "Специальный",
  evakuator: "Эвакуатор",
  fura: "Фура",
};

export function getProductImageSrc(product: Product): string {
  if (product.images.length > 0) {
    const local = product.images[0].local;
    return "/" + local;
  }
  return "/images/pages/logo-78.jpg";
}

export const CATEGORY_IMAGES: Record<string, string> = {
  "gazel-biznes": "/images/pages/gazel-biznes-91.webp",
  "gaz-gazel-nekst": "/images/pages/gazel-nekst-furgon-91.webp",
  "gazel-nekst-czmf": "/images/pages/gazelle_next-a31r33-01.webp",
  "gaz-sobol": "/images/pages/gaz-sobol-26.jpg",
  "gazon-nekst": "/images/pages/gazon-nekst-91.webp",
  "sadko-nekst": "/images/pages/gaz-sadko-nekst-91.webp",
  "gaz-valdaj": "/images/pages/valdai_8-vid1.webp",
  autolab: "/images/pages/autolab.jpg",
  avtofurgony: "/images/pages/autofurgon-cat.webp",
  speczavtomobili: "/images/pages/specztehnika-91.webp",
  mikroavtobusy: "/images/pages/avtobusy-91.webp",
  "avtobusy-paz": "/images/pages/paz-cat.webp",
  "avtomobili-uaz": "/images/pages/avtomobili-uaz.jpg",
  ford: "/images/pages/ford-logo-1.jpg",
  gwm: "/images/pages/gwm-logo.webp",
  "avtomobili-lada": "/images/pages/lada-logo-1.jpeg",
};
