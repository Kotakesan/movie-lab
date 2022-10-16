<template>
  <div class="image-movie">
    <v-img
      class="mx-auto"
      :src="img"
      :alt="title"
      :max-width="maxWidth"
      contain
    />
    <div v-if="!imageSource" class="no-img">
      <v-icon> mdi-circle-off-outline </v-icon>
    </div>
    <div v-if="!noHover" class="image-movie__title-wrapper" @click="onClick">
      <div
        class="image-movie__title pt-16 text-center font-weight-bold"
        :title="title"
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string
  imageSource: string
  maxWidth: string | number
  noHover: boolean
}
const { title, imageSource, maxWidth, noHover } = defineProps<Props>()
interface Emits {
  (e: 'click'): void
}
const emits = defineEmits<Emits>()

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'
const img = computed<string>(() => imageBaseUrl + imageSource)

const onClick = () => {
  emits('click')
}
</script>

<style lang="scss" scoped>
.image-movie {
  position: relative;
  min-height: 100%;
  .no-img {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 1;
    color: #fff;
  }
}
.image-movie .image-movie__title {
  color: #fff;
  font-size: 150%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.image-movie .image-movie__title-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(18, 18, 18, 0.4);
  transition: all 0.1s ease-in;
  cursor: pointer;
}
.image-movie:hover .image-movie__title-wrapper {
  opacity: 1;
}
</style>
