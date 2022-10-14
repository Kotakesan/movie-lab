<!-- <template>
  <v-dialog
    :value="value"
    width="780px"
    @keydown.esc="$emit('input', false)"
    @click:outside="$emit('input', false)"
  >
    <v-card
      class="pa-8 modal-card"
      :style="{ backgroundImage: `url(${bgImagePath})` }"
      color="white"
    >
      <v-card-text class="text">
        {{ movie.overview }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    value: { type: Boolean, default: false },
    movie: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      imageBaseUrl: 'https://image.tmdb.org/t/p/w780',
    }
  },
  computed: {
    bgImagePath() {
      return this.imageBaseUrl + this.movie.backdrop_path
    },
    isFavored() {
      return this.movies.some(({ id }) => id === this.movie.id)
    },
    ...mapGetters('favorite', ['movies']),
  },
}
</script>

<style lang="scss">
.modal-card {
  background-size: cover;
  .text {
    height: 100%;
    background-image: radial-gradient(
      farthest-side at 20% 70%,
      transparent,
      rgb(18, 18, 18)
    );
  }
}
</style> -->
