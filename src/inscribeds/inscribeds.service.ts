import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInscribedInput } from './dto/create-inscribed.input';
import { UpdateInscribedInput } from './dto/update-inscribed.input';
import { Inscribed } from './inscribed.schema';

@Injectable()
export class InscribedsService {
  constructor(
    @InjectModel(Inscribed.name)
    private readonly inscribed: Model<Inscribed>,
  ) {}
  create(createInscribedInput: CreateInscribedInput) {
    try {
      const inscribed = new this.inscribed(createInscribedInput);
      return inscribed.save();
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findAll() {
    try {
      const incribeds = await this.inscribed.find();

      if (!incribeds) {
        return 'incribeds not found';
      }
      return incribeds;
    } catch (error) {
      return new Error(error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} inscribed`;
  }

  update(id: number, updateInscribedInput: UpdateInscribedInput) {
    return `This action updates a #${id} inscribed`;
  }

  remove(id: number) {
    return `This action removes a #${id} inscribed`;
  }
}
