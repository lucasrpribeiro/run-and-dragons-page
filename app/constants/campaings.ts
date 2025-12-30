import type { TCampaing } from '~/types'
import { CampaignStatus } from '~/types'
import sombrasImage from '~/assets/images/thumb/sombras-do-passado.png'

export const campaings: TCampaing[] = [
  {
    id: 1,
    title: 'Sombras do Passado',
    slug: 'sombras-do-passado',
    description: '150 anos após a derrota do Culto dos Dragões e seus exercitos, e o Banimento de Tiamat, os jogos da Arena de Neverwinter finalmente retornaram, mas durante os jogos, um grupo de aventureiros descobrem que talvez o culto não fora totalmente derrotado.',
    players: 4,
    status: CampaignStatus.ON_GOING,
    image: sombrasImage,
  },
]