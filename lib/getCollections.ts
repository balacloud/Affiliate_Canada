import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Collection } from "@/types";

const collectionsDirectory = path.join(process.cwd(), "content/collections");

export function getAllCollections(): Collection[] {
  if (!fs.existsSync(collectionsDirectory)) return [];

  const files = fs
    .readdirSync(collectionsDirectory)
    .filter((f) => f.endsWith(".mdx"));

  return files.map((filename) => {
    const filePath = path.join(collectionsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data as Collection;
  });
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  const collections = getAllCollections();
  return collections.find((c) => c.slug === slug);
}

export function getCollectionsBySeason(season: string): Collection[] {
  const collections = getAllCollections();
  return collections.filter((c) => c.season === season);
}
