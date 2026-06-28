import { Injectable } from "@nestjs/common";
import { userDTO } from "../dto/user.dto";


@Injectable()
export class UserService{
  constructor(){

  }

  async sayHello(){
    return "hazem is done it succ"
  }

  async addUser(data: userDTO){
  let {name , email , password } = data
  let users = [{}]
  name = "Hazem"
  users.push({name , email , password})
  return users
  }
}