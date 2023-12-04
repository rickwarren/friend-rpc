import { IsNotEmpty } from 'class-validator';

export class CreateFriendRequestDto {
  id?: string;
  
  @IsNotEmpty()
  requesterId: string;

  @IsNotEmpty()
  addresseId: string;

  status: string;
}
