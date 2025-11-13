import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSeriesDto } from './dto/create-series.dto';
import { Series } from './entities/series.entity';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Series)
    private seriesRepository: Repository<Series>,
  ) {}

  create(createSeriesDto: CreateSeriesDto) {
    const series = this.seriesRepository.create(createSeriesDto);
    return this.seriesRepository.save(series);
  }

  async remove(id: number) {
    await this.seriesRepository.delete(id);
    return { deleted: true };
  }
}
