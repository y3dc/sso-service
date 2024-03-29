import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('USERS')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string
}
