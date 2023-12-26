import { 
    UserCharityProto, 
    createUserCharityProto, 
    GetUserCharitiesResponseDto,  
    UserID,
    UserCharityDto,
    CreateUserCharityDto,
    DeleteUserCharityResponseDto,
    UserCharityId,
} from '../protos/user-charity.pb.ts';
import { getDataSource } from '../data-source.ts';
import { UserCharity } from 'src/entity/user-charity.entity.ts';

const userCharityProto: UserCharityProto = {
    getUserCharities: async (userId: UserID): Promise<GetUserCharitiesResponseDto> => {
        const AppDataSource = await getDataSource();
        const charityRepo = AppDataSource.getRepository(UserCharity);
        const charities = await charityRepo.manager.find(UserCharity);
        if (charities.length < 1) {
            throw new Error('No charities found');
        }
        return { userCharities: charities };
    },
    createUserCharity: async (data: CreateUserCharityDto): Promise<UserCharityDto> => {
        const AppDataSource = await getDataSource();
        const charityRepo = AppDataSource.getRepository(UserCharity);
        return await charityRepo.manager.save(UserCharity, data);
    },

    deleteUserCharity: async (id: UserCharityId): Promise<DeleteUserCharityResponseDto> => {
        const AppDataSource = await getDataSource();
        const charityRepo = AppDataSource.getRepository(UserCharity);
        if (await charityRepo.manager.delete(UserCharity, id)) {
            return { success: true };
        } else {
            return { success: false };
        }
    }
};
  
  export const userCharityProtoHandler = createUserCharityProto(userCharityProto);