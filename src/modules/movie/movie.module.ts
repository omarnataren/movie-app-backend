import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { Movie } from './entities/movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  imports: [TypeOrmModule.forFeature([Movie])],
})
export class MovieModule {}
