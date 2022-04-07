import {Request, Response} from "express";
import {createMenuOptions} from "../helpers/createMenuObject";
import {Pet} from "../models/pet";

export const searchPage = (req: Request, res: Response) => {
  let query: string = req.query.q as string;
  const list = Pet.getPetsByName(query);

  if (!query) {
    res.redirect("/");
    return;
  }

  res.render("pages/page", {
    menu: createMenuOptions(""),
    list,
    query,
  });
};
