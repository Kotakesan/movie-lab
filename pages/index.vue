<template>
  <div>
    <v-btn class="ma-5" color="primary" @click="increase">{{ count }}</v-btn>
    <Hoge :user="user" @change="changeName" />
    <v-icon> mdi-star </v-icon>
  </div>
</template>

<script setup lang="ts">
const count = ref<number>(0)
const increase = () => count.value++
export type User = {
  firstName: string
  lastName: string
  age: number
}
const user = ref<User>({
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
})

const changeName = (firstName: string) => {
  user.value.firstName = firstName
}
</script>

<style></style>
