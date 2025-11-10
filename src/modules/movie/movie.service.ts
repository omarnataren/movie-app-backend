import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const newMovie = this.movieRepository.create(createMovieDto);
    await this.movieRepository.save(newMovie);
    return newMovie;
  }

  async findAll() {
    const movies = await this.movieRepository.find();
    return movies;
  }

  async findOne(id: number) {
    const movie = await this.movieRepository.findOneBy({ id });
    if (!movie) {
      throw new Error(`Pelicula con el ID ${id} no encontrada`);
    }
    return movie;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = await this.movieRepository.preload({
      id: id,
      ...updateMovieDto,
    });
    if (!movie) {
      throw new Error(`Pelicula con el ID ${id} no encontrada`);
    }
    await this.movieRepository.save(movie);
    return movie;
  }

  async remove(id: number) {
    const movie = await this.movieRepository.findOneBy({ id });
    if (!movie) {
      throw new Error(`Pelicula con el ID ${id} no encontrada`);
    }
    await this.movieRepository.remove(movie);
    return movie;
  }
}
