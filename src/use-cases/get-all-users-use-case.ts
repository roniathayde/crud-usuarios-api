import {  User } from "@prisma/client";
import { UsersRepository } from "../repositores/user-repository-contract";



export interface GetAllUsersUseCaseResponse{
  user: User
}

export class GetAllUsersUseCase {
  constructor(private userRepository: UsersRepository){}

  async execute() {
     
     const user = await this.userRepository.getAllUsers()

     return user
  }
}