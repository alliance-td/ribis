import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "./ProductGallery";
import ProductTabs from "./ProductTabs";
import {
  products,
  getProductBySlug,
  getCategoryBySlug,
  getRelatedProducts,
} from "@/lib/data";

interface Props {
  params: Promise<{ categorySlug: string; productSlug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    categorySlug: p.category_slug || p.categories[0] || "catalog",
    productSlug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.short_description || product.description?.slice(0, 160) || `Купить ${product.title} в АЛЬЯНС`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { categorySlug, productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) notFound();

  const category = getCategoryBySlug(categorySlug);
  const related = getRelatedProducts(product);

  const attributes = Object.entries(product.attributes || {});

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/catalog" },
          ...(category
            ? [{ label: category.name, href: `/catalog/${categorySlug}` }]
            : []),
          { label: product.title },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Gallery */}
        <ProductGallery images={product.images} title={product.title} />

        {/* Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          <div className="mb-4">
            <span className="text-orange-500 font-medium">Под заказ</span>
          </div>

          {product.short_description && (
            <p className="text-gray-600 mb-6 leading-relaxed">{product.short_description}</p>
          )}

          {/* Attributes table */}
          {attributes.length > 0 && (
            <div className="border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <tbody>
                  {attributes.map(([key, value], i) => (
                    <tr key={key} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2 font-medium text-gray-600 w-1/2">{key}</td>
                      <td className="px-4 py-2 text-gray-900">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contacts"
              className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Запросить КП
            </a>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <ProductTabs product={product} />

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
