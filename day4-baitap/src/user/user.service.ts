import { Get, Injectable } from '@nestjs/common';
import { createUserDTO } from './dto/create-userdto';

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  password: string;
}

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Tran  Gia Bao',
      age: 21,
      email: 'tbao38170@gmail.com',
      phone: '0375803101',
      password: '123',
    },
  ];
  getUsers() {
    return this.users;
  }

  createUser(body: createUserDTO) {
    const newUser: User = {
      id: Date.now(),
      ...body,
    };
    this.users.push(newUser);

    return this.users;
  }
}
