import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { UserService } from './user.service';
import { CustomValidationPipe } from '../../common/pipe/validation.pipe';
import { addUserSchema } from './user.validation';

@Controller()
export class UserController {
  constructor(public readonly userService: UserService) {}

  @Get('/sayHazem')
  async sayHello(@Req() req: Request, @Res() res: Response) {
    let user = await this.userService.sayHello();
    res.json({
      data: user,
      message: 'here is the message',
      status: 200,
    });
  }

  @Post('/addUser')
  async addUser(@Body(new CustomValidationPipe(addUserSchema.body)) data ,@Res() res:Response) {
    let user = await this.userService.addUser(data)
    res.json({
      data: user,
      message: 'user added succ',
      status: 201,
    });
  }
}
