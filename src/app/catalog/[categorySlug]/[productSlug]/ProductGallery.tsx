"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductImage } from "@/lib/types";

interface Props {
  images: ProductImage[];
  title: string;
}

export default function ProductGallery({ images, title }: Props) {
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  if (images.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
        Нет фото
      </div>
    );
  }

  const currentImage = images[selected];
  const src = "/" + currentImage.local;

  return (
    <>
      <div>
        <div
          className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-zoom-in mb-3"
          onClick={() => setZoomed(true)}
        >
          <Image
            src={src}
            alt={currentImage.alt || title}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`relative w-16 h-16 rounded border-2 overflow-hidden shrink-0 ${
                  i === selected ? "border-primary" : "border-gray-200"
                }`}
              >
                <Image
                  src={"/" + img.local}
                  alt={img.alt || title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Zoom modal */}
      {zoomed && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setZoomed(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setZoomed(false)}
          >
            &times;
          </button>
          <div className="relative w-full max-w-4xl aspect-square">
            <Image
              src={src}
              alt={currentImage.alt || title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
