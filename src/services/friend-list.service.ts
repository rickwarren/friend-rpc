import { FriendListDto, FriendListProto, createFriendListProto } from '../protos/friend-list.pb.ts';
import { getDataSource } from '../data-source.ts';
import { GetFriendListsResponseDto } from '../dto/getFriendListsResponse.dto.ts';
import { AreUsersFriendsRequestDto } from '../dto/areUsersFriendsRequest.dto.ts';
import { UserId } from '../dto/userRequest.dto.ts';
import { CreateFriendListDto } from '../dto/create-friend-list.dto.ts';
import { FriendListId } from '../dto/friendListId.dto.ts';
import { DeleteFriendListResponseDto } from '../dto/deleteFriendListResponse.dto.ts';
import { AreUsersFriendsResponseDto } from '../dto/areUsersFriendsResponse.dto.ts';
import { FriendList } from '../entity/friend-list.entity.ts';

const friendListProto: FriendListProto = {
    getFriendsByUserId: async (userId: UserId): Promise<GetFriendListsResponseDto> => {
        const AppDataSource = await getDataSource();
        const friendListRepo = AppDataSource.getRepository(FriendList);
        const requester = await friendListRepo.manager.find(FriendList, { where: { requesterId: userId.id } });
        const addresse = await friendListRepo.manager.find(FriendList, { where: { addresseId: userId.id } });
        const friendList = [];
        if (requester.length > 0) {
        requester.forEach((friend) => {
            friendList.push(friend);
        });
        }
        if (addresse.length > 0) {
        addresse.forEach((friend) => {
            friendList.push(friend);
        });
        }
        return { friends: friendList };
    },
    areUsersFriends: async (data: AreUsersFriendsRequestDto): Promise<AreUsersFriendsResponseDto> => {
        const AppDataSource = await getDataSource();
        const friendListRepo = AppDataSource.getRepository(FriendList);
        const requester = await friendListRepo.manager.find(FriendList, { where: { requesterId: data.id, addresseId: data.userId } });
        const addresse = await friendListRepo.manager.find(FriendList, { where: { requesterId: data.userId, addresseId: data.id } });
        if (requester.length > 0 || addresse.length > 0) {
          return { success: true };
        } else {
          return { success: false };
        }
    },
    addFriend: async (data: CreateFriendListDto): Promise<FriendListDto> => {
        const AppDataSource = await getDataSource();
        const friendListRepo = AppDataSource.getRepository(FriendList);
        return await friendListRepo.manager.save(FriendList, mapToFriendListEntity(data));
    },
    removeFriend: async (id: FriendListId): Promise<DeleteFriendListResponseDto> => {
        const AppDataSource = await getDataSource();
        const friendListRepo = AppDataSource.getRepository(FriendList);
        if (await friendListRepo.manager.delete(FriendList, id)) {
            return { success: true };
        } else {
            return { success: false };
        }
    }
  };

  function mapToFriendListEntity(data: any): FriendListDto {
    const friendList = new FriendList();
    friendList.id = data.id ? data.id : null;
    friendList.requesterId = data.requesterId;
    friendList.addresseId = data.addresseId;
    friendList.friendType = data.friendType;
    return friendList;
  }
  
  export const friendListProtoHandler = createFriendListProto(friendListProto);