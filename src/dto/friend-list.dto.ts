import { IsNotEmpty } from 'class-validator';
import * as protoscript from 'protoscript';

export class FriendListDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  requesterId: number;

  @IsNotEmpty()
  addresseId: number;

  @IsNotEmpty()
  friendType: string;

  createdAt: protoscript.Timestamp;
  updatedAt: protoscript.Timestamp;
}
