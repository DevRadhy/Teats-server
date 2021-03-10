import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from "./User";

@Entity('feeders')
export class Feeder {
  @PrimaryGeneratedColumn('uuid')
  @OneToOne(() => User, user => user.id, { cascade: true })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  public user_id: string;

  @Column()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public contact: string;

  @Column()
  public avatar: string;

  @Column()
  public description: string;

  @Column()
  public payment: number;

  constructor(props: Omit<Feeder, 'id'>, id?: string) {
		Object.assign(this, props);

		if(!id) {
			this.id = uuidv4();
		}
	}
}
