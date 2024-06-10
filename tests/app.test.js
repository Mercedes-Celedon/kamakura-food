import { describe, test } from "vitest";
import { JSDOM } from "jsdom";
import { showProducts } from "../src/menu";

describe("testing DOM", () => {
  test("Testing 'inicio' is the first link on the navbar", async () => {
    const dom = await JSDOM.fromFile("index.html", {
      url: "http://localhost/",
    });
    const nav = dom.window.document.querySelector(".nav-link");
    expect(nav.innerHTML).toBe("Inicio");
  });
});

describe("testing display products", () => {
  test("should display products", async () => {
    const dom = await JSDOM.fromFile("index.html", {
      url: "http://localhost/",
    });

    global.document = dom.window.document;
    global.window = dom.window;

    const products = [
      { id: 1, name: "Product 1", description: "Description 1", price: 10 },
      { id: 2, name: "Product 2", description: "Description 2", price: 20 },
    ];

    showProducts(products);

    const productsContainer = document.getElementById("products");

    expect(productsContainer.children.length).toBe(2);
    expect(productsContainer.innerHTML).toContain("Product 1");
    expect(productsContainer.innerHTML).toContain("Description 1");
    expect(productsContainer.innerHTML).toContain("10 €");
    expect(productsContainer.innerHTML).toContain("Product 2");
    expect(productsContainer.innerHTML).toContain("Description 2");
    expect(productsContainer.innerHTML).toContain("20 €");

    const button1 = document.getElementById("1");
    const button2 = document.getElementById("2");
    expect(button1).not.toBeNull();
    expect(button2).not.toBeNull();
    expect(button1.textContent).toBe("Añadir");
    expect(button2.textContent).toBe("Añadir");
  });
});
