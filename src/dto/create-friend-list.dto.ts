import { IsNotEmpty } from 'class-validator';

export class CreateFriendListDto {
  @IsNotEmpty()
  requesterId: string;

  @IsNotEmpty()
  addresseId: string;

  @IsNotEmpty()
  friendType: string;
}
