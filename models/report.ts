import { ISocialData, SocialData } from "./socialdata";
import { IUser, User } from "./user";

/**
 * Interface for redux state
 */
export interface IReport {
  last_touch: Date | undefined
  created_at: Date | undefined
  updated_at: Date | undefined
  name: string | undefined
  description: string | undefined
  main: string | undefined
  tags: string[] | undefined
  title: string | undefined
  id: string | undefined
  owner: IUser | undefined
  starred_time: number | null
  visited_time: number | null
  featured: boolean | null
  socialData: ISocialData | undefined
}

/**
 * Class for application; will be created from interface by the redux selector
 */
export class Report implements IReport {
  last_touch: Date | undefined
  created_at: Date | undefined
  updated_at: Date | undefined
  name: string | undefined
  description: string | undefined
  main: string | undefined
  tags: string[] | undefined
  title: string | undefined
  id: string | undefined
  owner: User | undefined
  starred_time: number | null = null
  visited_time: number | null = null
  featured: boolean = false
  socialData: SocialData | undefined

  public constructor(
    report: IReport | null | undefined,
    socialData?: ISocialData | null | undefined
  ) {
    Object.assign(this, report);
    // create instances for objects
    this.owner = new User(report?.owner)
    this.socialData = new SocialData(report?.socialData)
  }

  public getTitle(): string {
    return this.title ? this.title : '' + this?.name;
  }

  public getStarredDate() : Date | null {
    return !this.starred_time ? null : new Date(this.starred_time);
  }

  public getVisitedDate() : Date | null {
    return !this.visited_time ? null : new Date(this.visited_time);
  }

  public getMainImage() : string {    
    return "/images/reports/" + this.id + "/main.png";
  }

  public getMainImageDefault() : string {
    return "/images/reports/default.png";
  }
}
