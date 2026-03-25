import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Product } from "@/types";

const productsDirectory = path.join(process.cwd(), "content/products");

export function getAllProducts(): Product[] {
  if (!fs.existsSync(productsDirectory)) return [];

  const files = fs.readdirSync(productsDirectory).filter((f) => f.endsWith(".mdx"));

  return files.map((filename) => {
    const filePath = path.join(productsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data as Product;
  });
}

export function getProductBySlug(slug: string): Product | undefined {
  const products = getAllProducts();
  return products.find((p) => p.slug === slug);
}

export function getProductsByIds(ids: string[]): Product[] {
  const products = getAllProducts();
  return products.filter((p) => ids.includes(p.id));
}
