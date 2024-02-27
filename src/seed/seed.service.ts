import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { IPokemonApiResponse } from './interfaces/pokemon-data.interface';
import { PokemonService } from '../pokemon/pokemon.service';

@Injectable()
export class SeedService {
  private readonly apiUrl: string = process.env.API_URL;
  private readonly axiosClient: AxiosInstance = axios;

  constructor(private readonly pokemonService: PokemonService) {}
  async executeLoadSeed() {
    const { data } = await this.axiosClient.get<IPokemonApiResponse>(
      this.apiUrl,
    );

    const newPokemonsData = data.results.map(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      return { name, no };
    });

    await this.pokemonService.batchCreate(newPokemonsData);

    return 'Seed executed successfully';
  }
}
