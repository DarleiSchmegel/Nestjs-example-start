import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePresenceInput } from './dto/create-presence.input';
import { UpdatePresenceInput } from './dto/update-presence.input';
import { Presence, PresencesDocument } from './presence.schema';
import { InscribedsService } from '../inscribeds/inscribeds.service';
import { Section, SectionDocument } from 'src/sections/section.schema';
import { Inscribed, InscribedDocument } from 'src/inscribeds/inscribed.schema';

@Injectable()
export class PresencesService {
  constructor(
    @InjectModel(Presence.name)
    private readonly presence: Model<PresencesDocument>,

    @InjectModel(Section.name)
    private readonly section: Model<SectionDocument>,

    @InjectModel(Inscribed.name)
    private readonly inscribed: Model<InscribedDocument>,
  ) {}
  async create(createPresenceInput: CreatePresenceInput) {
    try {
      const presence = new this.presence(createPresenceInput);
      await presence.populate('sectionId');

      const inscribed = await this.inscribed.findById(
        createPresenceInput.inscribedId,
      );
      if (!inscribed) return 'inscrito não encontrado';

      const newPresence = await presence.save();
      inscribed.presencesId.push(newPresence._id);

      const updateInscribed = await inscribed.save();
      console.log('novo', updateInscribed);

      return newPresence;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findAll() {
    try {
      const presences = await this.presence
        .find()
        .populate(['inscribedId', 'sectionId']);

      if (!presences) {
        return 'presences not found';
      }
      // console.log(presences);
      const inscribeService = InscribedsService;

      return presences;
    } catch (error) {
      return new Error(error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} presence`;
  }

  update(id: number, updatePresenceInput: UpdatePresenceInput) {
    return `This action updates a #${id} presence`;
  }

  remove(id: number) {
    return `This action removes a #${id} presence`;
  }
}
