<template>
  <div class="home-wrapper homePage">
    <h1 class="home-title">Welcome to the bookstore!</h1>
  </div>
</template>

<script>
export default {
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
    font-family: 'Indie Flower', cursive;
    font-size: 70px;
    font-weight: bold;
    align-self: center;
    padding-top: 230px;
  } 
.homePage{
  background-image: url("../assets/homePage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>