import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BeforeInsert  } from 'typeorm';
import { v4 } from 'uuid';


@Entity('courses')
class CourserModel {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name: string;

    @Column()
    image:string;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    
    @BeforeInsert()
	addId() {
		this.id = v4();
	}
}

export default CourserModel;