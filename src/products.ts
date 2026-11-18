/**
 * The catalogue. Each product is sold in numbered batches; a batch is either
 * open (units can be ordered until `left` reaches zero) or scheduled.
 *
 * Values in [brackets] are placeholders until the real ones are known.
 */
export type Batch =
  | { status: "open"; number: number; size: number; left: number }
  | { status: "scheduled"; number: number; size: number; opens: string };

export type Product = {
  name: string;
  partNumber: string;
  tagline: string;
  price: string;
  batch: Batch;
  /** Background for the product tile until there is a photo. */
  tone: "canary" | "kagu";
};

export const products: Product[] = [
  {
    name: "Canary",
    partNumber: "WLG-CNR-01",
    tagline: "[One line on what Canary does and who it is for]",
    price: "[€ price]",
    batch: { status: "open", number: 1, size: 20, left: 7 },
    tone: "canary",
  },
  {
    name: "Kagu",
    partNumber: "WLG-KGU-01",
    tagline: "[One line on what Kagu does and who it is for]",
    price: "[€ target price]",
    batch: { status: "scheduled", number: 1, size: 15, opens: "[launch date]" },
    tone: "kagu",
  },
];

/** At or under this many units, the stock reads as running low. */
export const LOW_STOCK = 3;

export type StockState = "in-stock" | "low" | "sold-out" | "coming-soon";

export function stockState(batch: Batch): StockState {
  if (batch.status === "scheduled") {
    return "coming-soon";
  }
  if (batch.left <= 0) {
    return "sold-out";
  }
  return batch.left <= LOW_STOCK ? "low" : "in-stock";
}

/** Batch numbers read as on the hardware: 01, 02, … */
export function batchLabel(batch: Batch): string {
  return `Batch ${String(batch.number).padStart(2, "0")}`;
}
