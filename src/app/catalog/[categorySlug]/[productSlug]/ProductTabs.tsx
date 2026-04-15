"use client";

import { useState } from "react";
import { Product } from "@/lib/types";

interface Props {
  product: Product;
}

function ContactTab({ productTitle }: { productTitle: string }) {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact info */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Контакты</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-medium">E-mail: </span>
            <a href="mailto:info@alliance-td.ru" className="text-primary hover:underline">
              info@alliance-td.ru
            </a>
          </p>
        </div>

      </div>

      {/* Form */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Написать нам</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value;
            const email = (form.elements.namedItem("email") as HTMLInputElement).value;
            const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
            window.location.href = `mailto:info@alliance-td.ru?subject=Запрос по: ${encodeURIComponent(productTitle)}&body=${encodeURIComponent(`Имя: ${name}\nEmail: ${email}\n\n${message}`)}`;
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
            <input
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
              placeholder="Иван Иванов"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ваш e-mail</label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
              placeholder="example@mail.ru"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
            <textarea
              name="message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white resize-none"
              placeholder="Ваш вопрос или комментарий..."
            />
          </div>
          <button
            type="submit"
            className="bg-accent hover:bg-accent-hover text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ProductTabs({ product }: Props) {
  const tabs: { id: string; title: string; html?: string; custom?: string }[] = [];

  if (product.description_html) {
    tabs.push({ id: "description", title: "Описание", html: product.description_html });
  }

  if (product.tabs) {
    Object.entries(product.tabs).forEach(([key, tab]) => {
      if (key === "tab-description") return;
      if (key.startsWith("tab-title-") || key.startsWith("tab-item-title-")) return;
      if (!tab.html || !tab.title || tab.title.startsWith("tab-")) return;
      if (tab.title === "Отзывы") return; // убираем вкладку отзывов
      if (tab.title === "Контакты") {
        tabs.push({ id: key, title: "Контакты", custom: "contacts" });
        return;
      }
      tabs.push({ id: key, title: tab.title, html: tab.html });
    });
  }

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  if (tabs.length === 0) return null;

  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="flex overflow-x-auto border-b bg-gray-50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "bg-white text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {activeContent && (
        activeContent.custom === "contacts"
          ? <ContactTab productTitle={product.title} />
          : <div className="p-6 prose max-w-none" dangerouslySetInnerHTML={{ __html: activeContent.html! }} />
      )}
    </div>
  );
}
