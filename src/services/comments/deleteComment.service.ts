import { Repository } from "typeorm";
import { Comment } from "../../entities";
import { AppDataSource } from "../../data-source";
import { appError } from "../../erros";

const deleteCommentService = async (
  commentId: number,
  userId: number
): Promise<void> => {
  const commentRepository: Repository<Comment> = AppDataSource.getRepository(Comment);

  const commentToDelete: any = await commentRepository
    .createQueryBuilder("comment")
    .leftJoinAndSelect("comment.user", "user")
    .where("comment.id = :id", { id: commentId })
    .getOne();

  if (!commentToDelete) {
    throw new appError("Comment not found", 404);
  }

  if (commentToDelete.user.id !== userId) {
    throw new appError(
      "You are not allowed to delete a Comment other than your own.",
      403
    );
  }

  await commentRepository.remove(commentToDelete);
};

export default deleteCommentService;
