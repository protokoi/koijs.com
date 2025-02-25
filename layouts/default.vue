<script setup lang="ts">
</script>

<template>
  <div class="fixed top-0 left-0 w-screen h-screen justify-center items-center flex flex-col barlow bg-black text-white doto">
    <koi class="absolute flex justify-center items-center w-screen h-screen -z-20 opacity-25 scale-75" />
    <div class="w-full h-full flex flex-col items-start justify-center ">
      <slot />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Doto&display=swap');

.doto {
  font-family: "Doto", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "ROND" 0;
}
</style>
