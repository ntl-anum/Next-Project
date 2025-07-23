import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('stock_movements')
export class StockMovement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_id' })
  productId: number;

  @Column()
  type: string; // e.g., 'IN' or 'OUT'

  @Column()
  quantity: number;

  @Column({ type: 'text', nullable: true })
  note: string;

  @Column({ name: 'created_by' })
  createdBy: number;

  @Column({ nullable: true })
  status: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
