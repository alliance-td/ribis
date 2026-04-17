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
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-sm text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>

          <div className="mt-auto">
            <span className="inline-block w-full text-center bg-accent group-hover:bg-accent-hover text-white text-sm font-medium py-2 px-4 rounded transition-all duration-300 group-hover:shadow-md">
              Подробнее
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
