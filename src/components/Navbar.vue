<template>
  <v-app-bar :elevation="2" class=" position-relative px-3 bg-blue-darken-3">
    <v-spacer />
    <RouterLink to="/" class="mx-2">
      <v-btn class="bg-blue-darken-4"> Main </v-btn>
    </RouterLink>
    <RouterLink to="/photos" class="mx-2">
      <v-btn outlined class="bg-blue-darken-4"> Photos </v-btn>
    </RouterLink>
    <v-spacer />
  </v-app-bar>
</template>
