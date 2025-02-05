import { Router } from 'express';
import petRouter from '../routes/PetRouter';

const router = (app: Router) => {
  app.use('/pets', petRouter);
};

export default router;
