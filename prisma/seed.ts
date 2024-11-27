import { PrismaClient } from '@prisma/client'
import { CreatePlayerDto } from '../src/players/dto/create-player.dto';
import { CreateTeamDto } from '../src/teams/dto/create-team.dto';
const prisma = new PrismaClient()
async function main() { // Create teams (AI generált adatok, dokumentációból szedett program)
const teamsData: CreateTeamDto[] = [
  { country: 'Germany' },
  { country: 'Brazil' },
  { country: 'Argentina' },
];


const playersData: CreatePlayerDto[] = [
  { name: 'Manuel Neuer', goalCount: 0, birthDate: new Date('1986-03-27'), teamId: 1 },
  { name: 'Robert Lewandowski', goalCount: 75, birthDate: new Date('1988-08-21'), teamId: 1 },
  { name: 'Neymar Jr.', goalCount: 64, birthDate: new Date('1992-02-05'), teamId: 2 },
  { name: 'Lionel Messi', goalCount: 79, birthDate: new Date('1987-06-24'), teamId: 3 },
];

for (const team of teamsData) {
  await prisma.team.create({
    data: team,
  });
}


for (const player of playersData) {
  await prisma.player.create({
    data: player,
  });
}
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })