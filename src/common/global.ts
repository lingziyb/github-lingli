interface IGlobal {
    user?: Models.IUser,
}

const global: IGlobal = {
    user: undefined
}

export const userWatchers: Function[] = [];

export function changeUser(user: Models.IUser) {
    // global.user = user;
    for (const watcher of userWatchers) {
        watcher(user)
    }
}

export default global;
