import * as yup from 'yup';
import { TipoRequestBodyPet } from '../../types/tipoPets';
import { NextFunction, Request, Response } from 'express';
import { pt } from 'yup-locale-pt';
import EnumEspecie from '../../enum/EnumEspecie';
import EnumPorte from '../../enum/EnumPorte';
import { trataErroValidacaoYup } from '../../util/trataValidacaoYup';

yup.setLocale(pt);

const esquemaBodyPet: yup.ObjectSchema<Omit<TipoRequestBodyPet, 'adotante'>> =
  yup.object({
    nome: yup.string().defined().required(),
    especie: yup
      .string()
      .oneOf(Object.values(EnumEspecie))
      .defined()
      .required(),
    porte: yup.string().oneOf(Object.values(EnumPorte)).defined().required(),
    dataNascimento: yup.date().defined().required(),
    adotado: yup.boolean().defined().required(),
  });

const middlewareValidadorBodyPet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  trataErroValidacaoYup(esquemaBodyPet, req, res, next);
};

export { middlewareValidadorBodyPet };
