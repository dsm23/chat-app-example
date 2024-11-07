import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Chat from ".";

describe("page", () => {
  describe("Chat", () => {
    it("should render correctly", () => {
      render(<Chat />);

      expect(screen.getByText("Chat")).toBeInTheDocument();
    });
  });
});
