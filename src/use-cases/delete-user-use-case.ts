import {  User } from "@prisma/client";
import { UsersRepository } from "../repositores/user-repository-contract";



export interface DeleteUserUseCaseResponse{
  user: User
}

export class DeleteUserUseCase {
  constructor(private userRepository: UsersRepository){}

  async execute( id : string) {
     
     const user = await this.userRepository.delete(id)

     return user
  }
}