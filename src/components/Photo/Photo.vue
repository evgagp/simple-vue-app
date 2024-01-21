<template>
  <v-col class="v-col-12 v-col-sm-6 v-col-md-4 v-col-lg-4 v-col-xl-3">
    <v-card>
      <v-card-title class="font-weight-light">{{ photo.title }}</v-card-title>
      <v-card-text>
        <v-img width="100%" :src="photo.url" />
      </v-card-text>

      <v-btn
        @click="remove(photo.id)"
        class="bg-red-darken-4 w-100 border-0 rounded-0"
        >Remove</v-btn
      >
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { IPhoto } from "./IPhoto";

export default {
  props: {
    photo: {
      type: Object as () => IPhoto,
      required: true,
    },
  },

  methods: {
    remove(id: IPhoto["id"]) {
      this.$emit("handleRemovePhoto", id);
    },
  },
};
</script>
