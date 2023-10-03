import React from "react";
import { render, screen } from "@testing-library/react";

import HelpPage from "../HelpPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders help page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HelpPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("help-datatable")).toBeInTheDocument();
    expect(screen.getByRole("help-add-button")).toBeInTheDocument();
});
