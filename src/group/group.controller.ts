import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { GroupService } from './group.service';
import { CreateGroupDto, UpdateGroupDto } from 'src/dto/group.dto';

@ApiTags('groups')
@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get()
  async findAll(@Query('ownerId', ParseIntPipe) ownerId?: number) {
    return this.groupService.findAll(ownerId);
  }

  @Get('invite/:code')
  async findByInviteCode(@Param('code') code: string) {
    return this.groupService.findByInviteCode(code);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.groupService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGroupDto: UpdateGroupDto,
    @Query('userId', ParseIntPipe) userId: number,
  ) {
    return this.groupService.update(id, updateGroupDto, userId);
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Query('userId', ParseIntPipe) userId: number,
  ) {
    return this.groupService.remove(id, userId);
  }
}
