import { 
    CharityProto, 
    createCharityProto, 
    Empty, 
    GetCharitiesResponseDto,  
    CharityId,
    CharityDto,
    CreateCharityDto,
    UpdateCharityDto,
    DeleteCharityResponseDto,
} from '../protos/charity.pb.ts';
import { getDataSource } from '../data-source.ts';
import { Charity } from 'src/entity/charity.entity.ts';

const charityProto: CharityProto = {
    getCharities: async (Empty): Promise<GetCharitiesResponseDto> => {
        const AppDataSource = await getDataSource();
        const charityRepo = AppDataSource.getRepository(Charity);
        const charities = await charityRepo.manager.find(Charity);
        if (charities.length < 1) {
            throw new Error('No charities found');
        }
        return { charities: charities };
    },
    getCharity: async (charityId: CharityId): Promise<CharityDto> => {
        const AppDataSource = await getDataSource();
        const charityRepo = AppDataSource.getRepository(Charity);
        const charity = await charityRepo.manager.findOne(Charity, {where: { id: charityId.id }});
        if (!charity) {
            throw new Error('No charities found');
        }
        return charity;
    },
    createCharity: async (data: CreateCharityDto): Promise<CharityDto> => {
        const AppDataSource = await getDataSource();
        const charityRepo = AppDataSource.getRepository(Charity);
        return await charityRepo.manager.save(Charity, data);
    },

    updateCharity: async (data: UpdateCharityDto): Promise<CharityDto> => {
        const AppDataSource = await getDataSource();
        const charityRepo = AppDataSource.getRepository(Charity);
        const charity = await charityRepo.manager.update(Charity, data, { id: data.id });
        if(!charity) {
            throw new Error('no charity found');
        }
        return charity.raw;
    },
    deleteCharity: async (id: CharityId): Promise<DeleteCharityResponseDto> => {
        const AppDataSource = await getDataSource();
        const charityRepo = AppDataSource.getRepository(Charity);
        if (await charityRepo.manager.delete(Charity, id)) {
            return { success: true };
        } else {
            return { success: false };
        }
    }
  };
  
  export const charityProtoHandler = createCharityProto(charityProto);