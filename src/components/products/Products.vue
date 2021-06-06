<template>
  <div class="products-wrapper">
    <div class="products-title">
      <h1>Select Product Category to see all products</h1>
    </div>
    <div class="single-products">
      <div class="left-single-product book-product">
          <h1 class="single-product-title">Book Products</h1>
          <p class="single-product-desc">
          </p>
        </div>
        <div class="right-single-product stationary-product">
          <h1 class="single-product-title">Stationary Products</h1>
          <p class="single-product-desc">
          </p>
        </div>
        <div class="left-single-product officeSupplies-product">
          <h1 class="single-product-title">Office supplies Products</h1>
          <p class="single-product-desc">.
          </p>
        </div>
        <div class="right-single-product classbook-product">
          <h1 class="single-product-title">Classbook Products</h1>
          <p class="single-product-desc">
          </p>
        </div>
        <!-- <div class="left-single-product ranches-product">
          <h1 class="single-product-title">Ranches Products</h1>
          <p class="single-product-desc">
          </p>
        </div>
         <div class="right-single-product gifts-product">
          <h1 class="single-product-title">Gifts Products</h1>
          <p class="single-product-desc">
          </p>
        </div>
        <div class="left-single-product boardGames-product">
          <h1 class="single-product-title">Board games Products</h1>
          <p class="single-product-desc">
          </p>
        </div>
         <div class="right-single-product art-product">
          <h1 class="single-product-title">Art Products</h1>
          <p class="single-product-desc">
          </p>
        </div> -->
    </div>
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
  .products-wrapper {
    width: 100%;
    height: 91.5vh;
    background: rgb(243, 233, 206);
    display: flex;
    flex-direction: column;
  } 
  .products-title {
    font-family: 'Indie Flower', cursive;
    font-size: 35px;
    font-weight: bold;
    align-self: center;
    padding-top: 40px;
    padding-bottom: 10px;
    margin-bottom: 15px;
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
    width: 50%;
    height: 50%;
    border: 3px solid rgb(252, 215, 146);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
  }
  .right-single-product {
    align-self: flex-end;
    width: 50%;
    height: 50%;
    border: 3px solid rgb(252, 215, 146);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
  }
  .single-product-title {
    font-family: 'Indie Flower', cursive;
    font-weight: bold;
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
</style>