import { z } from "zod";
import { Post } from "../entities";
import {
  createPostSchema,
  postSchema,
  postSchemaRequest,
} from "../schema/posts.schemas";

type TPost = Post;
type TPostRequest = z.infer<typeof postSchemaRequest>;
type TPostResponse = z.infer<typeof postSchema>;
type TPostUpdateRequest = z.infer<typeof createPostSchema>;

export {TPost, TPostRequest, TPostResponse,TPostUpdateRequest}