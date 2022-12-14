import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SectionsService } from './sections.service';
import { Section } from './entities/section.entity';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';

@Resolver(() => Section)
export class SectionsResolver {
  constructor(private readonly sectionsService: SectionsService) {}

  @Mutation(() => Section)
  createSection(
    @Args('createSectionInput') createSectionInput: CreateSectionInput,
  ) {
    return this.sectionsService.create(createSectionInput);
  }

  @Query(() => [Section], { name: 'sections' })
  findAll() {
    return this.sectionsService.findAll();
  }

  @Query(() => Section, { name: 'section' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sectionsService.findOne(id);
  }

  @Mutation(() => Section)
  updateSection(
    @Args('updateSectionInput') updateSectionInput: UpdateSectionInput,
  ) {
    return this.sectionsService.update(
      updateSectionInput.id,
      updateSectionInput,
    );
  }

  @Mutation(() => Section)
  removeSection(@Args('id', { type: () => Int }) id: number) {
    return this.sectionsService.remove(id);
  }
}
