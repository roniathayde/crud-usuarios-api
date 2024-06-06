import {  User } from "@prisma/client";
import { UsersRepository } from "../repositores/user-repository-contract";



export interface GetUserUseCaseResponse{
  user: User
}

export class GetUserUseCase {
  constructor(private userRepository: UsersRepository){}

  async execute( id : string) {
     
     const user = await this.userRepository.get(id)

     return user
  }
}