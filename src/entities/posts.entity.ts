import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import User from "./users.entity";
import Comment from "./comments.entity";


@Entity("posts")
class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  title: string;

  @Column({ type: "varchar", length: 300})
  publication: string;

  @Column({ type: "varchar", length: 500, nullable: true})
  Img: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @CreateDateColumn({ type: "date" })
  updatedAt: string | Date;


  @ManyToOne(() => User, user => user.posts)
  user: User;

  @OneToMany(() => Comment, comment => comment.post)
  comments: Comment[];

}

export default Post;