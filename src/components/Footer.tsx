import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "https://альянс-россия.рф", label: "Главная" },
  { href: "/about", label: "О компании" },
  { href: "/works", label: "Наши работы" },
  { href: "/catalog", label: "Каталог" },
  { href: "/delivery", label: "Доставка" },
  { href: "/contacts", label: "Контакты" },
];

const categoryLinks = [
  { href: "/catalog/gaz-gazel-nekst", label: "ГАЗель Некст" },
  { href: "/catalog/gazon-nekst", label: "Газон Некст" },
  { href: "/catalog/sadko-nekst", label: "Садко Некст" },
  { href: "/catalog/gaz-sobol", label: "ГАЗ Соболь NN" },
  { href: "/catalog/speczavtomobili", label: "Спецавтомобили" },
  { href: "/catalog/avtobusy-paz", label: "Автобусы ПАЗ" },
  { href: "/catalog/mikroavtobusy", label: "Микроавтобусы" },
  { href: "/catalog/avtofurgony", label: "Автофургоны" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="rounded-lg overflow-hidden" style={{ width: 130, height: 70, flexShrink: 0 }}>
                <Image
                  src="/images/pages/logo-makecars.png"
                  alt="MakeCars"
                  width={130}
                  height={70}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: "center center" }}
                />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Make</span><span style={{ color: "#7eb8f7" }}>Cars</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-[200px]">
              Производство, продажа и переоборудование спецавтомобилей ГАЗ.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <a href="mailto:info@alliance-td.ru" className="hover:text-accent transition-colors">
                  info@alliance-td.ru
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-light">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MakeCars. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
