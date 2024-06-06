import {  FastifyReply,  FastifyRequest } from "fastify";
import { PrismaUsersRepository } from "../../repositores/prisma-user-repository";
import { GetAllUsersUseCase } from "../../use-cases/get-all-users-use-case";


export async  function userGetAllUsersController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const usersRepository = new PrismaUsersRepository()
    const getAllUsersUseCase = new GetAllUsersUseCase( usersRepository)

    const users = await getAllUsersUseCase.execute()

    return reply.status(200).send({users})

  } catch (error) {
    console.log(error)
    throw  error
  }
  
}