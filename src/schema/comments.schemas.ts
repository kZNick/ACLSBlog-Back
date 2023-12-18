import { z } from "zod";

const commentsSchema = z.object({
    id: z.number(),
    content: z.string(),
    releaseDate: z.date(),
    user: z.number(),
    post: z.number()
  });

  const commentsSchemaRequest = commentsSchema.omit({
    releaseDate: true,
    id: true,
  });

  const createCommentSchema = z.object({
    content: z.string().min(2).max(280),
  });

  export {commentsSchema, commentsSchemaRequest, createCommentSchema }