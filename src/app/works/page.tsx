import { Metadata } from "next";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Наши работы",
  description: "Портфолио выполненных работ компании РИБИС — переоборудование спецавтомобилей ГАЗ.",
};

const works = [
  { src: "/images/pages/gazel-nekst-na-metane-dlya-vodokanala.jpg", title: "ГАЗель Некст на метане для водоканала", category: "ГБО" },
  { src: "/images/pages/gazel-nekst-na-metane-dlya-vodokanala-2.jpg", title: "ГАЗель Некст на метане — вид 2", category: "ГБО" },
  { src: "/images/pages/gazel-nekst-na-metane-dlya-vodokanala-3.jpg", title: "ГАЗель Некст на метане — вид 3", category: "ГБО" },
  { src: "/images/pages/sobol-4h4-avarijnaya-gazovaya-sluzhba-1.jpg", title: "Соболь 4х4 аварийная газовая служба", category: "Спецтехника" },
  { src: "/images/pages/sobol-4h4-avarijnaya-gazovaya-sluzhba.jpg", title: "Аварийная газовая служба Соболь", category: "Спецтехника" },
  { src: "/images/pages/avarijnaya-gazovaya-sluzhba-portfolio.jpg", title: "Аварийная газовая служба", category: "Спецтехника" },
  { src: "/images/pages/avtomasterskaya-gazon-next-c41r13-vid2.jpg", title: "Автомастерская Газон Некст C41R13", category: "Мастерские" },
  { src: "/images/pages/avtomasterskaya-a32r32-vid2.jpg", title: "Автомастерская A32R32", category: "Мастерские" },
  { src: "/images/pages/automasterskaya-gazel-nekst.jpg", title: "Автомастерская ГАЗель Некст", category: "Мастерские" },
  { src: "/images/pages/gazel-nekst-ritualnyj-avtomobil-5.jpg", title: "Ритуальный автомобиль ГАЗель Некст", category: "Ритуальные" },
  { src: "/images/pages/gazel-nekst-ritualnyj-avtomobil-6.jpg", title: "Ритуальный автомобиль — вид 2", category: "Ритуальные" },
  { src: "/images/pages/gazel-nekst-ritualnyj-avtomobil-7.jpg", title: "Ритуальный автомобиль — вид 3", category: "Ритуальные" },
  { src: "/images/pages/gazon-nekst-evakuator-sdvizhnaya-platforma.jpg", title: "Эвакуатор Газон Некст", category: "Эвакуаторы" },
  { src: "/images/pages/evakuator-sdvizhnoj-platformoj-vid.jpg", title: "Эвакуатор со сдвижной платформой", category: "Эвакуаторы" },
  { src: "/images/pages/gaz-gazon-nekst-evakuator-sdvizhnaya-platforma.jpg", title: "Эвакуатор ГАЗон Некст", category: "Эвакуаторы" },
  { src: "/images/pages/kmu-taurus-sadko-nekst-142.jpg", title: "КМУ Таурус на Садко Некст", category: "КМУ" },
  { src: "/images/pages/gaz-gazon-nekst-s-krano-manipulyatornoj-ustanovkoj-bort-62.jpg", title: "КМУ на Газон Некст", category: "КМУ" },
  { src: "/images/pages/gazel-nekst-s-zakabinnym-spalnikom-51.jpg", title: "ГАЗель Некст со спальником", category: "Спальники" },
  { src: "/images/pages/gazel-nekst-samosval-na-metane.jpg", title: "ГАЗель Некст самосвал на метане", category: "ГБО" },
  { src: "/images/pages/gaz-sobol-biznes-dorabotka.jpg", title: "Доработка ГАЗ Соболь Бизнес", category: "Переоборудование" },
  { src: "/images/pages/lada-largus-na-metane-1.jpg", title: "Лада Ларгус на метане", category: "ГБО" },
  { src: "/images/pages/kia-optima-na-propane.jpg", title: "Kia Optima на пропане", category: "ГБО" },
  { src: "/images/pages/opasnyj-gruz-c45r02-pro.jpg", title: "Опасный груз C45R02", category: "Спецтехника" },
  { src: "/images/pages/mobilnyj-ofis-postavka-1.jpg", title: "Мобильный офис", category: "Спецтехника" },
];

const worksCategories = [...new Set(works.map((w) => w.category))];

export default function WorksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <AnimateOnScroll animation="fade-down">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Наши работы</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Галерея выполненных работ по переоборудованию автомобилей. Мы выполняем полный цикл работ —
          от подбора шасси до регистрации переоборудования.
        </p>
      </AnimateOnScroll>

      {worksCategories.map((category) => (
        <section key={category} className="mb-12">
          <AnimateOnScroll animation="fade-left">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{category}</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {works
              .filter((w) => w.category === category)
              .map((work, i) => (
                <AnimateOnScroll key={work.src} animation="zoom-in" delay={(i % 4) * 100}>
                  <div className="group">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <Image
                        src={work.src}
                        alt={work.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{work.title}</p>
                  </div>
                </AnimateOnScroll>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
