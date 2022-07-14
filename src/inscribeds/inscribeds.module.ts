import { Module } from '@nestjs/common';
import { InscribedsService } from './inscribeds.service';
import { InscribedsResolver } from './inscribeds.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Inscribed, InscribedSchema } from './inscribed.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Inscribed.name, schema: InscribedSchema },
    ]),
  ],
  providers: [InscribedsResolver, InscribedsService],
})
export class InscribedsModule {}
