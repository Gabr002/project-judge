import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addProblem = mutation({
  args: {
    title: v.string(),
    description: v.string(),
  },
  handler: async ({ db }, { title, description }) => {
    await db.insert("problems", { title, description });
  },
});