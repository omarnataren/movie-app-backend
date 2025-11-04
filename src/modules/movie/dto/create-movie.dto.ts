import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsString()
  @MinLength(10)
  sinopsis: string;

  @IsString()
  genre: string;

  @MinLength(1700)
  @IsNumber()
  rating: number;

  @IsString()
  poster_url: string;

  @IsNumber()
  releaseDate: number;
}
