import {  FastifyReply,  FastifyRequest } from "fastify";
import { PrismaUsersRepository } from "../../repositores/prisma-user-repository";
import { updateBodyRequestSchema, updateParamsRequestSchema } from "../validations/update-user-request";
import { UpdateUserUseCase } from "../../use-cases/update-users-use-case";


export async function userUpdateController(request: FastifyRequest, reply: FastifyReply) {
  const {id} = updateParamsRequestSchema.parse( request.params)
  const requestBody = updateBodyRequestSchema.parse(request.body)
  try {
    
    const usersRepository = new PrismaUsersRepository()
    const updateUserUseCase = new UpdateUserUseCase( usersRepository)

    await updateUserUseCase.execute(id , requestBody)

    return reply.status(201).send()

  } catch (error) {
    console.log(error)
    throw  error
  }
  
}