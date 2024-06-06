import { Role, User } from "@prisma/client";
import { UsersRepository } from "../repositores/user-repository-contract";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";

interface CreateUserUseCaseRequest {
  name: string
  email: string
  role: Role
  description: string
}

export interface CreateUserUseCaseResponse{
  user: User
}

export class CreateUserUseCase {
    constructor(private userRepository: UsersRepository){}

  async execute( { name,email, role, description } : CreateUserUseCaseRequest) {
     const userWithSameEmail = await this.userRepository.findByEmail(email)

     if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
     }

     const user = await this.userRepository.create({
      name,
      email,
      role,
      description
     })

     return user
  }
}