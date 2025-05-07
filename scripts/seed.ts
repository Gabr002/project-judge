import { api } from "../convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";

const client = new ConvexHttpClient("http://localhost:3000"); // Certifique-se que o convex dev está rodando

async function main() {
  await client.mutation(api.problemas.createProblem, {
    title: "Soma Simples",
    description: "Dado dois inteiros, retorne a soma deles.",
  });

  await client.mutation(api.problemas.createProblem, {
    title: "Produto Simples",
    description: "Dado dois inteiros, retorne o produto deles.",
  });

  console.log("Problemas inseridos com sucesso!");
}

main().catch(console.error);
