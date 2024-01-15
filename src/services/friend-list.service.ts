import { 
    CreateFriendListDto, 
    CreateFriendListResponseDto, 
    DeleteFriendListResponseDto,  
    FriendListProto, 
    GetFriendListsResponseDto, 
    UserId, 
    UserIds, 
    createFriendListProto 
} from '../protos/friend-list.pb.ts';
import { session } from '../neo4j.ts';

const friendListProto: FriendListProto = {
    getFriendsByUserId: async (userId: UserId): Promise<GetFriendListsResponseDto> => {
        try {
            const res = await session.executeRead(tx => tx.run(`
                MATCH (u:User {id: $userId})-[r:IS_FRIENDS_WITH]-(i:User)
                RETURN i`,
                { userId: userId.id }
            ));
            const users = res.records.map(row => row.get('i'))
            const usrs = users.map((user) => {
                return user.properties;
            })
            return { friends: usrs };
        }catch(e) {
            console.log(e);
            return { friends: [] };
        }
    },
    getFriendsOfFriendsByUserId: async (userId: UserId): Promise<GetFriendListsResponseDto> => {
        try {
            const res = await session.executeRead(tx => tx.run(`
                MATCH (a:User {id: $userId})
                MATCH (a)-[:IS_FRIENDS_WITH]-(:User)-[:IS_FRIENDS_WITH]-(u:User)
                WHERE NOT (a)-[:IS_FRIENDS_WITH]-(u)
                RETURN u`,
                { userId: userId.id }
            ));
            const users = res.records.map(row => row.get('u'))
            const usrs = users.map((user) => {
                return user.properties;
            })
            console.log(usrs);
            return { friends: usrs  };
        }catch(e) {
            console.log(e);
            return { friends: [] };
        }
    },
    addFriend: async (data: CreateFriendListDto): Promise<CreateFriendListResponseDto> => {
        try {
            const res = await session.executeWrite(tx => tx.run(`
                CREATE (u:User {id: $requesterId})-[r:IS_FRIENDS_WITH]->(i:User {id: $addresseId})`, 
                { requesterId: data.requesterId, addresseId: data.addresseId }
            ));
            return { success: true };
        } catch(e) {
            console.log(e);
            return { success: false };
        }
    },
    removeFriend: async (ids: UserIds): Promise<DeleteFriendListResponseDto> => {
        try {
            const res = await session.executeWrite(tx => tx.run(`
                MATCH (u:User {id: $userId})-[r:IS_FRIENDS_WITH]-(i:User {id: $user2Id})
                DELETE r`,
                { userId: ids.id, user2Id: ids.id2 }
            ));
            return { success: true };
        } catch(e) {
            console.log(e)
            return { success: false };
        }
    }
  };
  
  export const friendListProtoHandler = createFriendListProto(friendListProto);