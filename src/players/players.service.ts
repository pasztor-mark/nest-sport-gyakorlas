import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlayersService {
  db: PrismaService
  constructor(db: PrismaService) {
    this.db = db
  }
  async create(createPlayerDto: CreatePlayerDto) {
    await this.db.player.create({ 
      data: createPlayerDto
     })
     return "Játékos létrehozva"
  }

  findAll() {
    return this.db.player.findMany({
      include: {
        team: true
      }
    })
  }

  findOne(id: number) {
    return this.db.player.findMany({where: {
      id
    },
  include: {
    team: true
  }})
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    await this.db.player.update({where: {
      id
    }, data: updatePlayerDto})
    return `This action updates a #${id} player`;
  }

  async remove(id: number) {
    await this.db.player.delete({
      where: {
        id
      }
    })
    return `This action removes a #${id} player`;
  }
}
