import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { InscribedsService } from './inscribeds.service';
import { Response } from 'express';
@Controller('inscribeds')
@Controller()
export class InscribedsController {
  constructor(private readonly inscribedsService: InscribedsService) {}

  @Get()
  async findAll() {
    return await this.inscribedsService.findAll();
  }
}
