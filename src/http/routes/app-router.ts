import { FastifyInstance } from "fastify";
import { userCreateController } from "../controllers/user-create-controller";
import { userUpdateController } from "../controllers/user-update-controller";
import { userDeleteController } from "../controllers/user-delete-controller";
import { userGetController } from "../controllers/user-get-controller";
import { userGetAllUsersController } from "../controllers/user-get-all-users-controller";


export async function userRouter (app: FastifyInstance) {
  app.post('/user', userCreateController)
  app.put('/user/:id', userUpdateController)
  app.delete('/user/:id', userDeleteController)
  app.get('/user/:id', userGetController)
  app.get('/users', userGetAllUsersController)
}