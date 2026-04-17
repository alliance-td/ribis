import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white mt-auto" style={{ backgroundColor: "#0d1829" }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/pages/logo-aliance.png"
              alt="АЛЬЯНС"
              width={56}
              height={56}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="text-3xl font-black tracking-normal uppercase text-white">
              АЛЬЯНС
            </span>
          </Link>

          <div>
            <h3 className="font-bold mb-2 text-sm text-gray-400 uppercase tracking-wider">Контакты</h3>
            <a href="mailto:info@alliance-td.ru" className="text-sm text-gray-300 hover:text-white transition-colors">
              info@alliance-td.ru
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 text-center text-xs text-gray-500">
          ООО «Альянс» &copy; 2023. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
