import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import type { Product } from "../products";
import { ProductCard } from "./ProductCard";

const base: Omit<Product, "batch"> = {
  name: "Canary",
  partNumber: "WLG-CNR-01",
  tagline: "A tagline",
  price: "€49",
  tone: "canary",
};

test("offers to order an open batch", () => {
  render(
    <ProductCard product={{ ...base, batch: { status: "open", number: 1, size: 20, left: 7 } }} />,
  );
  expect(screen.getByRole("article", { name: "Canary" })).toBeDefined();
  expect(screen.getByRole("link", { name: "Order yours" })).toBeDefined();
});

test("pushes the last units", () => {
  render(
    <ProductCard product={{ ...base, batch: { status: "open", number: 1, size: 20, left: 1 } }} />,
  );
  expect(screen.getByRole("link", { name: "Order before it's gone" })).toBeDefined();
});

test("offers the next batch once sold out", () => {
  render(
    <ProductCard product={{ ...base, batch: { status: "open", number: 1, size: 20, left: 0 } }} />,
  );
  expect(screen.getByRole("link", { name: "Get told about the next batch" })).toBeDefined();
});

test("offers a heads-up for a scheduled batch", () => {
  render(
    <ProductCard
      product={{
        ...base,
        name: "Kagu",
        batch: { status: "scheduled", number: 1, size: 15, opens: "March" },
      }}
    />,
  );
  expect(screen.getByRole("link", { name: "Get told when it opens" })).toBeDefined();
  expect(screen.getByText("Batch 01 is in the workshop now.")).toBeDefined();
});
