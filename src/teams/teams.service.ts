import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TeamsService {
  db: PrismaService
  constructor(db: PrismaService) {
    this.db = db
  }
  async create(createTeamDto: CreateTeamDto) {
    await this.db.team.create({
      data: createTeamDto
    })
    return "Csapat létrehozva"
  }

  findAll() {
    return this.db.team.findMany({
      include: {
        players: true
      }
    })
  }

  findOne(id: number) {
    return this.db.team.findFirst({
      where: {
        id: id
      },
      include: {
        players: true
      }

    })
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    await this.db.team.update(
      {
        where: {
          id: id
        },
        data: updateTeamDto
      }
    )
    return "Csapat frissítve"
  }


  async remove(id: number) {
    await this.db.team.delete({ where: { id } })
    return "Csapat törölve";
  }
}
