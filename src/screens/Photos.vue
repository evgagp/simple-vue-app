<template>
  <v-container>
    <PhotoForm class="mb-5" @addPhotoToList="addPhotoToList" />
    <v-row>
      <Photo
        v-for="photo in photos"
        :key="photo.id"
        :photo="photo"
        @handleRemovePhoto="handleRemovePhoto"
      />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Photo from "@/components/Photo/Photo.vue";
import PhotoForm from "@/components/Photo/PhotoForm.vue";
import { IPhoto } from "@/components/Photo/IPhoto";

export default {
  components: { Photo, PhotoForm },

  data() {
    return {
      photos: [] as IPhoto[],
    };
  },

  mounted() {
    this.fetchTodo();
  },

  methods: {
    fetchTodo() {
      const instance = this as unknown as {
        axios: any;
      };

      instance.axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((response: { data: IPhoto[] }) => {
          this.photos = response.data;
        })
        .catch((error: any) => {
          console.error("Error fetching photos:", error);
        });
    },

    addPhotoToList(photo: IPhoto) {
      this.photos.unshift(photo);
    },

    handleRemovePhoto(id: IPhoto["id"]) {
      this.photos = this.photos.filter((photo) => photo.id !== id);
    },
  },
};
</script>
