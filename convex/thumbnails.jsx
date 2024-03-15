import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createThumbnail = mutation({
  args: {
    title: v.string(),
  },

  handler: async (ctx, args) => {
    await ctx.db.insert("thumbnails", {
      title: args.title,
    });
  },
});

export const getThumbnails = query({
  handler: async (ctx, args) => {
    return await ctx.db.query("thumbnails").collect();
  },
});

export const deleteThumbnail = mutation({
  args: { id: v.id("thumbnails") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const updateThumbnail = mutation({
  args: { id: v.id("thumbnails"), title: v.string() },
  handler: async (ctx, args) => {
    const { id } = args;

    await ctx.db.patch(id, { title: args.title });
  },
});
