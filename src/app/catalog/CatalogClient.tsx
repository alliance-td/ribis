"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { Product, Category } from "@/lib/types";
import { TAG_NAMES } from "@/lib/data";

interface CatalogClientProps {
  initialProducts: Product[];
  categories: Category[];
  tags: string[];
  fuels: string[];
  wheels: string[];
  initialCategory?: string;
}

const ITEMS_PER_PAGE = 12;

export default function CatalogClient({
  initialProducts,
  categories,
  tags,
  fuels,
  wheels,
  initialCategory,
}: CatalogClientProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedFuels, setSelectedFuels] = useState<string[]>([]);
  const [selectedWheels, setSelectedWheels] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000000]);
  const [sortBy, setSortBy] = useState<string>("newest");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const maxPrice = useMemo(() => {
    return Math.max(...initialProducts.map((p) => p.price_value || 0), 20000000);
  }, [initialProducts]);

  const filtered = useMemo(() => {
    let result = initialProducts;

    if (selectedCategories.length > 0) {
      result = result.filter(
        (p) =>
          selectedCategories.includes(p.category_slug) ||
          p.categories.some((c) => selectedCategories.includes(c))
      );
    }

    if (selectedTags.length > 0) {
      result = result.filter((p) =>
        p.tags.some((t) => selectedTags.includes(t))
      );
    }

    if (selectedFuels.length > 0) {
      result = result.filter((p) => {
        const fuel = p.attributes["Двигатель, топливо"];
        return fuel && selectedFuels.includes(fuel);
      });
    }

    if (selectedWheels.length > 0) {
      result = result.filter((p) => {
        const wheel = p.attributes["Колёсная формула"];
        return wheel && selectedWheels.includes(wheel);
      });
    }

    result = result.filter(
      (p) => p.price_value >= priceRange[0] && p.price_value <= priceRange[1]
    );

    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price_value - b.price_value);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price_value - a.price_value);
        break;
      default:
        break;
    }

    return result;
  }, [initialProducts, selectedCategories, selectedTags, selectedFuels, selectedWheels, priceRange, sortBy]);

  const toggleFilter = (
    value: string,
    selected: string[],
    setter: (v: string[]) => void
  ) => {
    setter(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const filtersContent = (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-bold text-sm mb-3">Категория</h3>
        <div className="space-y-1.5 max-h-60 overflow-y-auto">
          {categories.map((cat) => (
            <label key={cat.slug} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.slug)}
                onChange={() => toggleFilter(cat.slug, selectedCategories, setSelectedCategories)}
                className="rounded border-gray-300 text-primary"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-bold text-sm mb-3">Вид техники</h3>
        <div className="space-y-1.5 max-h-60 overflow-y-auto">
          {tags.map((tag) => (
            <label key={tag} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => toggleFilter(tag, selectedTags, setSelectedTags)}
                className="rounded border-gray-300 text-primary"
              />
              {TAG_NAMES[tag] || tag}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-bold text-sm mb-3">Цена</h3>
        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={maxPrice}
            step={100000}
            value={priceRange[1]}
            onChange={(e) => {
              setPriceRange([priceRange[0], Number(e.target.value)]);
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>{priceRange[0].toLocaleString("ru-RU")} ₽</span>
            <span>{priceRange[1].toLocaleString("ru-RU")} ₽</span>
          </div>
        </div>
      </div>

      {/* Fuel */}
      <div>
        <h3 className="font-bold text-sm mb-3">Топливо</h3>
        <div className="space-y-1.5">
          {fuels.map((fuel) => (
            <label key={fuel} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFuels.includes(fuel)}
                onChange={() => toggleFilter(fuel, selectedFuels, setSelectedFuels)}
                className="rounded border-gray-300 text-primary"
              />
              {fuel}
            </label>
          ))}
        </div>
      </div>

      {/* Wheels */}
      <div>
        <h3 className="font-bold text-sm mb-3">Колёсная формула</h3>
        <div className="space-y-1.5">
          {wheels.map((w) => (
            <label key={w} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={selectedWheels.includes(w)}
                onChange={() => toggleFilter(w, selectedWheels, setSelectedWheels)}
                className="rounded border-gray-300 text-primary"
              />
              {w}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Mobile filter button */}
      <button
        className="lg:hidden bg-primary text-white py-2 px-4 rounded-lg font-medium"
        onClick={() => setFiltersOpen(!filtersOpen)}
      >
        {filtersOpen ? "Скрыть фильтры" : "Показать фильтры"}
      </button>

      {/* Mobile filters */}
      {filtersOpen && (
        <div className="lg:hidden bg-white border rounded-lg p-4">
          {filtersContent}
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="bg-white border rounded-lg p-4 sticky top-20">
          {filtersContent}
        </div>
      </aside>

      {/* Products */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Найдено: {filtered.length} авто
          </p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-3 py-1.5 text-sm"
          >
            <option value="newest">По новизне</option>
            <option value="price-asc">Цена: по возрастанию</option>
            <option value="price-desc">Цена: по убыванию</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            По выбранным фильтрам ничего не найдено
          </p>
        )}

        {visibleCount < filtered.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((v) => v + ITEMS_PER_PAGE)}
              className="bg-primary hover:bg-primary-light text-white font-medium py-2 px-8 rounded-lg transition-colors"
            >
              Показать ещё
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
