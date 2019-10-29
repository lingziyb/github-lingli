import { useState } from "react";

const globalUser: Models.IUser = {
  avatar_url: "",
  login: ""
};
export const userQueue: Function[] = [];

export function useUserStore() {
  const [user, setUser] = useState<Models.IUser>(globalUser);
  userQueue.push(setUser);
  return user;
}

export function changeUser(user: any) {
  userQueue.forEach(setUser => {
    setUser(user);
  });
}
