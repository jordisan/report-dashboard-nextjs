export interface ISocialData {
  id: string | undefined
  number_of_comments: number | undefined
  stars: number | undefined
  views: number | undefined
}

export class SocialData implements ISocialData {
  id: string | undefined
  number_of_comments: number | undefined
  stars: number | undefined
  views: number | undefined

  public constructor(data: ISocialData | null | undefined) {
    Object.assign(this, data);
  }
}