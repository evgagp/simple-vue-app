<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <v-app class="bg-blue-darken-4 h-100">
    <Navbar />
    <v-container fluid>
      <RouterView />
    </v-container>
  </v-app>
</template>
