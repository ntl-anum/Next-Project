 // src/entities/user.entity.ts
 import { Role } from 'src/roles/entities/role.entity';
 import { StockMovement } from 'src/stock-movements/entities/stock-movement.entity';
 import {
 Entity,
 PrimaryGeneratedColumn,
 Column,
 ManyToOne,
 CreateDateColumn,
 UpdateDateColumn,
 JoinColumn,
 OneToMany,
 } from 'typeorm';

 @Entity('userss')
 export class User {
 @PrimaryGeneratedColumn()
 id: number;
 @Column({ unique: true })
 email: string;
 @Column()
 password: string;
 @Column()
 name: string;
 @Column({ type: 'text', nullable: true })
 token: string;
@ManyToOne(() => Role, (role) => role.users, { nullable: true, onDelete:
 'SET NULL' })
 @JoinColumn({ name: 'role_id' })
 role: Role;
 @Column({ default: 'active' })
 status: string;
 @CreateDateColumn({ name: 'created_at' })
 createdAt: Date;
 @UpdateDateColumn({ name: 'updated_at' })
 updatedAt: Date;
 @OneToMany(() => StockMovement, (sm) => sm.createdBy, { nullable: true })
 stockMovements: StockMovement[];
 }