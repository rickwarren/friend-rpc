import { 
    CharityID,
    CharityOwnerDto,
    CharityOwnerProto, 
    CreateCharityOwnerDto, 
    DeleteCharityOwnerResponseDto, 
    GetCharityOwnersResponseDto, 
    createCharityOwnerProto, 
} from '../protos/charity-owner.pb.ts';
import { getDataSource } from '../data-source.ts';
import { CharityOwner } from '../entity/charity-owner.entity.ts';

const charityOwnerProto: CharityOwnerProto = {
    getCharityOwners: async (id: CharityID): Promise<GetCharityOwnersResponseDto> => {
        const AppDataSource = await getDataSource();
        const charityRepo = AppDataSource.getRepository(CharityOwner);
        const charities = await charityRepo.manager.find(CharityOwner, { where: {charityId: id.id}});
        if (charities.length < 1) {
            throw new Error('No charities found');
        }
        return { charityOwners: charities };
    },
    createCharityOwner: async (data: CreateCharityOwnerDto): Promise<CharityOwnerDto> => {
        const AppDataSource = await getDataSource();
        const charityRepo = AppDataSource.getRepository(CharityOwner);
        return await charityRepo.manager.save(CharityOwner, data);
    },

    deleteCharityOwner: async (id: CharityID): Promise<DeleteCharityOwnerResponseDto> => {
        const AppDataSource = await getDataSource();
        const charityRepo = AppDataSource.getRepository(CharityOwner);
        if (await charityRepo.manager.delete(CharityOwner, id)) {
            return { success: true };
        } else {
            return { success: false };
        }
    }
};
  
  export const charityOwnerProtoHandler = createCharityOwnerProto(charityOwnerProto);