import * as yup from 'yup';
import { NextFunction, Request, Response } from 'express';
import EnderecoEntity from '../../entities/EnderecoEntity';
import { pt } from 'yup-locale-pt';
import { trataErroValidacaoYup } from '../../util/trataValidacaoYup';

yup.setLocale(pt);

const esquemaBodyEndereco: yup.ObjectSchema<Omit<EnderecoEntity, 'id'>> =
  yup.object({
    cidade: yup.string().defined().required(),
    estado: yup.string().defined().required(),
  });

const middlewareValidadorBodyEndereco = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  trataErroValidacaoYup(esquemaBodyEndereco, req, res, next);
};

export { middlewareValidadorBodyEndereco };
