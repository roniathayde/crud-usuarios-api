import { Prisma, User} from "@prisma/client";



export interface UsersRepository{
  create( data: Prisma.UserCreateInput ): Promise<User> 
  update( id: string,  data: Prisma.UserUpdateInput ): Promise<User> 
  delete( id: string ): Promise<User> 
  get( id: string ): Promise<User | null> 
  findByEmail( email: string ): Promise<User | null>
  getAllUsers( ): Promise<User[] > 
}