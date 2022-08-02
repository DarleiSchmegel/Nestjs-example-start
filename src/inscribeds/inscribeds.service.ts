import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Presence, PresencesDocument } from 'src/presences/presence.schema';
import { Section, SectionDocument } from 'src/sections/section.schema';
import { CreateInscribedInput } from './dto/create-inscribed.input';
import { Inscribed, InscribedDocument } from './inscribed.schema';

@Injectable()
export class InscribedsService {
  constructor(
    @InjectModel(Inscribed.name)
    private readonly inscribed: Model<InscribedDocument>,

    @InjectModel(Section.name)
    private readonly section: Model<SectionDocument>,

    @InjectModel(Presence.name)
    private readonly presence: Model<PresencesDocument>,
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
      const inscribeds = await this.inscribed.find().populate({
        path: 'presencesId',
        populate: {
          path: 'sectionId',
        },
      });

      if (!inscribeds) {
        return 'inscribeds not found';
      }
      return inscribeds;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findOne(cpf: string) {
    const inscribed = await this.inscribed.findOne({ cpf });
    console.log(inscribed);
    return inscribed;
  }

  async update(_id: string, presenceId: unknown) {
    const inscribed = await this.inscribed.findOne({ _id });
    inscribed.presencesId.push(presenceId as Presence);

    return inscribed.save();
  }

  remove(id: number) {
    return `This action removes a #${id} inscribed`;
  }
}
