import {Request, Response} from "express";

export const home = (req: Request, res: Response) => {
  res.send(`Servidor rodando na porta ${process.env.PORT}`);
  // res.render('pages/homes')
};
export const cats = (req: Request, res: Response) => {
  res.send("Aqui você encontra gatos");
  // res.render('pages/homes')
};
export const dogs = (req: Request, res: Response) => {
  res.send("Aqui você encontra cachorros");
  // res.render('pages/homes')
};
export const fishes = (req: Request, res: Response) => {
  res.send("Aqui você encontra peixes");
  // res.render('pages/homes')
};
