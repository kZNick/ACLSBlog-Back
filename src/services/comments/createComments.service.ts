import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Comment, Post } from "../../entities";
import { TCommentRequest, TCommentResponse } from "../../interfaces/comments.interfaces";
import { number } from "zod";
import { appError } from "../../erros";


export const createCommentsService = async (
    data: TCommentRequest,
    postId: number,
    userId: number
  ): Promise<TCommentResponse> => {
    const commentRepo: Repository<any> = AppDataSource.getRepository(Comment);
    const postRepo: Repository<any> = AppDataSource.getRepository(Post);

    let Postf: Post[] | undefined;

    Postf = await postRepo.findBy({
        id: postId,
      });
    if (Postf.length <= 0) {
        throw new appError(`Post with ID ${postId} does not exist.`,404);
    }
  
    data.user = userId
    data.post = postId
  
    
    const commentCreate = commentRepo.create(data);
  
    await commentRepo.save(commentCreate);
  
  
    return commentCreate;
  };
  
  export default createCommentsService  ;