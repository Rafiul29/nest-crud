import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { users, usersDocument } from '../Schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(users.name) private usersModel: Model<usersDocument>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<users> {
    return new this.usersModel(createUserDto).save();
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}