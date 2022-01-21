import { Request, Response } from "express";

import { prismaClient } from "../database/PrismaClient";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, bar_code, price } = request.body;

    const product = await prismaClient.product.create({
      data: {
        name: name,
        bar_code: bar_code,
        price: price,
      },
    });

    return response.json(product);
  }
}
