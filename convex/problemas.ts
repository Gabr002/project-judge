import { query } from "./_generated/server";
import { v } from "convex/values";

export const listProblems = query(async ({ db }) => {
  return await db.query("problems").collect();
});

export const getProblemById = query({
  args: { id: v.id("problems") },
  handler: async ({ db }, { id }) => {
    return await db.get(id);
  },
});
