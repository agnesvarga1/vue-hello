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
    toggleLike: function (param) {
      param = this.liked;
      if (!param) {
        this.likes++;
        this.liked = !this.liked;
      } else {
        this.likes--;
        this.liked = !this.liked;
      }
      return this.likes;
    },
  },
}).mount("#app");
