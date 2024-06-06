import {  FastifyReply,  FastifyRequest } from "fastify";
import { PrismaUsersRepository } from "../../repositores/prisma-user-repository";
import { deleteParamsRequestSchema } from "../validations/delete-user-request";
import { DeleteUserUseCase } from "../../use-cases/delete-user-use-case";


export async  function userDeleteController(request: FastifyRequest, reply: FastifyReply) {
  const {id} = deleteParamsRequestSchema.parse( request.params)
  try {
    
    const usersRepository = new PrismaUsersRepository()
    const deleteUserUseCase = new DeleteUserUseCase( usersRepository)

    await deleteUserUseCase.execute(id)

    return reply.status(200).send()

  } catch (error) {
    console.log(error)
    throw  error
  }
  
}