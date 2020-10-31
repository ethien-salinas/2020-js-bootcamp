import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'lastname' })
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'is_admin' })
  isAdmin: boolean;
}
