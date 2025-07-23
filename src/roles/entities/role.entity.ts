import { User } from 'src/user/entities/user.entity';
 import {
 Entity,
 PrimaryGeneratedColumn,
 Column,
 CreateDateColumn,
 UpdateDateColumn,
OneToMany,
 } from 'typeorm';
 
 @Entity('roles')
 export class Role {
 @PrimaryGeneratedColumn()
 id: number;
 @Column({ unique: true })
 name: string;
 @Column({ type: 'text', nullable: true })
 description: string;
 @Column({ default: 'active' })
 status: string
 @CreateDateColumn({ name: 'created_at' })
 createdAt: Date;
 @UpdateDateColumn({ name: 'updated_at' })
 updatedAt: Date;
 @OneToMany(() => User, (user) => user.role)
 users: User[];
 }