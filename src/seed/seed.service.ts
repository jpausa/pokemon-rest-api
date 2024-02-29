import { Injectable } from '@nestjs/common';
import { IPokemonApiResponse } from './interfaces/pokemon-data.interface';
import { PokemonService } from '../pokemon/pokemon.service';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SeedService {
  private readonly apiUrl: string = this.configService.get('apiUrl');

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly axiosAdapter: AxiosAdapter,
    private readonly configService: ConfigService,
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
