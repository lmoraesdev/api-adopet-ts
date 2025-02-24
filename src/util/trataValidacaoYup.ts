import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

const trataErroValidacaoYup = (
  esquema: yup.Schema<unknown>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    esquema.validateSync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errorYup = error as yup.ValidationError;
    const validationErrors: Record<string, string> = {};

    errorYup.inner.forEach((error) => {
      if (!error.path) return;
      validationErrors[error.path] = error.message;
    });
    return res.status(400).json({ error: validationErrors });
  }
};

export { trataErroValidacaoYup };
