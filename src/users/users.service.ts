import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      name: 'Jon Doe',
      phone: '123432345',
    },
    {
      id: 2,
      name: 'Jone Doe',
      phone: '432534',
    },
  ];

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    const creandoUser = {
      ...user,
      id: this.users.length + 1,
    };
    this.users.push(creandoUser);
    return creandoUser;
  }
}
