import {Request, Response} from "express";

export const searchPage = (req: Request, res: Response) => {
  res.send("Está procurando algo?");
  // res.render('pages/homes')
};
