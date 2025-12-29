<script setup lang="ts">
import { campaings } from '~/constants/campaings'
import type { TCampaing } from '~/types'

const campaigns = ref<TCampaing[]>(campaings as TCampaing[])
</script>

<template>
  <div class="min-h-screen relative overflow-hidden">
    <div class="container mx-auto px-4 pt-48 pb-12 relative z-10">


      <section class="flex flex-col items-center justify-center mb-16">
          <h1 class="text-4xl font-bold text-white font-fantasy tracking-wide">
            Run & Dragons
          </h1>
      </section>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CampaignCard v-for="campaign in campaigns" :key="campaign.id" :campaign="campaign" />
      </div>
    </div>
  </div>
</template>

