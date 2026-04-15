export interface ProductImage {
  url: string;
  local: string;
  alt: string;
}

export interface ProductTab {
  title: string;
  html: string;
}

export interface Product {
  slug: string;
  title: string;
  price: string;
  price_value: number;
  old_price: string;
  in_stock: boolean;
  short_description: string;
  description: string;
  description_html: string;
  short_description_html: string;
  categories: string[];
  tags: string[];
  images: ProductImage[];
  attributes: Record<string, string>;
  spec_tables: Record<string, unknown>;
  tabs: Record<string, ProductTab>;
  category_slug: string;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
  image: string;
  description: string;
  count_text: string;
  html_file: string;
}
