<template>
  <v-app theme="dark">
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>Kotaro Takenaka {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
