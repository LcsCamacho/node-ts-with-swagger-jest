import { create, update, remove, read } from "../../controller/example";
import { Router } from "express";
import { auth } from "../../middleware/auth";

export const routerPrivate = Router();

routerPrivate.get("/home", auth, read);
routerPrivate.get("/home/:id", auth, read);
routerPrivate.post("/home", auth, create);
routerPrivate.put("/home", auth, update);
routerPrivate.delete("/home", auth, remove);
