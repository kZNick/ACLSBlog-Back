import { z } from "zod";
import { Comment } from "../entities";
import { commentsSchema, commentsSchemaRequest } from "../schema/comments.schemas";

type TComment = Comment;
type TCommentRequest = z.infer<typeof commentsSchemaRequest>;
type TCommentResponse = z.infer<typeof commentsSchema>;

export {TComment,TCommentRequest,TCommentResponse}