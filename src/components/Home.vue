
<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#fff"
      img-width="1024"
      img-height="200"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-height="200"
        text="Welcome to the Bookstore app"
        img-src="https://picsum.photos/1024/450/?image=1073"
        style="font-family: 'Copperplate', fantasy; color: rgb(223, 156, 130); font-size: 70px; "
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
       text="Welcome to the Bookstore app"
      img-src="https://picsum.photos/1024/450/?image=20"
       style="font-family: 'Copperplate', fantasy; color: rgb(223, 156, 130); font-size: 70px;">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
       text="Welcome to the Bookstore app"
      img-src="https://picsum.photos/1024/450/?image=104"
      style="font-family: 'Copperplate', fantasy; color: rgb(223, 156, 130); font-size: 70px;"></b-carousel-slide>

    </b-carousel>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
.home-wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
.home-title {
    font-family: 'Copperplate', fantasy;
    font-size: 50px;
    align-self: center;
    align-content: center;
    padding-top: 30px;
  }
.homePage{
  background-image: url("../assets/homePage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
