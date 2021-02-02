import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Course from './CourserModel';

@Entity('lesson')
class LessonModel {
    @PrimaryGeneratedColumn('uuid')
    id:string; 

    @Column()
    name: string;

    @Column()
    duration: string;
    
    @Column()
    description: string;
    
    @Column()
    course_id: string;
    
    @ManyToOne(() => Course) //relacionamento 
    @JoinColumn({name: 'course_id'})
    course: Course;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    
}

export default LessonModel;