import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createProblem = mutation({
  args: {
    title: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("problems", {
      title: args.title,
      description: args.description,
    });
  },
});
