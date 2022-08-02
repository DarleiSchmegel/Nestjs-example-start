import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InscribedsService } from './inscribeds.service';
import { Inscribed } from './entities/inscribed.entity';
import { CreateInscribedInput } from './dto/create-inscribed.input';
import { UpdateInscribedInput } from './dto/update-inscribed.input';

@Resolver(() => Inscribed)
export class InscribedsResolver {
  constructor(private readonly inscribedsService: InscribedsService) {}

  @Mutation(() => Inscribed)
  createInscribed(
    @Args('createInscribedInput') createInscribedInput: CreateInscribedInput,
  ) {
    return this.inscribedsService.create(createInscribedInput);
  }

  @Query(() => [Inscribed], { name: 'inscribeds' })
  findAll() {
    return this.inscribedsService.findAll();
  }

  @Query(() => Inscribed, { name: 'inscribed' })
  findOne(@Args('cpf', { type: () => String }) cpf: string) {
    return this.inscribedsService.findOne(cpf);
  }

  @Mutation(() => Inscribed)
  updateInscribed(
    @Args('updateInscribedInput') updateInscribedInput: UpdateInscribedInput,
  ) {
    return this.inscribedsService.update(
      updateInscribedInput.cpf,
      updateInscribedInput,
    );
  }

  @Mutation(() => Inscribed)
  removeInscribed(@Args('id', { type: () => Int }) id: number) {
    return this.inscribedsService.remove(id);
  }
}
