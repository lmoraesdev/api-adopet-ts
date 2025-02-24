import { EnumHttpStatusCode } from '../../enum/EnumHttpStatusCode';
import { ManipulaErros } from './../../util/manipulaErros';
import { Request, Response } from 'express';

export const erroMeddleware = (
  erro: ManipulaErros,
  req: Request,
  res: Response
) => {
  const statusCode =
    erro.statusCode ?? EnumHttpStatusCode.INTERNAL_SERVER_ERROR;
  const mensagem = erro.statusCode ? erro.message : 'Erro interno no servidor';
  res.status(statusCode).json({ mensagem });
};
