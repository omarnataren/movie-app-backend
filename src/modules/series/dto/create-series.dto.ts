import { IsString, IsInt, Min, MinLength, MaxLength } from 'class-validator';

export class CreateSeriesDto {
  @IsString()
  title: string;

  @IsString()
  @MinLength(12)s
  @MaxLength(100)
  sinopsis: string;

  @IsInt()
  @Min(1)
  num_temporadas: number;

  @IsString()
  plataforma: string;

  @IsInt()
  @Min(0)
  likes?: number;
}
