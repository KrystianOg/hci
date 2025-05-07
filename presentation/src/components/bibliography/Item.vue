<script setup lang="ts">
import { computed } from "vue";
import type { BibliographyEntry } from "./content";

const props = defineProps<{
  /**
   * Title for the bibliography section (optional)
   */
  title?: string;
  /**
   * Reference object
   */
  entry: BibliographyEntry;
  /**
   * Formatting style: 'APA', 'MLA', or 'Chicago'
   */
  formatting?: "APA" | "MLA" | "Chicago";
}>();

function formatAuthors(authors: string[]): string {
  switch (props.formatting) {
    case "MLA":
      return authors
        .map((name, i) => {
          const [last, first] = name.split(",").map((s) => s.trim());
          return i === 0 ? `${last}, ${first}` : `${first} ${last}`;
        })
        .join(", and ");
    case "Chicago":
      return authors.join("; ");
    case "APA":
    default:
      return authors
        .map((name) => {
          const [last, first] = name.split(",").map((s) => s.trim());
          return `${last}, ${first.charAt(0)}.`;
        })
        .join(", ");
  }
}

function formatEntry({
  authors = [],
  year,
  title,
  container,
  volume,
  issue,
  pages,
  publisher,
  url,
}: BibliographyEntry): string {
  const authorStr = authors.length ? `${formatAuthors(authors)}. ` : "";
  const yearStr = year ? `(${year}). ` : "";
  const titleStr = title ? `<em>${title}.</em> ` : "";
  let sourceStr = "";

  if (container) {
    if (props.formatting === "MLA") {
      sourceStr = `${container}`;
      if (volume) sourceStr += `, vol. ${volume}`;
      if (issue) sourceStr += `, no. ${issue}`;
      if (pages) sourceStr += `, pp. ${pages}`;
      sourceStr += ". ";
    } else if (props.formatting === "Chicago") {
      sourceStr = `${container}`;
      if (volume) sourceStr += ` ${volume}`;
      if (issue) sourceStr += `, no. ${issue}`;
      if (pages) sourceStr += `: ${pages}`;
      sourceStr += ". ";
    } else {
      // APA default
      sourceStr = `${container}`;
      if (volume) sourceStr += `, <strong>${volume}</strong>`;
      if (issue) sourceStr += `(${issue})`;
      if (pages) sourceStr += `, ${pages}`;
      sourceStr += ". ";
    }
  }

  const publisherStr = publisher ? `${publisher}. ` : "";
  const urlStr = url
    ? `<a href="${url}" target="_blank" rel="noopener">${url}</a>`
    : "";

  return [authorStr, yearStr, titleStr, sourceStr, publisherStr, urlStr]
    .join("")
    .trim();
}

const formattedEntry = computed(() => formatEntry(props.entry));
</script>
<template>
  <li class="bibliography__item">
    <span v-html="formattedEntry"></span>
  </li>
</template>
<style>
.bibliography {
  margin: 1rem 0;
}
.bibliography__list {
  margin-top: 0 !important;
}
.bibliography__title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
.bibliography__item {
  padding: 0 !important;
  font-size: 16px;
  text-indent: -1.5em;
  margin-left: 1.5em;
  margin-bottom: 0.5em;
  line-height: 1.4;
}
.bibliography__item a {
  color: #3b82f6;
  text-decoration: none;
}
.bibliography__item a:hover {
  text-decoration: underline;
}
</style>
