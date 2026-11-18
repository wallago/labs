import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { StockMeter } from "./StockMeter";

test("describes what is left of the batch", () => {
  render(<StockMeter batch={{ status: "open", number: 1, size: 20, left: 7 }} />);
  expect(screen.getByRole("img", { name: "7 of 20 left" })).toBeDefined();
  expect(screen.getByText("Batch 01")).toBeDefined();
});

test("never shows more left than the batch holds", () => {
  render(<StockMeter batch={{ status: "open", number: 2, size: 10, left: 12 }} />);
  expect(screen.getByRole("img", { name: "10 of 10 left" })).toBeDefined();
});

test("reads as sold out at zero", () => {
  render(<StockMeter batch={{ status: "open", number: 1, size: 20, left: 0 }} />);
  expect(screen.getByRole("img", { name: "Sold out, all 20 units shipped" })).toBeDefined();
});

test("gives the size and date of a scheduled batch", () => {
  render(<StockMeter batch={{ status: "scheduled", number: 1, size: 15, opens: "March" }} />);
  expect(screen.getByRole("img", { name: "15 units, opens March" })).toBeDefined();
});
