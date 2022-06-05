export interface IUser {
  name: string | undefined
  id: string | undefined
  type: string | undefined
}

export class User implements IUser {
  name: string | undefined
  id: string | undefined
  type: string | undefined

  public constructor(user: IUser | null | undefined) {
    Object.assign(this, user);
  }

  public getProfileImage() : string {
    return "/images/users/" + this.id + "/profile.png";
  }
}