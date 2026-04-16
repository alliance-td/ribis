import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты MakeCars. Форма обратной связи.",
};

export default function ContactsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Контакты</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Contact info */}
        <div>
          <div className="bg-white border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Контактная информация</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <p><a href="mailto:info@alliance-td.ru" className="text-primary hover:underline">info@alliance-td.ru</a></p>
              </div>
            </div>
          </div>

        </div>

        {/* Form + Map */}
        <div>
          <div className="bg-white border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Форма обратной связи</h2>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
