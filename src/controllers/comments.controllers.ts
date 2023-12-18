import { Request, Response } from "express";
import createCommentsService from "../services/comments/createComments.service";
import deleteCommentService from "../services/comments/deleteComment.service";

const commentCreatController = async (
    req: Request,
    resp: Response
  ): Promise<any> => {
    const CommentData = req.body;
    const postId = parseInt(req.params.id)
    const userId = parseInt(resp.locals.user.id)

    const comment = await createCommentsService(CommentData, postId, userId);
    return resp.json(comment);
  }

  const commentDeleteController = async (
    req: Request,
    resp: Response
  ): Promise<any> => {
    const commentId = parseInt(req.params.id)
    const userId = parseInt(resp.locals.user.id)
  
    const comment = await deleteCommentService(commentId, userId);
    return resp.json(comment);
  }

  export {commentCreatController,commentDeleteController}