<script setup lang="ts">
const campaigns = [
  {
    id: 1,
    title: 'A Jornada dos Heróis Perdidos',
    description: 'Uma aventura épica através de terras esquecidas',
    players: 4,
    status: 'Em andamento'
  },
  {
    id: 2,
    title: 'Reinos em Guerra',
    description: 'Conflitos antigos ressurgem entre as nações',
    players: 5,
    status: 'Em andamento'
  },
  {
    id: 3,
    title: 'O Templo Esquecido',
    description: 'Mistérios ancestrais aguardam os aventureiros',
    players: 3,
    status: 'Concluída'
  },
  {
    id: 4,
    title: 'Sombras do Passado',
    description: 'Segredos sombrios ameaçam o reino',
    players: 6,
    status: 'Em andamento'
  },
  {
    id: 5,
    title: 'A Lenda do Dragão',
    description: 'Uma busca pela criatura lendária',
    players: 4,
    status: 'Pausada'
  },
  {
    id: 6,
    title: 'Guilda dos Aventureiros',
    description: 'Missões e contratos para mercenários',
    players: 5,
    status: 'Em andamento'
  }
]

const getStatusColor = (status: string) => {
  const colors: Record<string, string> = {
    'Em andamento': 'bg-white/10 text-white border-white/20',
    'Concluída': 'bg-white/5 text-white/70 border-white/10',
    'Pausada': 'bg-white/10 text-white border-white/20'
  }
  return colors[status] || 'bg-white/5 text-white/70 border-white/10'
}
</script>

<template>
  <div class="min-h-screen bg-black relative overflow-hidden">
    <div class="absolute inset-0 bg-radial-gradient from-red-950 via-red-950/50 to-black"></div>
    
    <div class="container mx-auto px-4 pt-24 pb-12 relative z-10">
      <header class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-4 font-fantasy tracking-wide">
          Run & Dragons
        </h1>
        <p class="text-white/80 text-lg">
          Suas Campanhas de RPG
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="campaign in campaigns"
          :key="campaign.id"
          class="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 cursor-pointer"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative z-10">
            <div class="flex items-start justify-between mb-4">
              <h2 class="text-2xl font-semibold text-white font-fantasy">
                {{ campaign.title }}
              </h2>
            </div>
            
            <p class="text-white/80 mb-4 leading-relaxed font-body">
              {{ campaign.description }}
            </p>
            
            <div class="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
              <div class="flex items-center gap-2 text-white/70">
                <Icon name="heroicons:users" class="w-5 h-5" />
                <span class="text-sm">{{ campaign.players }} jogadores</span>
              </div>
              
              <span
                :class="['px-3 py-1 rounded-full text-xs font-medium border', getStatusColor(campaign.status)]"
              >
                {{ campaign.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

