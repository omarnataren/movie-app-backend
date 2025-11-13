import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/create-series.dto';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Post('/addSerie')
  create(@Body() createSeriesDto: CreateSeriesDto) {
    return this.seriesService.create(createSeriesDto);
  }

  @Delete('/removeSerie/:id')
  remove(@Param('id') id: string) {
    return this.seriesService.remove(+id);
  }
}
