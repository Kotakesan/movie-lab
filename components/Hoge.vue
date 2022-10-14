<template>
  {{ value }}
  <v-btn @click="onChange('hoge')">hoge</v-btn>
  <v-icon>mdi-star</v-icon>
</template>

<script setup lang="ts">
import type { User } from '../pages/index.vue'
interface Props {
  user: User
}
const { user } = defineProps<Props>()

interface Emits {
  (e: 'change', newValue: string): void
}
const emits = defineEmits<Emits>()

const value = computed({
  get(): Object {
    return user.firstName + user.lastName
  },
  set(newValue: string) {
    emits('change', newValue)
  },
})
const fullName = computed(() => user.firstName + user.lastName)
const onChange = (newValue: string) => {
  console.log(newValue)
  emits('change', newValue)
}
</script>
