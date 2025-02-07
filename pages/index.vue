<script setup lang="ts">
import Link from '@/components/link.vue'

const packageName = '@koijs/table-vue'
const packageInfo = ref<{ name?: string, version?: string }>()

async function fetchPackageInfo() {
  const response = await fetch(`https://registry.npmjs.org/${packageName}`)
  const data = await response.json()
  packageInfo.value = {
    name: data.name,
    version: data['dist-tags'].latest,
  }
}
onMounted(fetchPackageInfo)

definePageMeta({
  name: 'home',
})
</script>

<template>
  <NuxtLayout>
    <div class="lg:w-96 md:w-10/12 w-full lg:px-0 md:px-0 px-2 flex flex-col h-full justify-start pb-12 items-start relative">
      <Header />

      <div class="flex flex-col gap-4 w-full justify-center h-full">
        <Link
          v-if="packageInfo"
          :label="packageInfo.name"
          :links="{
            live: `https://table.koijs.com/`,
            npm: 'https://www.npmjs.com/package/@koijs/table-vue',
          }"
          :info="packageInfo.version"
        />
        <div v-else>
          {{ "LOADING..." }}
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
