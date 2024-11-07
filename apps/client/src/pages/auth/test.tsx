import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Auth from ".";

describe("page", () => {
  describe("Auth", () => {
    it("should render correctly", () => {
      render(<Auth />);

      expect(screen.getByText("Auth")).toBeInTheDocument();
    });
  });
});
