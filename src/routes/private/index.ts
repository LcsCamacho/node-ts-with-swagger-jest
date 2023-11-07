import { create, update, remove, read } from "../../controller/example";
import { Router } from "express";
import { auth } from "../../middleware/auth";

export const routerPrivate = Router();

routerPrivate.get("/", auth, read);
routerPrivate.post("/", auth, create);
routerPrivate.put("/", auth, update);
routerPrivate.delete("/", auth, remove);
