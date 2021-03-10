import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Feeder } from './Feeder';

@Entity('foods')
export class Foods {
  @PrimaryGeneratedColumn('uuid')
  @ManyToOne(() => Feeder, feeder => feeder.id, { cascade: true })
  @JoinColumn({ name: 'feeder_id',  referencedColumnName: 'id'})
  public feeder_id: string;

  @Column()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public category: number;

  @Column()
  public price: string;


  constructor(props: Omit<Foods, 'id'>, id?: string) {
		Object.assign(this, props);

		if(!id) {
			this.id = uuidv4();
		}
	}
}