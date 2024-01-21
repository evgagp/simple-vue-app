<template>
  <v-form
    class="d-flex flex-column mb-5 py-10 bg-white v-card pa-5 bg-blue-darken-3"
    @submit="add"
  >
    <v-text-field variant="solo-filled" v-model="title" label="Title" />
    <v-file-input
      ref="imgUpload"
      variant="solo-filled"
      prepend-icon="mdi-camera"
      @change="handleFileChange"
      label="Photo file"
      accept="image/*"
      filled
    />
    <v-btn @click="add">Add</v-btn>
  </v-form>
</template>

<script lang="ts">
export default {
  name: "PhotoForm",

  data() {
    return {
      title: "",
      img: null as unknown as File,
    };
  },

  methods: {
    handleFileChange(event: Event) {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];

      if (file) {
        this.img = file;
      }
    },

    add(event: Event) {
      if (event) {
        event.preventDefault();
      }

      if (!this.img || !this.title) {
        return undefined;
      }

      const fileReader = new FileReader();

      fileReader.onload = () => {
        const photo = {
          id: Date.now(),
          title: this.title,
          url: fileReader.result,
        };

        this.$emit("addPhotoToList", photo);
        this.title = "";
      };

      fileReader.readAsDataURL(this.img);
    },
  },
};
</script>
