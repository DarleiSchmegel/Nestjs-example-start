import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Error, Model } from 'mongoose';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';
import { Section } from './section.schema';

@Injectable()
export class SectionsService {
  constructor(
    @InjectModel(Section.name)
    private readonly section: Model<Section>,
  ) {}
  async create(createSectionInput: CreateSectionInput) {
    try {
      if (
        !['CIT', 'CEG', 'CEC', 'ENPOS', 'CIC'].includes(createSectionInput.type)
      ) {
        return new Error(
          `Envento "${createSectionInput.type}" não está na lista de Eventos`,
        );
      }

      const section = new this.section(createSectionInput);
      return await section.save();
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findAll() {
    try {
      const sections = await this.section.find();

      if (!sections) {
        return 'section not found';
      }
      return sections;
    } catch (error) {
      return new Error(error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} section`;
  }

  update(id: number, updateSectionInput: UpdateSectionInput) {
    return `This action updates a #${id} section`;
  }

  remove(id: number) {
    return `This action removes a #${id} section`;
  }
}
