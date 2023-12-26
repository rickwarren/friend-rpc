import { 
    UserCorporationProto, 
    createUserCorporationProto, 
    GetUserCorporationsResponseDto,  
    UsrID,
    UserCorporationDto,
    CreateUserCorporationDto,
    DeleteUserCorporationResponseDto,
    UserCorporationId,
} from '../protos/user-corporation.pb.ts';
import { getDataSource } from '../data-source.ts';
import { UserCorporation } from 'src/entity/user-Corporation.entity.ts';

const userCorporationProto: UserCorporationProto = {
    getUserCorporations: async (userId: UsrID): Promise<GetUserCorporationsResponseDto> => {
        const AppDataSource = await getDataSource();
        const CorporationRepo = AppDataSource.getRepository(UserCorporation);
        const Corporations = await CorporationRepo.manager.find(UserCorporation);
        if (Corporations.length < 1) {
            throw new Error('No Corporations found');
        }
        return { userCorporations: Corporations };
    },
    createUserCorporation: async (data: CreateUserCorporationDto): Promise<UserCorporationDto> => {
        const AppDataSource = await getDataSource();
        const CorporationRepo = AppDataSource.getRepository(UserCorporation);
        return await CorporationRepo.manager.save(UserCorporation, data);
    },

    deleteUserCorporation: async (id: UserCorporationId): Promise<DeleteUserCorporationResponseDto> => {
        const AppDataSource = await getDataSource();
        const CorporationRepo = AppDataSource.getRepository(UserCorporation);
        if (await CorporationRepo.manager.delete(UserCorporation, id)) {
            return { success: true };
        } else {
            return { success: false };
        }
    }
};
  
  export const userCorporationProtoHandler = createUserCorporationProto(userCorporationProto);