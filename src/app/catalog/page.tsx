import { Metadata } from "next";
import { products, categories, getAllTags, getAllFuels, getAllWheels } from "@/lib/data";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Каталог спецавтомобилей",
  description: "Каталог спецавтомобилей ГАЗ — ГАЗель, Газон, Садко, Соболь. Фильтры по категории, виду техники, цене, топливу.",
};

export default function CatalogPage() {
  const tags = getAllTags();
  const fuels = getAllFuels();
  const wheels = getAllWheels();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Каталог автомобилей</h1>
      <CatalogClient
        initialProducts={products}
        categories={categories}
        tags={tags}
        fuels={fuels}
        wheels={wheels}
      />
    </div>
  );
}
