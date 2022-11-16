import { Request, Response } from "express";

import { Category } from "../../models/Category";

export const createCategorY = async (req: Request, res: Response) => {
  try {
    const { icon, name } = req.body;
    const category = await Category.create({ name, icon });

    res.json(category);
  } catch {
    res.sendStatus(500);
  }
};
