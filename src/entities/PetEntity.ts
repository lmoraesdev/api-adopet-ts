import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import EnumEspecie from '../enum/EnumEspecie';
import AdotanteEntity from './AdotanteEntity';
import EnumPorte from '../enum/EnumPorte';
import AbrigoEntity from './AbrigoEntity';

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  nome: string;
  @Column()
  especie: EnumEspecie;
  @Column({ nullable: true })
  porte?: EnumPorte;
  @Column()
  dataNascimento: Date;
  @Column()
  adotado: boolean;

  @ManyToOne(() => AdotanteEntity, (adotante) => adotante.pets, {
    nullable: true,
  })
  adotante!: AdotanteEntity;
  @ManyToOne(() => AbrigoEntity, (abrigo) => abrigo.pets, {
    nullable: true,
  })
  abrigo!: AbrigoEntity;

  constructor(
    nome: string,
    especie: EnumEspecie,
    dataNascimento: Date,
    adotado: boolean,
    porte?: EnumPorte
  ) {
    this.nome = nome;
    this.especie = especie;
    this.porte = porte;
    this.dataNascimento = dataNascimento;
    this.adotado = adotado;
  }
}
