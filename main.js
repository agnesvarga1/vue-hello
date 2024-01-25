const { createApp } = Vue;
createApp({
  data() {
    return {
      message: "Hello World!",
      img: "https://picsum.photos/200/300",
    };
  },
}).mount("#app");
