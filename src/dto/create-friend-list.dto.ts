import { IsNotEmpty } from 'class-validator';

export class CreateFriendListDto {
  @IsNotEmpty()
  requesterId: number;

  @IsNotEmpty()
  addresseId: number;

  @IsNotEmpty()
  friendType: string;
}
