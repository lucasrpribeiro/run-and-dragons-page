<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="relative bg-gradient-to-br from-white/20 via-transparent to-white/20 text-white p-2 px-4 rounded-full border border-white/20 shadow-2xl shadow-black/50 backdrop-blur-sm">
    <span class="relative z-10">{{ text }}</span>
  </div>
</template>
