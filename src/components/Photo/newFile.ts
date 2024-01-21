/* __placeholder__ */
export default (await import('vue')).defineComponent({
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
input.files = null;
}
},

add() {
if (!this.img) {
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
};

fileReader.readAsDataURL(this.img);
this.title = "";
this.img = [];
},
},
});
