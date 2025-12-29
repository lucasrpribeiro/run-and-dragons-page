export enum CampaignStatus {
  PAUSED = 'paused',
  ON_GOING = 'on-going',
  FINISHED = 'finished',
}

export interface TCampaing {
  id: number
  title: string
  description: string
  players: number
  status: CampaignStatus
  image?: string
}