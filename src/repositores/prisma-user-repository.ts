import { $Enums, Prisma, User } from "@prisma/client";
import { UsersRepository } from "./user-repository-contract";
import { prisma } from "../lib/prisma";



export class PrismaUsersRepository implements UsersRepository {
  async findByEmail(email: string)  {
    const user = await prisma.user.findFirst({
      where: {
        email,
      }
    })

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async update(id: string, data: User) {
    const user = await prisma.user.update({
      where: {
        id
      },
      data,
    })

    return user
  }

  async delete(id: string) {
    const user = await prisma.user.delete({
      where: {
        id
      },
    })

    return user
  }

  async get(id: string) {
    const user = await prisma.user.findFirst({
      where: {
        id
      },
     
    })

    return user
  }

  async getAllUsers() {
    const user = await prisma.user.findMany()

    return user
  }

}