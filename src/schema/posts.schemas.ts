import { z } from "zod";

const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  publication: z.string(),
  Img: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.number(),
});

const postSchemaRequest = postSchema.omit({
    createdAt: true,
    updatedAt: true,
    id: true,
  });

  const createPostSchema = z.object({
    title: z.string().min(2).max(100),
    publication: z.string().min(2).max(300),
    Img: z.string().optional()
  });

  const createPosttPatchSchema = z.object({
    title: z.string().min(3).max(100).optional(),
    publication: z.string().min(3).max(300).optional(),
    Img: z.string().optional().optional()
  });

  export {postSchema,postSchemaRequest,createPostSchema,createPosttPatchSchema}