import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { StockStatus } from "./StockStatus";

test("says in stock while plenty are left", () => {
  render(<StockStatus batch={{ status: "open", number: 1, size: 20, left: 7 }} />);
  expect(screen.getByText("In stock")).toBeDefined();
});

test("counts the last few units", () => {
  render(<StockStatus batch={{ status: "open", number: 1, size: 20, left: 2 }} />);
  expect(screen.getByText("Only 2 left")).toBeDefined();
});

test("says sold out at zero", () => {
  render(<StockStatus batch={{ status: "open", number: 1, size: 20, left: 0 }} />);
  expect(screen.getByText("Sold out")).toBeDefined();
});

test("says coming soon for a scheduled batch", () => {
  render(<StockStatus batch={{ status: "scheduled", number: 1, size: 15, opens: "March" }} />);
  expect(screen.getByText("Coming soon")).toBeDefined();
});
