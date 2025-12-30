<script setup lang="ts">
import { campaings } from '~/constants/campaings'

const campaigns = ref(campaings)
</script>

<template>
  <div class="container mx-auto px-4 pt-24 md:pt-56 pb-12 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <CampaignCard v-for="campaign in campaigns" :key="campaign.id" :campaign="campaign" />
    </div>
  </div>
</template>
