import {Request, Response} from "express";
import {createMenuOptions} from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
  // res.send("pages/home");
  res.render("pages/page", {
    menu: createMenuOptions("all"),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
  });
};
export const cats = (req: Request, res: Response) => {
  // res.send("pages/cats");
  res.render("pages/page", {
    menu: createMenuOptions("cat"),
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
  });
};
export const dogs = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuOptions("dog"),
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
  });
  // res.render('pages/homes')
};
export const fishes = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuOptions("fish"),
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
  });
  // res.render('pages/homes')
};
