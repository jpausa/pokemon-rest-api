import { Injectable } from '@nestjs/common';
import { IPokemonApiResponse } from './interfaces/pokemon-data.interface';
import { PokemonService } from '../pokemon/pokemon.service';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  private readonly apiUrl: string = process.env.API_URL;

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly axiosAdapter: AxiosAdapter,
  ) {}
  async executeLoadSeed() {
    const data = await this.axiosAdapter.get<IPokemonApiResponse>(this.apiUrl);

    const newPokemonsData = data.results.map(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      return { name, no };
    });

    await this.pokemonService.batchCreate(newPokemonsData);

    return 'Seed executed successfully';
  }
}
