import { EnumHttpStatusCode } from '../../enum/EnumHttpStatusCode';
import { ManipulaErros } from './../../util/manipulaErros';
import { NextFunction, Request, Response } from 'express';

export const erroMiddleware = (
  erro: ManipulaErros,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode =
    erro.statusCode ?? EnumHttpStatusCode.INTERNAL_SERVER_ERROR;
  const mensagem = erro.statusCode ? erro.message : 'Erro interno no servidor';
  res.status(statusCode).json({ mensagem });
  return next();
};
