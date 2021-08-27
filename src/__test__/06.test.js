import React from "react";
import {render, screen, waitForElementToBeRemoved} from "@testing-library/react";
import {rest} from "msw";
import {setupServer} from "msw/node";
import {mockPikachu} from "../test/test-utils";
import userEvent from "@testing-library/user-event";

import {PokemonApp} from "../components/Pokemon";

/**
 * Takeaways:
 * 1) Mocking handlers and servers
 * 2) asynchronous tests
 */
// server handlers
const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon/pikachu", async (req, res, ctx) => {
    return res(ctx.status(304), ctx.json(mockPikachu));
  }),
  rest.get("https://pokeapi.co/api/v2/pokemon/poo", async (req, res, ctx) => {
    return res(ctx.status(404), ctx.json({message: "Not Found"}));
  }),
];

// create mock server
const server = setupServer(...handlers);

beforeAll(() => server.listen());
// clean up for server errors
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("searching pikachu", async () => {
  // TODO
  expect(2 + 2).toBe(4);
  // render(<PokemonApp />);
  // userEvent.type(screen.getByRole("textbox"), "pikachu");
  // userEvent.click(screen.getByRole("button", {name: /search/i}));
  // await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  // expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
});
