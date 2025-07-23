import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
) {}
 async createRoles(createRoleDto: CreateRoleDto) {
 try {
 const saveObj = {
 ...createRoleDto,
 created_at: new Date(),
 updated_at: new Date(),
 };
 const saveResponse = await this.roleRepository.save(saveObj);
 if (saveResponse) {
 return {
 status: 'SUCCESS',
 httpStatus: HttpStatus.CREATED,
 message: 'Roles Created Successfully',
 data: saveResponse,
 };
 } else {
 return {
 status: 'FAILURE',
 httpStatus: HttpStatus.CONFLICT,
 message: 'No Roles Created',
 data: [],
};
 }
 } catch (err) {
 return {
 status: 'FAILURE',
 httpStatus: HttpStatus.EXPECTATION_FAILED,
 message: 'EXCEPTION OCCURED',
 data: [],
 };
 }
 }
  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
