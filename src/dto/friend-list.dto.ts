import { IsNotEmpty } from 'class-validator';
import * as protoscript from 'protoscript';

export class FriendListDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  requesterId: string;

  @IsNotEmpty()
  addresseId: string;

  @IsNotEmpty()
  friendType: string;

  createdAt: protoscript.Timestamp;
  updatedAt: protoscript.Timestamp;
}
