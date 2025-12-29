<script setup lang="ts">
import type { TCampaing } from '~/types'
import { getCampaignStatusText } from '~/utils/campaign-status'

const props = defineProps({
  campaign: {
    type: Object as PropType<TCampaing>,
    required: true,
  },
})
</script>

<template>
  <div
    class="group relative w-full max-w-2xl bg-black backdrop-blur-xl border border-white/20 rounded-xl p-10 py-14 hover:bg-white/15 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer overflow-hidden"
  >
    <div
      v-if="campaign.image"
      class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-50 transition-opacity duration-300"
      :style="{ backgroundImage: `url(${campaign.image})` }"
    ></div>
    
    <div class="relative z-10">
      <div class="flex items-start justify-between mb-8">
        <h2 class="text-4xl font-semibold text-white font-fantasy">
          {{ campaign.title }}
        </h2>
      </div>
      
      <p class="text-white/80 mb-12 leading-relaxed font-body text-justify">
        {{ campaign.description }}
      </p>
      
      <div class="flex items-center justify-between py-8 border-t border-white/10">
        <div class="flex items-center gap-2 text-white/70">
          <Icon name="heroicons:users" class="w-5 h-5" />
          <span class="text-sm">{{ campaign.players }} jogadores</span>
        </div>
        
        <div class="flex items-center gap-3">
          <GlassTag text="D&D" />
          <GlassTag :text="getCampaignStatusText(campaign.status)" />
        </div>
      </div>
    </div>
  </div>
</template>
