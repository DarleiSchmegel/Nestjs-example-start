import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PresencesService } from './presences.service';
import { Presence } from './entities/presence.entity';
import { CreatePresenceInput } from './dto/create-presence.input';
import { UpdatePresenceInput } from './dto/update-presence.input';

@Resolver('Presence')
export class PresencesResolver {
  constructor(private readonly presencesService: PresencesService) {}

  @Mutation(() => Presence)
  createPresence(
    @Args('createPresenceInput') createPresenceInput: CreatePresenceInput,
  ) {
    return this.presencesService.create(createPresenceInput);
  }

  @Query(() => [Presence], { name: 'presences' })
  findAll() {
    return this.presencesService.findAll();
  }

  @Query(() => Presence, { name: 'presence' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.presencesService.findOne(id);
  }

  @Mutation(() => Presence)
  updatePresence(
    @Args('updatePresenceInput') updatePresenceInput: UpdatePresenceInput,
  ) {
    return this.presencesService.update(
      updatePresenceInput.id,
      updatePresenceInput,
    );
  }

  @Mutation(() => Presence)
  removePresence(@Args('id', { type: () => Int }) id: number) {
    return this.presencesService.remove(id);
  }
}
