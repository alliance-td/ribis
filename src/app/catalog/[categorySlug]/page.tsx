import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CatalogClient from "../CatalogClient";
import {
  categories,
  getCategoryBySlug,
  getProductsByCategory,
  getAllTags,
  getAllFuels,
  getAllWheels,
} from "@/lib/data";

interface Props {
  params: Promise<{ categorySlug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ categorySlug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  return {
    title: `${category.name} — Каталог`,
    description: `Купить ${category.name} в MakeCars. Производство, продажа и переоборудование спецавтомобилей ГАЗ.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(categorySlug);
  const tags = getAllTags();
  const fuels = getAllFuels();
  const wheels = getAllWheels();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: category.name },
        ]}
      />
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{category.name}</h1>
      <CatalogClient
        initialProducts={categoryProducts}
        categories={categories}
        tags={tags}
        fuels={fuels}
        wheels={wheels}
        initialCategory={categorySlug}
      />
    </div>
  );
}
