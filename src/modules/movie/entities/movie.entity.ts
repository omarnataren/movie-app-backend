import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  sinopsis: string;
  @Column()
  genre: string;
  @Column()
  releaseDate: number;
  @Column()
  poster_url: string;
  @Column()
  rating: number;
}
