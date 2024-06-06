import {  FastifyReply,  FastifyRequest } from "fastify";
import { PrismaUsersRepository } from "../../repositores/prisma-user-repository";
import { getParamsRequestSchema } from "../validations/get-user-request";
import { GetUserUseCase } from "../../use-cases/get-user-use-case";


export async  function userGetController(request: FastifyRequest, reply: FastifyReply) {
  const {id} = getParamsRequestSchema.parse( request.params)
  try {
    
    const usersRepository = new PrismaUsersRepository()
    const getUserUseCase = new GetUserUseCase( usersRepository)

    const user = await getUserUseCase.execute(id)

    return reply.status(200).send({user})

  } catch (error) {
    console.log(error)
    throw  error
  }
  
}