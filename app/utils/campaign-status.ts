import { CampaignStatus } from '~/types'

export function getCampaignStatusText(status: CampaignStatus): string {
  const statusMap: Record<CampaignStatus, string> = {
    [CampaignStatus.PAUSED]: 'Pausada',
    [CampaignStatus.ON_GOING]: 'Em andamento',
    [CampaignStatus.FINISHED]: 'Finalizada',
  }

  return statusMap[status]
}

