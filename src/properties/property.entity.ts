import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  numberOfRooms: number;

  @Column()
  numberOfBathrooms: number;

  @Column()
  area: number;

  @Column()
  imagePaths: string;

  @Column()
  isAvailableForPurchase: boolean;
}
