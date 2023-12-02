import { IsNotEmpty } from 'class-validator';
import * as protoscript from 'protoscript';

export class UpdateFriendListDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  requesterId: number;

  @IsNotEmpty()
  addresseId: number;

  @IsNotEmpty()
  friendtype: string;

  createdAt: protoscript.Timestamp;
  updatedAt: protoscript.Timestamp;
}
