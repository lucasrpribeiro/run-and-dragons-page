<script setup lang="ts">
const route = useRoute()

const navItems = [
  { name: 'Início', path: '/' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Campanhas', path: '/campanhas' }
]

const isActive = (path: string) => {
  return route.path === path
}
</script>

<template>
  <header class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 container mx-auto px-4">
    <nav class="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 shadow-2xl shadow-black/50">
      <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-50 pointer-events-none"></div>
      
      <div class="relative flex items-center justify-between gap-8 z-10">
        <div class="flex items-center gap-2">
          <div class="relative">
            <div class="w-2 h-2 rounded-full bg-white/60 animate-pulse"></div>
            <div class="absolute inset-0 w-2 h-2 rounded-full bg-white/30 animate-ping"></div>
          </div>
          <div class="w-1 h-1 rounded-full bg-white/40"></div>
          <div class="text-white/40 font-fantasy text-xs">✦</div>
        </div>
        
        <div class="h-6 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        
        <ul class="flex items-center gap-4">
          <li v-for="item in navItems" :key="item.path" :class="[
            'rounded-lg font-fantasy text-sm transition-all duration-300 group w-full shadow-lg p-2 hover:bg-purple-500/10 font-bold',
            isActive(item.path)
              ? 'text-purple-500'
              : 'text-white/70 hover:text-white'
          ]">
            <NuxtLink
              :to="item.path"

            >
              
              <span class="flex items-center gap-2">
                <span v-if="isActive(item.path)" class="text-purple-500/60 text-xs">◆</span>
                {{ item.name }}
                <span v-if="isActive(item.path)" class="text-purple-500/60 text-xs">◆</span>
              </span>
            </NuxtLink>
          </li>
        </ul>
        
        <div class="h-6 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        
        <div class="flex items-center gap-2">
          <div class="text-white/40 font-fantasy text-xs">✦</div>
          <div class="w-1 h-1 rounded-full bg-white/40"></div>
          <div class="relative">
            <div class="w-2 h-2 rounded-full bg-white/60 animate-pulse"></div>
            <div class="absolute inset-0 w-2 h-2 rounded-full bg-white/30 animate-ping"></div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

