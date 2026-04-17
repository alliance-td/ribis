import { Metadata } from "next";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CertificateGallery from "@/components/CertificateGallery";

export const metadata: Metadata = {
  title: "О компании АЛЬЯНС",
  description: "АЛЬЯНС — производство, переоборудование и продажа спецавтомобилей ГАЗ.",
};

const workImages = [
  { src: "/images/pages/gazel-nekst-na-metane-dlya-vodokanala.jpg", alt: "ГАЗель Некст на метане для водоканала" },
  { src: "/images/pages/gazel-nekst-na-metane-dlya-vodokanala-2.jpg", alt: "ГАЗель Некст для водоканала" },
  { src: "/images/pages/sobol-4h4-avarijnaya-gazovaya-sluzhba.jpg", alt: "Соболь 4х4 аварийная газовая служба" },
  { src: "/images/pages/avarijno-spasatelnyj-gaz-sobol-vid-1.jpg", alt: "Аварийно-спасательные ГАЗ Соболь" },
  { src: "/images/pages/gazel-nekst-ritualnyj-avtomobil-5.jpg", alt: "Ритуальный автомобиль ГАЗель" },
  { src: "/images/pages/gazon-nekst-evakuator-sdvizhnaya-platforma.jpg", alt: "Эвакуатор Газон Некст" },
  { src: "/images/pages/gaz-sobol-biznes-dorabotka.jpg", alt: "Доработка ГАЗ Соболь Бизнес" },
  { src: "/images/pages/kmu-taurus-sadko-nekst-142.jpg", alt: "КМУ Таурус на Садко Некст" },
];

const certificates = [
  { src: "/images/pages/sertif-dillera-italgaz.jpg", alt: "Сертификат дилера Италгаз" },
  { src: "/images/pages/sertifikat-avtofurgon.jpg", alt: "Сертификат Автофургон" },
  { src: "/images/pages/sertifikat-chajka-servis.webp", alt: "Сертификат Чайка-Сервис" },
  { src: "/images/pages/sertifikat-novyj-zavod.webp", alt: "Сертификат Новый завод" },
  { src: "/images/pages/blagodarstvennoe-pismo-bars.webp", alt: "Благодарственное письмо БАРС" },
  { src: "/images/pages/lugansk-pismo.webp", alt: "Благодарственное письмо Луганск" },
  { src: "/images/pages/otzyv-essentukigorgaz.webp", alt: "Отзыв Ессентукигоргаз" },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <AnimateOnScroll animation="fade-down">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">О компании АЛЬЯНС</h1>
      </AnimateOnScroll>

      <div className="mb-12">
        <AnimateOnScroll animation="fade-left">
          <div className="prose max-w-none">
            <p>
              <strong>ООО &ldquo;Альянс&rdquo;</strong> — компания, специализирующаяся на производстве, продаже
              и переоборудовании спецавтомобилей. Мы работаем с 2023 года и за это время
              реализовали сотни проектов по переоборудованию коммерческого транспорта.
            </p>
            <h2>Наши услуги</h2>
            <ul>
              <li>Продажа спецавтомобилей</li>
              <li>Переоборудование автомобилей под ключ</li>
              <li>Установка газобаллонного оборудования (ГБО)</li>
              <li>Изготовление спецкузовов и надстроек</li>
              <li>Оформление и регистрация переоборудования в ГАИ</li>
              <li>Доставка автомобилей по всей России</li>
              <li>Лизинг и кредит</li>
            </ul>
            <h2>Преимущества</h2>
            <ul>
              <li>Собственное производство</li>
              <li>Сертифицированный дилер</li>
              <li>Полный цикл: от подбора шасси до регистрации</li>
              <li>Гарантия на выполненные работы</li>
              <li>Индивидуальный подход к каждому клиенту</li>
            </ul>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Gallery */}
      <section className="mb-12">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Реализованные проекты</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {workImages.map((img, i) => (
            <AnimateOnScroll key={img.src} animation="zoom-in" delay={(i % 4) * 100}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

    </div>
  );
}
