import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  DeleteDateColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import Post from "./posts.entity";
import Comment from "./comments.entity";
import { getRounds, hashSync } from "bcryptjs";
import * as bcrypt from "bcryptjs";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  fullName: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 500, nullable: true })
  avatar: string | null;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @CreateDateColumn({ type: "date" })
  updatedAt: string | Date;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt?: string | Date | null | undefined;

  @BeforeInsert()
  @BeforeUpdate()
  hashPasssword() {
    if (this.password) {
      const isEncripted = getRounds(this.password);

      if (!isEncripted) {
        this.password = hashSync(this.password, 10);
      }
    }
  }

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];  
}

export default User;
