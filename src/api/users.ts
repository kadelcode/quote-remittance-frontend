import { api } from "./client";

export type User = {
  id: string;
  name: string;
};

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get<User[]>("/users");
  return res.data;
};
