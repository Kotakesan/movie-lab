<template>
  <v-app theme="dark">
    <!-- <HeaderDefault @click:sidebar="sidebar = !sidebar" /> -->
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <!-- <SidebarDefault v-model="sidebar" /> -->
    <v-footer absolute app>
      <span>{{ new Date().getFullYear() }} Kotaro Takenaka</span>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
const sidebar = false
</script>
