import { 
    CorporationProto, 
    createCorporationProto, 
    EmptyId, 
    GetCorporationsResponseDto,  
    CorporationId,
    CorporationDto,
    CreateCorporationDto,
    UpdateCorporationDto,
    DeleteCorporationResponseDto,
    CorporationNameDto,
} from '../protos/Corporation.pb.ts';
import { getDataSource } from '../data-source.ts';
import { Corporation } from '../entity/corporation.entity.ts';

const corporationProto: CorporationProto = {
    getCorporations: async (EmptyId): Promise<GetCorporationsResponseDto> => {
        const AppDataSource = await getDataSource();
        const corporationRepo = AppDataSource.getRepository(Corporation);
        const corporations = await corporationRepo.manager.find(Corporation);
        if (corporations.length < 1) {
            throw new Error('No corporations found');
        }
        return { corporations: corporations };
    },
    getCorporation: async (
        corporationId: CorporationId,
    ): Promise<CorporationDto> => {
        const AppDataSource = await getDataSource();
        const corporationRepo = AppDataSource.getRepository(Corporation);
        const corporation = await corporationRepo.manager.findOne(
            Corporation, 
            {where: { id: corporationId.id }},
        );
        if (!corporation) {
            throw new Error('No corporation found');
        }
        return corporation;
    },
    getCorporationByName: async (
        name: CorporationNameDto,
    ): Promise<CorporationDto> => {
        const AppDataSource = await getDataSource();
        const corporationRepo = AppDataSource.getRepository(Corporation);
        const corporation = await corporationRepo.manager.findOne(
            Corporation, 
            { where: { name: name.name }},
        );
        if (!corporation) {
            throw new Error('No corporation found');
        }
        return corporation;
    },
    createCorporation: async (
        data: CreateCorporationDto,
    ): Promise<CorporationDto> => {
        const AppDataSource = await getDataSource();
        const corporationRepo = AppDataSource.getRepository(Corporation);
        return await corporationRepo.manager.save(Corporation, data);
    },

    updateCorporation: async (
        data: UpdateCorporationDto,
    ): Promise<CorporationDto> => {
        const AppDataSource = await getDataSource();
        const corporationRepo = AppDataSource.getRepository(Corporation);
        const corporation = await corporationRepo.manager.update(
            Corporation,
            data,
            { id: data.id },
        );
        if (!corporation) {
            throw new Error('no Corporation found');
        }
        return corporation.raw;
    },
    deleteCorporation: async (
        id: CorporationId,
    ): Promise<DeleteCorporationResponseDto> => {
            const AppDataSource = await getDataSource();
            const corporationRepo = AppDataSource.getRepository(Corporation);
            if (await corporationRepo.manager.delete(Corporation, id)) {
                return { success: true };
            } else {
                return { success: false };
            }
    },
};

  
export const corporationProtoHandler = createCorporationProto(corporationProto);