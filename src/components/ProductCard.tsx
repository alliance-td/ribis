import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { getProductImageSrc } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageSrc = getProductImageSrc(product);
  const categorySlug = product.category_slug || product.categories[0] || "catalog";
  const href = `/catalog/${categorySlug}/${product.slug}`;

  const hasDiscount = product.old_price && product.old_price !== "";
  let discountPercent = 0;
  if (hasDiscount && product.price_value) {
    const oldVal = parseInt(product.old_price.replace(/\D/g, ""));
    if (oldVal > product.price_value) {
      discountPercent = Math.round(((oldVal - product.price_value) / oldVal) * 100);
    }
  }

  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={imageSrc}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {hasDiscount && discountPercent > 0 && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              -{discountPercent}%
            </span>
          )}
          {!product.in_stock && (
            <span className="absolute top-2 right-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
              Под заказ
            </span>
          )}
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-sm text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>

          <div className="mt-auto">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-lg font-bold text-primary">{product.price}</span>
              {hasDiscount && (
                <span className="text-sm text-gray-400 line-through">{product.old_price}</span>
              )}
            </div>

            <span className="inline-block w-full text-center bg-accent group-hover:bg-accent-hover text-white text-sm font-medium py-2 px-4 rounded transition-all duration-300 group-hover:shadow-md">
              Подробнее
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
