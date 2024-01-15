import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { FriendList } from './entity/friend-list.entity.ts';
import { FriendRequest } from './entity/friend-request.entity.ts';
import { Charity } from './entity/charity.entity.ts';
import { Corporation } from './entity/corporation.entity.ts';
import { UserCharity } from './entity/user-charity.entity.ts';
import { UserCorporation } from './entity/user-corporation.entity.ts';


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'root',
  password: 'root',
  database: 'friend',
  synchronize: true,
  logging: true,
  entities: [FriendList, FriendRequest, Charity, Corporation, UserCharity, UserCorporation],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
  })
  .catch((error) => console.log(error));

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject("Failed to create connection with database");
    }, delay);
  });
};