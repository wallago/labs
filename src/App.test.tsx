import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import { App } from "./App";

test("leads with the pitch", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
    "Gadgets built like car electronics. Made in tiny batches.",
  );
});

test("signs as wallago", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: "Hi, I'm wallago" })).toBeDefined();
});

test("lists Canary as available and Kagu as coming soon", () => {
  render(<App />);
  const canary = screen.getByRole("article", { name: "Canary" });
  const kagu = screen.getByRole("article", { name: "Kagu" });
  expect(within(canary).getByText("In stock")).toBeDefined();
  expect(within(kagu).getByText("Coming soon")).toBeDefined();
});

test("puts the open batch on the ticket", () => {
  render(<App />);
  const ticket = screen.getByRole("complementary", { name: "Current batch" });
  expect(within(ticket).getByText("Canary")).toBeDefined();
});
