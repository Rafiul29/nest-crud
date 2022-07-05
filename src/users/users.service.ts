import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { users, usersDocument } from '../Schemas/users.schema';
import { promises } from "dns";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(users.name) private usersModel: Model<usersDocument>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<users> {
    return new this.usersModel(createUserDto).save();
  }

  async findAll(): Promise<users[]> {
    return this.usersModel.find().exec();
  }

  async findOne(id: number): Promise<users[]> {
    return this.usersModel.findOne()
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersModel.updateOne({ id }, { $set: { ...updateUserDto}});
  }

  async remove(id: number) {
    return this.usersModel.deleteOne({ id })
  }
}
