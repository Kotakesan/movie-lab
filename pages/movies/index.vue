<template>
  <div>
    <OrgListMovies :title="title" :movies="data" @click="onClick" />
    <div v-if="searchText && !data.length" class="pa-8 movies__not-found">
      No movies found.
    </div>
    <!-- <Paginate :value="page" :length="length" @input="onChangePage" /> -->
  </div>
</template>

<script setup lang="ts">
export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: false
  vote_average: number
  vote_count: number
}
const { data } = await useFetch<Movie[]>('/api/movies/popular')
const searchText = ''
const router = useRouter()

const title = computed<string>(() =>
  searchText ? 'Search Movies' : 'Popular Movies'
)

const onClick = (movie: Movie) => {
  router.push(`movies/${movie.id}`)
}

// const onClick = (movie) => {
//   $router.push(`/movies/${movie.id}`)
// }
// export default {
//   async asyncData({ app, query }) {
//     const searchText = query.query
//     const page = 1

//     const { movies, totalPages } = searchText
//       ? await app.$_api.search.movie.list({ query: searchText, page })
//       : await app.$_api.movies.popular.list()

//     return {
//       searchText,
//       page,
//       movies,
//       totalPages,
//     }
//   },
//   computed: {
//     title() {
//       return this.searchText ? 'Search Movies' : 'Popular Movies'
//     },
//     length() {
//       // NOTE: Page query must be less than or equal to 500
//       return this.totalPages >= 500 ? 500 : this.totalPages
//     },
//   },
//   watch: {
//     async $route({ query }) {
//       this.page = 1
//       this.searchText = query.query
//       this.searchText ? await this.onSearch() : await this.getMovies()
//     },
//   },
//   methods: {
//     onClick(movie) {
//       this.$router.push(`/movies/${movie.id}`)
//     },
//     async onChangePage(page) {
//       this.page = page
//       this.searchText ? await this.onSearch() : await this.getMovies()
//     },
//     async onSearch() {
//       const { movies, totalPages } = await this.$_api.search.movie.list({
//         query: this.searchText,
//         page: this.page,
//       })
//       this.movies = movies
//       this.totalPages = totalPages
//     },
//     async getMovies() {
//       const { movies, totalPages } = await this.$_api.movies.popular.list({
//         page: this.page,
//       })
//       this.movies = movies
//       this.totalPages = totalPages
//     },
//   },
// }
</script>

<style lang="scss" scoped>
.movies__not-found {
  font-size: 18px;
}
</style>
