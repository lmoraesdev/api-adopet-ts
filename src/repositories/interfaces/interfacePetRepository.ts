// InterfacePetRepository.ts
import PetEntity from '../../entities/PetEntity';
import EnumPorte from '../../enum/EnumPorte';

export default interface InterfacePetRepository {
  criaPet(pet: PetEntity): void | Promise<void>;
  listaPet(): Array<PetEntity> | Promise<PetEntity[]>;
  atualizaPet(id: number, pet: PetEntity): void;

  deletaPet(id: number): void;

  buscaPetPorCampoGenerico<Tipo extends keyof PetEntity>(
    campo: Tipo,
    valor: PetEntity[Tipo]
  ): Promise<PetEntity[]> | PetEntity[];
}
