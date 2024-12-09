import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { FilterProvider } from "@/features/filters/models";
import { SAMPLE_RESPONSE } from "@/entities/todo/__tests__/sampleResponse";

import Page from "../../app/page";

describe("Page", () => {
  it("renders correctly", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(SAMPLE_RESPONSE),
      })
    ) as jest.Mock;

    render(
      <FilterProvider>
        <Page />
      </FilterProvider>
    );

    const elHeading = await screen.findByText("To-Do");
    expect(elHeading).toBeInTheDocument();

    const elFilterSection = await screen.findByText("Filter:");
    expect(elFilterSection).toBeInTheDocument();

    const elFilterAll = await screen.findByText("ALL");
    expect(elFilterAll).toBeInTheDocument();

    const elFilterPersonal = await screen.findByText("PERSONAL");
    expect(elFilterPersonal).toBeInTheDocument();

    const elFilterWork = await screen.findByText("WORK");
    expect(elFilterWork).toBeInTheDocument();

    const elTodoItem1 = await screen.findByText("Finish Firebase API");
    expect(elTodoItem1).toBeInTheDocument();
  });
});
