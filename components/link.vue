<script setup lang="ts">
const props = defineProps<{
  label: string | undefined
  info?: string
  links: {
    live: string
    npm: string
  }
}>()
const isHover = ref<boolean>(false)
</script>

<template>
  <div
    class="relative flex items-center justify-between"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <div
      :class="{
        'ml-2': isHover,
      }"
      class="select-none w-full animation-all flex flex-row gap-2 items-end duration-500 ease-in-out delay-100"
    >
      <p
        :class="{
          'text-red-400': isHover,
        }" class="whitespace-nowrap animation-all duration-500 ease-in-out delay-100"
      >
        {{ props.label }}
      </p>
      <p class="text-xs mb-[2px] w-full">
        {{ props.info }}
      </p>
    </div>

    <div class="flex justify-end gap-4">
      <a
        :href="props.links.npm"
        target="_blank"
        class="flex items-center gap-2"
      >
        <Icon class="text-4xl opacity-70" name="i-mdi:npm" />
      </a>

      <a
        :href="props.links.live"
        target="_blank"
        class="flex items-center gap-2"
      >
        <Icon class="text-lg opacity-70" name="pixelarticons:external-link" />
      </a>
    </div>
  </div>
</template>
