import { Request, Response } from "express";

export const update = async (req: Request, res: Response) => {
  try {
    res.status(200).send({
      id: req.params.id,
      name: "example",
      email: "lucas.camachofilho@gmail.com",
      gender: "MASCULINO",
      age: 25,
    });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
