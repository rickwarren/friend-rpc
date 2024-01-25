import { 
    CorporationID,
    CorporationOwnerDto,
    CorporationOwnerProto, 
    CreateCorporationOwnerDto, 
    DeleteCorporationOwnerResponseDto, 
    GetCorporationOwnersResponseDto, 
    createCorporationOwnerProto, 
} from '../protos/corporation-owner.pb.ts';
import { getDataSource } from '../data-source.ts';
import { UserCorporation } from '../entity/user-corporation.entity.ts';
import { CorporationOwner } from '../entity/corporation-owner.entity.ts';

const corporationOwnerProto: CorporationOwnerProto = {
    getCorporationOwners: async (id: CorporationID): Promise<GetCorporationOwnersResponseDto> => {
        const AppDataSource = await getDataSource();
        const CorporationRepo = AppDataSource.getRepository(CorporationOwner);
        const Corporations = await CorporationRepo.manager.find(CorporationOwner, {where: { corporationId: id.id}});
        if (Corporations.length < 1) {
            throw new Error('No Corporations found');
        }
        return { corporationOwners: Corporations };
    },
    createCorporationOwner: async (data: CreateCorporationOwnerDto): Promise<CorporationOwnerDto> => {
        const AppDataSource = await getDataSource();
        const CorporationRepo = AppDataSource.getRepository(CorporationOwner);
        return await CorporationRepo.manager.save(CorporationOwner, data);
    },

    deleteCorporationOwner: async (id: CorporationID): Promise<DeleteCorporationOwnerResponseDto> => {
        const AppDataSource = await getDataSource();
        const CorporationRepo = AppDataSource.getRepository(CorporationOwner);
        if (await CorporationRepo.manager.delete(CorporationOwner, id)) {
            return { success: true };
        } else {
            return { success: false };
        }
    }
};
  
  export const corporationOwnerProtoHandler = createCorporationOwnerProto(corporationOwnerProto);