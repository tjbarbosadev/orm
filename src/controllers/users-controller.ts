import { prisma } from '@/prisma';
import { Request, Response } from 'express';

class UsersController {
  async index(request: Request, response: Response) {
    const users = await prisma.user.findMany();
    return response.json({ data: users });
  }

  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return response.status(201).json({ data: { name, email } });
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.json({ data: user });
  }
}

export { UsersController };
