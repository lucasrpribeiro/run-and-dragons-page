<script setup lang="ts">
import logoImage from '~/assets/images/logo-text.png'

const navItems = [
  { name: 'Início', path: '/' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Campanhas', path: '/campanhas' },
]
</script>

<template>
  <header class="fixed top-3 md:top-6 left-1/2 transform -translate-x-1/2 z-50 container mx-auto px-3 md:px-4 w-full">
    <nav
      class="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl px-4 md:px-8 py-3 md:py-4 shadow-2xl shadow-black/50"
    >
      <div
        class="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-50 pointer-events-none"
      />

      <div class="relative flex items-center justify-between gap-2 md:gap-8 z-10">
        <div class="hidden md:flex items-center gap-2">
          <div class="relative">
            <div class="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
            <div class="absolute inset-0 w-2 h-2 rounded-full bg-white/30 animate-ping" />
          </div>
          <div class="w-1 h-1 rounded-full bg-white/40" />
          <div class="text-white/40 font-fantasy text-xs">
            ✦
          </div>
        </div>

        <div class="hidden md:block h-6 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <div class="flex flex-col items-center justify-center gap-2 md:gap-4 w-full">
          <img :src="logoImage" width="100" height="100" alt="Run & Dragons Logo" class="w-20 md:w-32" draggable="false">

          <ul class="flex items-center gap-2 md:gap-4">
            <li
              v-for="item in navItems"
              :key="item.path"
            >
              <NuxtLink
                :to="item.path"
                class="nav-link-magic rounded-lg font-fantasy text-xs md:text-sm p-2 font-bold text-white/70 hover:text-white"
              >
                <span class="text-nowrap">{{ item.name }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="hidden md:block h-6 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <div class="hidden md:flex items-center gap-2">
          <div class="text-white/40 font-fantasy text-xs">
            ✦
          </div>
          <div class="w-1 h-1 rounded-full bg-white/40" />
          <div class="relative">
            <div class="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
            <div class="absolute inset-0 w-2 h-2 rounded-full bg-white/30 animate-ping" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
