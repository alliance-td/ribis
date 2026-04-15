"use client";

import { useState } from "react";
import Image from "next/image";

interface CertificateItem {
  src: string;
  alt: string;
}

export default function CertificateGallery({ items }: { items: CertificateItem[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((cert, i) => (
          <button
            key={cert.src}
            onClick={() => setSelected(i)}
            className="bg-white rounded-lg shadow p-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              width={400}
              height={560}
              className="w-full h-auto rounded"
            />
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:scale-110 transition-transform"
            onClick={() => setSelected(null)}
          >
            &times;
          </button>

          {selected > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:scale-110 transition-transform bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
            >
              &#8249;
            </button>
          )}

          {selected < items.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:scale-110 transition-transform bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
            >
              &#8250;
            </button>
          )}

          <div
            className="relative max-w-3xl max-h-[90vh] animate-[zoomIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[selected].src}
              alt={items[selected].alt}
              width={800}
              height={1120}
              className="max-h-[90vh] w-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
