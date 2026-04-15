import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CertificateGallery from "@/components/CertificateGallery";
import {
  categories,
  getDiscountedProducts,
  getCategoryProductCount,
  CATEGORY_IMAGES,
} from "@/lib/data";

const certificates = [
  "sertif-dillera-italgaz.jpg",
  "sertifikat-avtofurgon.jpg",
  "sertifikat-chajka-servis.webp",
  "sertifikat-novyj-zavod.webp",
];

export default function HomePage() {
  const discounted = getDiscountedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: "480px", background: "#0f2440" }}>
        {/* Animated blobs */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 text-center">
          <AnimateOnScroll animation="fade-down">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Спецавтомобили ГАЗ</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Производство, продажа и переоборудование автомобилей под заказ.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="zoom-in" delay={400}>
            <Link
              href="/catalog"
              className="inline-block bg-accent hover:bg-accent-hover hover:scale-105 active:scale-95 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg"
            >
              Перейти в каталог
            </Link>
          </AnimateOnScroll>
        </div>
      </section>


      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Основные категории автомобилей
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => {
              const count = getCategoryProductCount(cat.slug);
              const img = CATEGORY_IMAGES[cat.slug];
              return (
                <AnimateOnScroll key={cat.slug} animation="zoom-in" delay={(i % 4) * 100}>
                  <Link
                    href={`/catalog/${cat.slug}`}
                    className="group relative bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden block"
                  >
                    <div className="relative aspect-[4/3] bg-gray-100">
                      {img && (
                        <Image
                          src={img}
                          alt={cat.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <h3 className="font-bold text-sm">{cat.name}</h3>
                      <p className="text-xs text-gray-200">{count} авто</p>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>


      {/* Contacts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Контакты</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 max-w-sm mx-auto">
            <AnimateOnScroll animation="fade-right" delay={150}>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-accent mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-semibold">Email</p>
                <p className="text-sm">
                  <a href="mailto:info@alliance-td.ru" className="text-gray-600 hover:text-primary transition-colors">info@alliance-td.ru</a>
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
