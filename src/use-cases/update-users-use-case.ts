import { Role, User } from "@prisma/client";
import { UsersRepository } from "../repositores/user-repository-contract";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";

interface UpdateUserUseCaseRequest {
  name?: string
  email?: string
  role?: Role
  description?: string
}

export interface UpdateUserUseCaseResponse{
  user: User
}

export class UpdateUserUseCase {
  constructor(private userRepository: UsersRepository){}

  async execute( id: string, {  name,email, role, description } : UpdateUserUseCaseRequest) {
     
     const user = await this.userRepository.update( id , {
      name,
      email,
      role,
      description
     })

     return user
  }
}