import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';


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
    
}

export default CourserModel;