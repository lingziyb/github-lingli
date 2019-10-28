import { useState } from "react";
import global, { userWatchers } from "../global";

export function useUser() {
    const [user, setUser] = useState<Models.IUser | undefined>(global.user);
    userWatchers.push(setUser);
    return user
}