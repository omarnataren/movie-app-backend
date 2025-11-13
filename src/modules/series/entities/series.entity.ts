import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Series {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  sinopsis: string;

  @Column()
  num_temporadas: number;

  @Column()
  plataforma: string;

  @Column({ type: 'int', default: 0 })
  likes: number;
}
