export interface User {
    email: string,
    username: string,
    hashedPassword: string,
    creator: string[],
    likedArt: string[],
};