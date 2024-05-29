import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createTest = mutation({
  args: {
    username: v.string(),
    title: v.string(),
    total: v.number(),
    correctAnswers: v.number(),
    wrongAnswers: v.number(),
    average: v.number(),
    grade: v.number(),
    finish: v.boolean(),
    url: v.string(),
  },

  handler: async (ctx, args) => {
    const id = await ctx.db.insert("tests", {
      username: args.username,
      title: args.title,
      total: args.total,
      correctAnswers: args.correctAnswers,
      wrongAnswers: args.wrongAnswers,
      average: args.average,
      grade: args.grade,
      finish: args.finish,
      url: args.url,
    });
    const testId = await ctx.db.get(id);
    return testId;
  },
});

export const getTests = query({
  handler: async (ctx, args) => {
    return await ctx.db.query("tests").collect();
  },
});

export const deleteTest = mutation({
  args: { id: v.id("tests") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const updateTest = mutation({
  args: {
    id: v.id("tests"),
    username: v.string(),
    title: v.string(),
    total: v.number(),
    correctAnswers: v.number(),
    wrongAnswers: v.number(),
    average: v.number(),
    grade: v.number(),
    finish: v.boolean(),
    url: v.string(),
  },
  handler: async (ctx, args) => {
    const { id } = args;

    await ctx.db.patch(id, {
      correctAnswers: args.correctAnswers,
      wrongAnswers: args.wrongAnswers,
      average: args.average,
      grade: args.grade,
      total: args.total,
      finish: args.finish,
      url: args.url,
    });
  },
});
/* export const getTest = query({
  args: { ttl: v.string() },
  handler: async (ctx) => {
    return await ctx.db
      .query("tests")
      .filter((q) =>
        q.and(q.eq(q.field("title"), args.ttl), q.eq(q.field("finish"), false)),
      )
      .collect();
  },
}); */
export const getIncompleteUserTest = query({
  args: { user: v.string() },
  handler: async (ctx, args) => {
    const test = await ctx.db
      .query("tests")
      .filter((q) =>
        q.and(
          q.eq(q.field("username"), args.user),
          q.eq(q.field("finish"), false),
        ),
      )

      .collect();
    return test;
  },
});
