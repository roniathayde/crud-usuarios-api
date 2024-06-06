import fastify from "fastify";
import { userRouter } from "./http/routes/app-router";
import { ZodError } from "zod";




export const app = fastify()

app.register(userRouter)

app.setErrorHandler((error,request, reply)=>{
  if  (error instanceof ZodError) {
    return reply.status(400).send({message: 'Validation error.', issues: error.format()})
  }

  return reply.status(500).send({message: 'Internal server error'})
})