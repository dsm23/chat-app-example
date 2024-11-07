import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Profile from ".";

describe("page", () => {
  describe("Profile", () => {
    it("should render correctly", () => {
      render(<Profile />);

      expect(screen.getByText("Profile")).toBeInTheDocument();
    });
  });
});
