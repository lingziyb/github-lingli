import { useState } from "react";

const globaData: IGlobalData = {};
export const userQueue: Function[] = [];

export function useUser() {
  const [state, setter] = useState<Models.IUser | undefined>(globaData.user);
  if (queueMap.user) {
    queueMap.user.push(setter);
  } else {
    queueMap.user = [setter];
  }
  return state;
}

export function useFoo() {
  const [state, setter] = useState<string | undefined>(globaData.foo);
  if (queueMap.foo) {
    queueMap.foo.push(setter);
  } else {
    queueMap.foo = [setter];
  }
  return state;
}

interface IGlobalData {
  user?: Models.IUser;
  foo?: string;
}

const queueMap: {
  [key in keyof IGlobalData]: Function[];
} = {};

export const store = new Proxy(globaData, {
  set(obj: IGlobalData, prop: string, value: Models.IUser) {
    obj[prop] = value;
    queueMap[prop].forEach(setter => {
      setter(value);
    });
    return true;
  }
});

// export function changeUser(user: Models.IUser) {
//   globalUser = user;
//   userQueue.forEach(setUser => {
//     setUser(user);
//   });
// }

// export const globalData = {
//   get user(): Models.IUser | undefined {
//     return globalUser;
//   },
//   set user(user: Models.IUser | undefined) {
//     globalUser = user;
//     userQueue.forEach(setUser => {
//       setUser(user);
//     });
//   }
// };
