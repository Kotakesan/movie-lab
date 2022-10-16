<template>
  <div>
    <MolLabelTitle class="pt-4" :title="title" />
    <v-row class="mt-4 ml-8">
      <v-col
        v-for="(movie, index) in movies"
        :key="index"
        class="mx-2 mb-4"
        cols="2"
      >
        <AtomImageMovie
          :title="movie.title"
          :image-source="movie.poster_path"
          max-width="100%"
          :no-hover="false"
          @click="emits('click', movie)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '~/pages/movies/index.vue'

type Props = {
  movies: Movie[]
  title: string
}

const { movies, title } = defineProps<Props>()

type Emits = {
  (e: 'click', movie: Movie): void
}
const emits = defineEmits<Emits>()

// const value = computed({
//   get(): Object {
//     return user.firstName + user.lastName
//   },
//   set(movie: Movie) {
//     emits('click', movie)
//   },
// })
// const onClick = (movie: Movie) => {
//   console.log(movie)
//   emits('click', movie)
// }
</script>

<style></style>
