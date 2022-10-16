<template>
  <div>
    <p class="label-title mr-4 ml-8" v-text="title" />
    <v-divider class="my-2" />
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string
}

const { title } = defineProps<Props>()
</script>

<style lang="scss" scoped>
.label-title {
  font-size: 24px;
  font-weight: 600;
}
</style>
