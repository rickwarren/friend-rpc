import { IsNotEmpty } from 'class-validator';

export class CreateFriendRequestDto {
  id?: number;
  
  @IsNotEmpty()
  requesterId: number;

  @IsNotEmpty()
  addresseId: number;

  status: string;
}
