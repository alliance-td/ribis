import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Доставка",
  description: "Доставка спецавтомобилей по всей России. Способы оплаты: безнал, кредит, лизинг.",
};

const deliveryImages = [
  "/images/pages/dostavka-2.webp",
  "/images/pages/dostavka-4.webp",
  "/images/pages/dostavka-5.webp",
];

export default function DeliveryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Доставка</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="prose max-w-none">
          <h2>Доставка автомобилей по России</h2>
          <p>
            Компания MakeCars осуществляет доставку спецавтомобилей по всей территории Российской Федерации.
            Мы организуем перегон или доставку на автовозе до вашего города.
          </p>

          <h2>Способы оплаты</h2>
          <ul>
            <li><strong>Безналичный расчёт</strong> — оплата по счёту для юридических лиц и ИП</li>
            <li><strong>Кредит</strong> — оформление кредита через банки-партнёры</li>
            <li><strong>Лизинг</strong> — лизинг для юридических лиц и ИП через лизинговые компании</li>
          </ul>

          <h2>Порядок заказа</h2>
          <ol>
            <li>Свяжитесь с нами по телефону или через форму на сайте</li>
            <li>Обсудите комплектацию и требования к автомобилю</li>
            <li>Получите коммерческое предложение</li>
            <li>Заключите договор и внесите предоплату</li>
            <li>Изготовление/переоборудование автомобиля</li>
            <li>Приёмка готового автомобиля</li>
            <li>Доставка в ваш регион</li>
          </ol>

          <h2>Контакты для заказа</h2>
          <p>
            Email: <a href="mailto:info@alliance-td.ru">info@alliance-td.ru</a>
          </p>
        </div>

        <div className="space-y-4">
          {deliveryImages.map((img) => (
            <div key={img} className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={img}
                alt="Доставка автомобилей MakeCars"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
