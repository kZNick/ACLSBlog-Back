import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";
import Post from "./posts.entity";


@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 280 })
  content: string;

  @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  releaseDate: Date;


  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Post, post => post.comments)
  post: Post; 
}
export default Comment;