import * as yup from 'yup';
import { TipoRequestBodyAdotante } from '../../types/tiposAdotante';
import { NextFunction, Request, Response } from 'express';
import { pt } from 'yup-locale-pt';
import { trataErroValidacaoYup } from '../../util/trataValidacaoYup';

yup.setLocale(pt);

const esquemaBodyAdotante: yup.ObjectSchema<
  Omit<TipoRequestBodyAdotante, 'endereco' | 'pets'>
> = yup.object({
  nome: yup.string().defined().required(),
  celular: yup
    .string()
    .defined()
    .required()
    .matches(
      /^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/gm,
      'Celular inválido'
    ),
  senha: yup
    .string()
    .defined()
    .required()
    .min(6)
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
      'Senha inválida'
    ),
  foto: yup.string().optional(),
});

const middlewareValidadorBodyAdotante = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  trataErroValidacaoYup(esquemaBodyAdotante, req, res, next);
};

export { middlewareValidadorBodyAdotante };
