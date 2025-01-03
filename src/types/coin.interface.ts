import { ObjectId } from "mongodb";

export interface ICoin {
  _id: ObjectId;
  coinId: string;
  name: string;
  symbol: string;
  amount: number;
}

export type ICoinSchema = Omit<ICoin, "_id">;

export interface IAddCoinRequest {
  coinId: string;
  amount: number;
}
