<template>
  <div class="product-wrapper">
    <div clas="all-products">
      <div 
        v-for="product in booksCollection"
        :key="product.id"
         class="single-product-card">
        <h1 class="product-name">{{ product.name }}</h1>
        <br />
        <img :src="product.src" />
        <h4 @click="showInfo(product)" class="product-show-price">Click here to view Product Price</h4>
        <div class="action-buttons">
          <svg
            @click="onDeleteIcon(product)"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16">
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
            />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>
      </div> 
    </div>
    <Modal v-model="showDeleteModal" modalClass="modal-wrapper">
      <h3>Removing Product: {{itemForDelete.name}} </h3>
      <div class="delete-action-buttons">
        <button class="btn btn-primary" @click="confirmDelete(itemForDelete.id)">Confirm</button>
        <button class="btn btn-danger" @click="closeDeleteModal">Cancel</button>
      </div>
    </Modal>
    <Modal v-model="showInfoModal" modalClass="modal-wrapper modal-info">
      <h1>{{itemForInfo.name}}</h1>
      <br>
      <p>{{itemForInfo.price}}</p>
    </Modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      itemForDelete: {},
      itemForInfo: {},
      showDeleteModal: false,
      showInfoModal: false
    }
  },
  methods:{
    onDeleteIcon(product) {
      this.itemForDelete = product;
      this.showDeleteModal = true;
    },
    confirmDelete(id) {
      this.$store.dispatch('deleteBookProduct', id);
      this.closeDeleteModal();
      this.$store.dispatch('getBookCollection');
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
    },
    showInfo(product) {
      this.itemForInfo = product;
      this.showInfoModal = true;
    }
  },
  computed: {
    ...mapState(["booksCollection"]),
  },
   mounted() {
    this.$store.dispatch("getBookCollection");
  },
}
</script>


<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .product-wrapper {
    background: rgb(243, 233, 206);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .all-products {
    padding: 50px 20px;
    padding-top: 100px;
    display: flex;
    /* width: 100%;
    height: 100%; */
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .single-product-card {
    background: rgb(184, 170, 91);
    border: 2px solid black;
    margin: 10px 30px 0 0;
    padding: 20px 20px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 550px;
  }
  .product-name,
  .product-show-price {
    font-family: "Indie Flower", cursive;
  }
  .product-name {
    font-weight: bolder;
  }
  .product-show-price {
    margin-top: 40px;
    font-size: 25px;
  }
  .product-show-price:hover,
  .bi {
    cursor: pointer;
  }
  .bi {
    width: 25px;
    height: 25px;
  }
  .product-img {
    width: 250px;
    height: 250px;
    border: 1px solid black;
  }
  .modal-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
  .action-buttons {
    margin-top: 15px;
  }
  .delete-action-buttons {
    align-self: center;
    text-align: center;
    padding: 20px 0;
  }
  .btn {
    width: 100px;
    height: 50px;
  }
  .modal-info h1 {
  font-family: "Indie Flower", cursive;
  text-align: center;
  }
  .modal-info p {
    font-family: sans-serif;
    text-align: justify;
  }
</style>