import {  FastifyReply,  FastifyRequest } from "fastify";
import { CreateUserUseCase } from "../../use-cases/create-user-use-case";
import { PrismaUsersRepository } from "../../repositores/prisma-user-repository";
import { createBodyRequestSchema } from "../validations/create-user-request";
import { UserAlreadyExistsError } from "../../use-cases/errors/user-already-exists-error";


export async function userCreateController(request: FastifyRequest, reply: FastifyReply) {
  const requestBody = createBodyRequestSchema.parse(request.body)
  try {
    
    const usersRepository = new PrismaUsersRepository()
    const createUserUseCase = new CreateUserUseCase(usersRepository)

    await createUserUseCase.execute(requestBody)

    return reply.status(201).send()

  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }
   
    throw  error
  }

}