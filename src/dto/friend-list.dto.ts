import { IsNotEmpty } from 'class-validator';

export class FriendListDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  requesterId: string;

  @IsNotEmpty()
  addresseId: string;

  @IsNotEmpty()
  friendType: string;

  createdAt: string;
  updatedAt: string;
}
