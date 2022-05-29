import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async create(email: string, password: string): Promise<User | null> {
    const hash = await bcrypt.hash(password, 8);

    return this.usersRepository.create({ email, password: hash });
  }

  public async findOne(email: string, password: string): Promise<User | null> {
    const user: User = await this.usersRepository.findOne({
      where: { email },
      select: ['email', 'password'],
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }

    return undefined;
  }
}
