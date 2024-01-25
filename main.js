const { createApp } = Vue;
createApp({
  data() {
    return {
      message: "Hello World!",
      img: "https://picsum.photos/200/300",
      likes: 55,
      liked: false,
    };
  },

  methods: {
    addLike: function () {
      this.liked = !this.liked;
      this.likes = this.likes++;
    },
  },
}).mount("#app");
