import { Request, Response } from "express";
import { randomUUID } from "crypto";
const uuid = randomUUID();
export const create = async (req: Request, res: Response) => {
  const { name, email, gender, age, password } = req.body;

  return res
    .status(201)
    .json({ name, email, gender, age, password, id: uuid });
};
