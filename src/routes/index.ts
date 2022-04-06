import {Router} from "express";
import * as HomeController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();

// router.get("/", HomeController.mainPage);

router.get("/", HomeController.home);
router.get("/cats", HomeController.cats);
router.get("/dogs", HomeController.dogs);
router.get("/fishes", HomeController.fishes);

router.get("/search", SearchController.searchPage);

export default router;
