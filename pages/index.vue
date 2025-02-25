<script setup lang="ts">
import { marked } from 'marked'

definePageMeta({
  name: 'home',
})

const readme = ref<string>('Loading...')

async function getReadme() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/protokoi/koijs-table.vue/master/README.md')
    const data = await response.text()
    readme.value = data
  }
  catch (error) {
    readme.value = 'README.md yüklenirken hata oluştu.'
    console.error(error)
  }
}

onMounted(getReadme)
</script>

<template>
  <NuxtLayout>
    <Header />
    <div class="overflow-auto py-12">
      <div v-html="marked(readme)" />
    </div>
  </NuxtLayout>
</template>
