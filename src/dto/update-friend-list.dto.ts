import { IsNotEmpty } from 'class-validator';
import * as protoscript from 'protoscript';

export class UpdateFriendListDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  requesterId: string;

  @IsNotEmpty()
  addresseId: string;

  @IsNotEmpty()
  friendtype: string;

  createdAt: string;
  updatedAt: string;
}
