import PetEntity from '../entities/PetEntity';
import EnumEspecie from '../enum/EnumEspecie';

type TipoRequestBodyPet = Omit<PetEntity, 'id'>;
type TipoRequestParamsPet = {
  id?: string;
  pet_id?: string;
  adotante_id?: string;
};
type TipoResponseBodyPet = {
  data?:
    | Pick<PetEntity, 'id' | 'nome' | 'especie' | 'porte'>
    | Pick<PetEntity, 'id' | 'nome' | 'especie' | 'porte'>[];
};

export { TipoRequestBodyPet, TipoRequestParamsPet, TipoResponseBodyPet };
