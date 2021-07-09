<template>
  <div class="products-wrapper">
    <div class="products-title" >
      <h1>Select product category to see all products</h1>
    </div>
    <div class="single-products">
      <div @click="goToBookProducts" class="left-single-product book-products">
          <h1 class="single-product-title">Books</h1>
          <p class="single-product-desc">
          </p>
        </div>
        <div @click="goToStationaryProducts" class="right-single-product stationary-products">
          <h1 class="single-product-title">Stationary</h1>
          <p class="single-product-desc">
          </p>
        </div>
        <div @click="goToOfficeSuppliesProducts" class="left-single-product officeSupplies-products">
          <h1 class="single-product-title">Office supplies</h1>
          <p class="single-product-desc">
          </p>
        </div>
        <div @click="goToClassBookProducts" class="right-single-product classbook-products">
          <h1 class="single-product-title">Classbooks</h1>
          <p class="single-product-desc">
          </p>
        </div>
        <div @click="goToRanchesProducts" class="left-single-product ranches-products">
          <h1 class="single-product-title">Ranches</h1>
          <p class="single-product-desc">
          </p>
        </div>
         <div @click="goToGiftsProducts" class="right-single-product gifts-products">
          <h1 class="single-product-title">Gifts</h1>
          <p class="single-product-desc">
          </p>
        </div>
        <div @click="goToBoardGamesProducts" class="left-single-product boardGames-products">
          <h1 class="single-product-title">Board games</h1>
          <p class="single-product-desc">
          </p>
        </div>
         <div @click="goToArtProducts" class="right-single-product art-products">
          <h1 class="single-product-title">Art</h1>
          <p class="single-product-desc">
          </p>
        </div>
    </div>
  </div>
</template>

<script>

export default {

   methods: {
      goToBookProducts() {
        this.$router.push('/products/book-products');
      },
      goToStationaryProducts() {
        this.$router.push('/products/stationary-products');
      },
      goToOfficeSuppliesProducts() {
        this.$router.push('/products/officeSupplies-products');
      },
      goToClassBookProducts() {
        this.$router.push('/products/classbook-products');
      },
      goToRanchesProducts() {
        this.$router.push('/products/ranches-products');
      },
      goToGiftsProducts() {
        this.$router.push('/products/gifts-products');
      },
      goToBoardGamesProducts() {
        this.$router.push('/products/boardGames-products');
      },
      goToArtProducts() {
        this.$router.push('/products/art-products');
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
.products-wrapper {
    width: 100%;
    height: 91.5vh;
    background: rgb(243, 233, 206);
    display: flex;
    flex-direction: column;
  }
.products-title {
    font-family: 'Copperplate', fantasy;
    font-size: 35px;
    align-self: center;
    padding-top: 40px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    color: rgb(223, 156, 130);
  }
.single-products {
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
.left-single-product {
    align-self: flex-start;
    width: 25%;
    height: 50%;
    border: 3px solid rgb(184, 170, 91);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
  }
.right-single-product {
    width: 25%;
    height: 50%;
    border: 3px solid rgb(184, 170, 91);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
  }
.single-product-title {
    font-family: 'Copperplate', fantasy;
    color: white;
    text-shadow: 2px 2px black;
  }
.single-product-desc {
    font-family: 'Indie Flower', cursive;
    text-align: center;
    width: 80%;
    font-size: 20px;
    color: white;
    text-shadow: 2px 2px black;
  }
.book-products {
    background-image: url("https://picsum.photos/300/450/?image=635");
    background-repeat: no-repeat;
    background-size: cover;
  }
.stationary-products{
    background-image: url("https://picsum.photos/300/450/?image=885");
    background-repeat: no-repeat;
    background-size: cover;
  }
.officeSupplies-products{
    background-image: url("https://picsum.photos/300/450/?image=534");
    background-repeat: no-repeat;
    background-size: cover;
  }
.classbook-products{
    background-image: url("https://picsum.photos/300/450/?image=367");
    background-repeat: no-repeat;
    background-size: cover;
}
.ranches-products{
    background-image: url("https://picsum.photos/300/450/?image=464");
    background-repeat: no-repeat;
    background-size: cover;
}
.gifts-products{
    background-image: url("https://picsum.photos/300/450/?image=998");
    background-repeat: no-repeat;
    background-size: cover;
}
.boardGames-products{
    background-image: url("https://picsum.photos/300/450/?image=175");
    background-repeat: no-repeat;
    background-size: cover;
}
.art-products{
  background-image: url("https://picsum.photos/300/450/?image=454");
    background-repeat: no-repeat;
    background-size: cover;
}
.left-single-product:hover {
    opacity: 100%;
    transition: 0.3s ease;
    cursor: pointer;
  }
.right-single-product:hover {
    opacity: 100%;
    transition: 0.3s ease;
    cursor: pointer;
  }
</style>
