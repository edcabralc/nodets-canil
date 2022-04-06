import {Router, Request, Response} from "express";

const mainRouter = Router();

mainRouter.get("/home", (req: Request, res: Response) => {
  res.send(`Servidor rodando na porta ${process.env.PORT}`);
});

export default mainRouter;
