/* eslint-disable prettier/prettier */

import { IsDate, IsInt, IsString, MinLength } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @MinLength(3)
  name: string;
  
  @IsInt()
  goalCount: number

  @IsDate()
  birthDate: Date

  teamId: number
}
/* model Player {
    id Int @id @default(autoincrement())
    name  String
    goalCount  String
    birthDate DateTime
    team Team @relation(fields: [teamId], references: [id])
    teamId Int 
  } */
