import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
	@PrimaryGeneratedColumn('uuid')
	public readonly id: string;

	@Column()
	public name: string;

	@Column()
	public external: string;

	@Column()
	public email: string;

	constructor(props: Omit<User, 'id'>, id?: string) {
		Object.assign(this, props);

		if(!id) {
			this.id = uuidv4();
		}
	}
}