<script setup lang="ts">
const clockwiseSpheres = [
  { class: 'w-96 h-96 bg-purple-500 orbit-cw-1', style: {} },
  { class: 'w-80 h-80 bg-purple-600 orbit-cw-2', style: {} },
  { class: 'w-64 h-64 bg-purple-700 orbit-cw-3', style: {} },
  { class: 'w-72 h-72 bg-purple-400 orbit-cw-4', style: {} },
  { class: 'w-56 h-56 bg-purple-500 orbit-cw-5', style: {} },
  { class: 'w-88 h-88 bg-purple-600 orbit-cw-6', style: {} },
  { class: 'w-76 h-76 bg-purple-500 orbit-cw-7', style: {} },
  { class: 'w-60 h-60 bg-purple-700 orbit-cw-8', style: {} },
]

const counterClockwiseSpheres = [
  { class: 'w-88 h-88 bg-purple-800 orbit-ccw-1', style: {} },
  { class: 'w-60 h-60 bg-purple-600 orbit-ccw-2', style: {} },
  { class: 'w-96 h-96 bg-purple-700 orbit-ccw-3', style: {} },
  { class: 'w-52 h-52 bg-purple-900 orbit-ccw-4', style: {} },
  { class: 'w-76 h-76 bg-purple-500 orbit-ccw-5', style: {} },
  { class: 'w-84 h-84 bg-purple-800 orbit-ccw-6', style: {} },
  { class: 'w-68 h-68 bg-purple-600 orbit-ccw-7', style: {} },
  { class: 'w-72 h-72 bg-purple-700 orbit-ccw-8', style: {} },
]
</script>

<template>
  <div class="animated-background fixed inset-0 bg-black overflow-hidden" style="z-index: -10;">
    <div class="orbit-container">
      <div
        v-for="(sphere, index) in clockwiseSpheres"
        :key="`cw-${index}`"
        :class="sphere.class"
        :style="sphere.style"
        class="sphere absolute rounded-full blur-3xl opacity-30"
      />

      <div
        v-for="(sphere, index) in counterClockwiseSpheres"
        :key="`ccw-${index}`"
        :class="sphere.class"
        :style="sphere.style"
        class="sphere absolute rounded-full blur-3xl opacity-30"
      />
    </div>

    <div class="absolute inset-0 backdrop-blur-3xl bg-black/20 pointer-events-none" style="z-index: 1;" />
  </div>
</template>

<style scoped>
.orbit-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  animation: spin-container 60s linear infinite;
}

.sphere {
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
}

.orbit-cw-1 {
  animation: orbit-cw-1 25s linear infinite, pulse 4s ease-in-out infinite;
}

.orbit-cw-2 {
  animation: orbit-cw-2 30s linear infinite, pulse 4.5s ease-in-out infinite;
}

.orbit-cw-3 {
  animation: orbit-cw-3 35s linear infinite, pulse 3.5s ease-in-out infinite;
}

.orbit-cw-4 {
  animation: orbit-cw-4 28s linear infinite, pulse 5s ease-in-out infinite;
}

.orbit-cw-5 {
  animation: orbit-cw-5 32s linear infinite, pulse 4.2s ease-in-out infinite;
}

.orbit-cw-6 {
  animation: orbit-cw-6 36s linear infinite, pulse 4.3s ease-in-out infinite;
}

.orbit-cw-7 {
  animation: orbit-cw-7 38s linear infinite, pulse 3.7s ease-in-out infinite;
}

.orbit-cw-8 {
  animation: orbit-cw-8 34s linear infinite, pulse 4.6s ease-in-out infinite;
}

.orbit-ccw-1 {
  animation: orbit-ccw-1 27s linear infinite, pulse 3.8s ease-in-out infinite;
}

.orbit-ccw-2 {
  animation: orbit-ccw-2 33s linear infinite, pulse 4.7s ease-in-out infinite;
}

.orbit-ccw-3 {
  animation: orbit-ccw-3 29s linear infinite, pulse 3.2s ease-in-out infinite;
}

.orbit-ccw-4 {
  animation: orbit-ccw-4 31s linear infinite, pulse 4.8s ease-in-out infinite;
}

.orbit-ccw-5 {
  animation: orbit-ccw-5 26s linear infinite, pulse 3.9s ease-in-out infinite;
}

.orbit-ccw-6 {
  animation: orbit-ccw-6 37s linear infinite, pulse 4.1s ease-in-out infinite;
}

.orbit-ccw-7 {
  animation: orbit-ccw-7 39s linear infinite, pulse 3.6s ease-in-out infinite;
}

.orbit-ccw-8 {
  animation: orbit-ccw-8 35s linear infinite, pulse 4.4s ease-in-out infinite;
}

@keyframes spin-container {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
    filter: brightness(1) blur(64px);
  }
  50% {
    opacity: 0.5;
    filter: brightness(1.3) blur(80px);
  }
}

@keyframes orbit-cw-1 {
  from {
    transform: rotate(0deg) translateX(300px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(300px) rotate(-360deg);
  }
}

@keyframes orbit-cw-2 {
  from {
    transform: rotate(0deg) translateX(450px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(450px) rotate(-360deg);
  }
}

@keyframes orbit-cw-3 {
  from {
    transform: rotate(0deg) translateX(200px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(200px) rotate(-360deg);
  }
}

@keyframes orbit-cw-4 {
  from {
    transform: rotate(0deg) translateX(550px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(550px) rotate(-360deg);
  }
}

@keyframes orbit-cw-5 {
  from {
    transform: rotate(0deg) translateX(350px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(350px) rotate(-360deg);
  }
}

@keyframes orbit-cw-6 {
  from {
    transform: rotate(0deg) translateX(700px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(700px) rotate(-360deg);
  }
}

@keyframes orbit-cw-7 {
  from {
    transform: rotate(0deg) translateX(850px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(850px) rotate(-360deg);
  }
}

@keyframes orbit-cw-8 {
  from {
    transform: rotate(0deg) translateX(600px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(600px) rotate(-360deg);
  }
}

@keyframes orbit-ccw-1 {
  from {
    transform: rotate(0deg) translateX(400px) rotate(0deg);
  }
  to {
    transform: rotate(-360deg) translateX(400px) rotate(360deg);
  }
}

@keyframes orbit-ccw-2 {
  from {
    transform: rotate(0deg) translateX(250px) rotate(0deg);
  }
  to {
    transform: rotate(-360deg) translateX(250px) rotate(360deg);
  }
}

@keyframes orbit-ccw-3 {
  from {
    transform: rotate(0deg) translateX(500px) rotate(0deg);
  }
  to {
    transform: rotate(-360deg) translateX(500px) rotate(360deg);
  }
}

@keyframes orbit-ccw-4 {
  from {
    transform: rotate(0deg) translateX(320px) rotate(0deg);
  }
  to {
    transform: rotate(-360deg) translateX(320px) rotate(360deg);
  }
}

@keyframes orbit-ccw-5 {
  from {
    transform: rotate(0deg) translateX(480px) rotate(0deg);
  }
  to {
    transform: rotate(-360deg) translateX(480px) rotate(360deg);
  }
}

@keyframes orbit-ccw-6 {
  from {
    transform: rotate(0deg) translateX(750px) rotate(0deg);
  }
  to {
    transform: rotate(-360deg) translateX(750px) rotate(360deg);
  }
}

@keyframes orbit-ccw-7 {
  from {
    transform: rotate(0deg) translateX(900px) rotate(0deg);
  }
  to {
    transform: rotate(-360deg) translateX(900px) rotate(360deg);
  }
}

@keyframes orbit-ccw-8 {
  from {
    transform: rotate(0deg) translateX(650px) rotate(0deg);
  }
  to {
    transform: rotate(-360deg) translateX(650px) rotate(360deg);
  }
}
</style>
