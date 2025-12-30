<script setup lang="ts">
import { campaings } from '~/constants/campaings'
import { getCampaignStatusText } from '~/utils/campaign-status'

const campaign = campaings.find(c => c.slug === 'sombras-do-passado')

const dungeonMaster = 'Lucas'
const players = ['Aragorn', 'Gandalf', 'Legolas', 'Gimli']

const narrative = `
150 anos se passaram desde a grande derrota do Culto dos Dragões e seus exércitos sombrios, e desde o banimento de Tiamat para os planos infernais. Neverwinter finalmente se recuperou, e os jogos da Arena, que outrora eram a maior atração da cidade, finalmente retornaram após décadas de reconstrução.

Durante os jogos, um grupo de aventureiros destemidos se destacou nas competições. Mas o que começou como uma simples competição de gladiadores logo se transformou em algo muito mais sinistro. Os heróis começaram a notar símbolos familiares esculpidos nas paredes da arena, símbolos que não deveriam existir mais.

Investigando mais a fundo, o grupo descobriu que talvez o culto não tenha sido totalmente derrotado. Sombras do passado começaram a se manifestar, e os jogadores se viram envolvidos em uma conspiração que ameaça não apenas Neverwinter, mas todo o mundo conhecido.

A jornada apenas começou, e os mistérios se aprofundam a cada sessão. O que parecia ser uma simples aventura de arena se transformou em uma busca pela verdade sobre o que realmente aconteceu naqueles dias sombrios do passado.
`
</script>

<template>
  <div class="container mx-auto px-4 pt-20 md:pt-40 pb-12 relative z-10 max-w-5xl">
    <div
      class="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
    >
      <div
        class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-50 pointer-events-none"
      />

      <div class="relative z-10">
        <div class="relative w-full h-48 md:h-96 overflow-hidden">
          <img
            v-if="campaign?.image"
            :src="campaign.image"
            :alt="campaign?.title"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div class="absolute bottom-0 left-0 right-0 p-3 md:p-6">
            <div
              class="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg md:rounded-xl px-4 md:px-6 py-3 md:py-4 shadow-2xl shadow-black/50"
            >
              <div
                class="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 via-transparent to-white/5 opacity-50 pointer-events-none"
              />

              <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2 text-white/70 text-sm">
                    <Icon name="heroicons:sparkles" class="w-4 h-4" />
                    <span class="font-fantasy">Dungeon Master</span>
                  </div>
                  <div class="text-white font-semibold font-fantasy">
                    {{ dungeonMaster }}
                  </div>
                </div>

                <div
                  class="h-px md:h-8 md:w-px bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/20 to-transparent"
                />

                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2 text-white/70 text-sm">
                    <Icon name="heroicons:users" class="w-4 h-4" />
                    <span class="font-fantasy">Jogadores</span>
                  </div>
                  <div class="flex flex-wrap items-center gap-2">
                    <span v-for="(player, index) in players" :key="index" class="text-white font-semibold font-fantasy">
                      {{ player }}<span v-if="index < players.length - 1" class="text-white/40 mx-1">•</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 md:p-8 lg:p-12">
          <div
            class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-white/10"
          >
            <h1 class="text-2xl md:text-4xl lg:text-5xl font-semibold text-white font-fantasy">
              {{ campaign?.title }}
            </h1>

            <div class="flex items-center gap-2 md:gap-3 flex-wrap">
              <GlassTag text="D&D" />
              <GlassTag :text="campaign ? getCampaignStatusText(campaign.status) : ''" />
            </div>
          </div>

          <p class="text-white/90 leading-relaxed text-justify font-body text-base md:text-lg">
            {{ narrative }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
