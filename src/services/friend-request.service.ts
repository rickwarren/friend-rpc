import { FriendRequestDto, FriendRequestProto, createFriendRequestProto } from '../protos/friend-request.pb.ts';
import { getDataSource } from '../data-source.ts';
import { FriendRequest } from '../entity/friend-request.entity.ts';
import { CreateFriendRequestDto } from '../dto/create-friend-request.dto.ts';
import { UpdateFriendRequestDto } from '../dto/update-friend-request.dto.ts';
import { FriendRequestId } from '../dto/friendRequestId.dto.ts';
import { GetFriendRequestResponseDto } from '../dto/getFriendRequestResponse.dto.ts';
import { GetFriendRequestDto } from '../dto/getFriendRequest.dto.ts';
import { DeleteFriendRequestResponseDto } from '../dto/deleteFriendRequestResponse.dto.ts';
import { FriendRequestResponseDto } from '../dto/friendRequestResponse.dto.ts';
import { FriendList } from '../entity/friend-list.entity.ts';
import { Id } from '../dto/id.dto.ts';

const friendRequestProto: FriendRequestProto = {
    getFriendRequestsByUserId: async (id: Id): Promise<GetFriendRequestResponseDto> => {
        const AppDataSource = await getDataSource();
        const friendRequestRepo = AppDataSource.getRepository(FriendRequest);
        const requests = await friendRequestRepo.manager.find(FriendRequest, {
          where: { addresseId: id.id, status: "pending" },
        });
        if(requests.length < 1) {
          throw Error('Requests not found');
        }
        return { requests: requests };
    },
    getFriendRequestsByRequesterId: async (id: Id): Promise<GetFriendRequestResponseDto> => {
        const AppDataSource = await getDataSource();
        const friendRequestRepo = AppDataSource.getRepository(FriendRequest);
        const requests = await friendRequestRepo.manager.find(FriendRequest, {
            where: { requesterId: id.id, status: 'pending' },
          });

        return { requests: requests };
    },
    getFriendRequest: async (data: GetFriendRequestDto): Promise<FriendRequestDto> => {
        const AppDataSource = await getDataSource();
        const friendRequestRepo = AppDataSource.getRepository(FriendRequest);
        const request = await friendRequestRepo.manager.findOne(FriendRequest, {
          where: { requesterId: data.requesterId, addresseId: data.addresseId, status: "pending" },
        });
        if(!request) {
          throw Error('Request not found');
        }
        return request;
    },
    createFriendRequest: async (data: CreateFriendRequestDto): Promise<FriendRequestDto> => {
        const AppDataSource = await getDataSource();
        const friendRequestRepo = AppDataSource.getRepository(FriendRequest);
        await friendRequestRepo.manager.save(mapToFriendRequestEngity(data));
        const request = await friendRequestRepo.manager.findOne(FriendRequest, { where: { id: data.id } });
        if(!request) {
          throw Error('Request not created');
        }
        return request;
      },
    updateFriendRequest: async (data: UpdateFriendRequestDto): Promise<FriendRequestDto> => {
        const AppDataSource = await getDataSource();
        const friendRequestRepo = AppDataSource.getRepository(FriendRequest);
        await friendRequestRepo.manager.save(mapToFriendRequestEngity(data));
        const request = await friendRequestRepo.manager.findOne(FriendRequest, { where: { id: data.id } });
        if(!request) {
          throw Error('Request not updated');
        }
        return request;
      },
    deleteFriendRequest: async (id: FriendRequestId): Promise<DeleteFriendRequestResponseDto> => {
        const AppDataSource = await getDataSource();
        const friendRequestRepo = AppDataSource.getRepository(FriendRequest);
        const request = await friendRequestRepo.manager.delete(FriendRequest, { Where: { id: id.id }});
        if(!request) {
          throw Error('Request not deleted');
        }
        return { success: true };
    },
    acceptFriendRequest: async (id: FriendRequestId): Promise<FriendRequestResponseDto> => {
        const AppDataSource = await getDataSource();
        const friendRequestRepo = AppDataSource.getRepository(FriendRequest);
        const request = await friendRequestRepo.manager.update(FriendRequest, id, {
          status: 'accepted',
        });
        if (request) {
            const friendListRepo = AppDataSource.getRepository(FriendList);
            const friend = friendListRepo.manager.save(FriendList, { requesterId: request.raw.requesterId, addresseId: request.raw.addresseId, type: 'friend' });
            if (friend) {
              return { success: true };
            } else {
              await friendRequestRepo.manager.update(FriendRequest, id, {
                status: 'pending',
              });
              return { success: false };
            }
          } else {
            return { success: false };
          }
    },
    rejectFriendRequest: async (id: FriendRequestId): Promise<FriendRequestResponseDto> => {
      const AppDataSource = await getDataSource();
      const friendRequestRepo = AppDataSource.getRepository(FriendRequest);
      if (
        await friendRequestRepo.manager.update(FriendRequest, id, {
          status: 'rejected',
        })
      ) {
        return { success: true };
      }
      return { success: false };
    }
};

function mapToFriendRequestEngity(data: any): FriendRequest {
  const friendRequest = new FriendRequest();
  friendRequest.id = data.id ? data.id : null;
  friendRequest.requesterId = data.requesterId;
  friendRequest.addresseId = data.addresseId;
  friendRequest.status = data.status;
  return friendRequest;
}

export const friendRequestProtoHandler = createFriendRequestProto(friendRequestProto);