import { DataSource } from 'typeorm';
import PetEntity from '../entities/PetEntity';
import EnderecoEntity from '../entities/EnderecoEntity';
import AdotanteEntity from '../entities/AdotanteEntity';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/config/database.sqlite',
  entities: [PetEntity, EnderecoEntity, AdotanteEntity],
  synchronize: true,
});
