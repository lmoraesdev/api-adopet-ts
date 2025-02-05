import express, { Response } from 'express';
import router from './routes';

const app = express();
app.use(express.json());
router(app);

app.get('/', (_, res: Response) => {
  res.send('Bem vindo ao curso de TypeScript!');
});

function criaPet(
  id: Number,
  nome: String,
  especie: String,
  idade: Number,
  adotado: Boolean
) {
  return {
    id,
    nome,
    especie,
    idade,
    adotado,
  };
}


export default app;
