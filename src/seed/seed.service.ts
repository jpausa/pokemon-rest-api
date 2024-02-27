import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { IPokemonApiResponse } from './interfaces/pokemon-data.interface';

@Injectable()
export class SeedService {
  private readonly apiUrl: string = process.env.API_URL;
  private readonly axiosClient: AxiosInstance = axios;
  async executeLoadSeed() {
    console.log(this.apiUrl);

    const { data } = await this.axiosClient.get<IPokemonApiResponse>(
      this.apiUrl,
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      console.log({ name, no });
    });

    return data.results;
  }
}
