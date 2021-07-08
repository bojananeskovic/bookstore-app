<template>
  <div class="product-wrapper">
    <div class="search-bar-wrapper" style="margin-left: 500px">
      <input
        class="search-bar"
        v-model="filterText"
        placeholder="Search for Classbooks..."
        type="text">
        <button @click="onAddIcon" type="button" class="btn btn-warning">
          Add new Classbook
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-square"
            viewBox="0 0 16 16"
          >
            <path
              d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
            />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </button>
    </div>
    <div class="all-products">
      <div
        v-for="product in filteredClassbooks"
        :key="product.id"
         class="single-product-card">
        <h1 class="product-name">{{ product.name }}</h1>
        <br />
        <img :src="product.src" style="border-radius:20px;" />
        <h4 @click="showInfo(product)" class="product-show-price"> Price: {{ product.price }}</h4>
        <h4 @click="showInfo(product)" class="product-show-price">Description</h4>
        <div class="action-buttons">
          <b-button type="submit" variant="success" style="background-color:rgb(180, 108, 80); border-color:rgb(180, 108, 80); width: 120px">Edit
          <svg
            @click="onUpdateIcon(product)"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          </b-button>
          <b-button type="submit" variant="success" style="background-color:rgb(180, 108, 80); border-color:rgb(180, 108, 80);  width: 120px">Delete
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
          </b-button>
        </div>
      </div>
    </div>
    <app-delete-classbook-product-dialog
      :showDeleteModal="showDeleteModal"
      :itemForDelete="itemForDelete"
      @deleteDialogClosed="showDeleteModal=$event"
      v-model="showDeleteModal">
    </app-delete-classbook-product-dialog>
    <app-info-classbook-product-dialog
      :showInfoModal="showInfoModal"
      :itemForInfo="itemForInfo"
      @infoDialogClosed="showInfoModal=$event"
      v-model="showInfoModal">
    </app-info-classbook-product-dialog>
    <app-update-classbook-product-dialog
      :showUpdateModal="showUpdateModal"
      :itemForUpdate="itemForUpdate"
      :copyOfItemForUpdate="copyOfItemForUpdate"
      @originalProduct="itemForUpdate=$event"
      @updateDialogClosed="showUpdateModal=$event"
      v-model="showUpdateModal">
    </app-update-classbook-product-dialog>
    <app-add-classbook-product-dialog
      :showAddModal="showAddModal"
      @addDialogClosed="showAddModal=$event"
      v-model="showAddModal">
    </app-add-classbook-product-dialog>
  </div>
</template>

<script>
import DeleteClassbookProductDialog from '../dialogs/classbookProducts-dialogs/DeleteClassbookProductDialog.vue';
import UpdateClassbookProductDialog from '../dialogs/classbookProducts-dialogs/UpdateClassbookProductDialog.vue';
import AddClassbookProductDialog from '../dialogs/classbookProducts-dialogs/AddClassbookProductDialog.vue';
import InfoClassbookProductDialog from '../dialogs/classbookProducts-dialogs/InfoClassbookProductDialog.vue';
import { mapState } from "vuex";
import { userMixin } from "../../mixins/userMixin";
import { productMixin } from "../../mixins/productMixin";
export default {
   components: {
    'app-delete-classbook-product-dialog': DeleteClassbookProductDialog,
    'app-update-classbook-product-dialog': UpdateClassbookProductDialog,
    'app-add-classbook-product-dialog': AddClassbookProductDialog,
    'app-info-classbook-product-dialog': InfoClassbookProductDialog
  },
  mixins: [
    userMixin,
    productMixin
  ],
  // data() {
  //   return {
  //     filterText: "",
  //     itemForDelete: {},
  //     itemForInfo: {},
  //     itemForUpdate: {},
  //     showDeleteModal: false,
  //     showInfoModal: false,
  //     showUpdateModal: false,
  //     showAddModal: false,
  //     copyOfItemForUpdate: {}
  //   }
  // },
  // methods:{

  //   onDeleteIcon(product) {
  //     this.itemForDelete = product;
  //     this.showDeleteModal = true;
  //   },
  //   onUpdateIcon(product) {
  //     this.itemForUpdate = product;
  //     this.showUpdateModal = true;
  //     this.copyOfItemForUpdate = Object.assign({}, product);
  //   },
  //   onAddIcon() {
  //     this.showAddModal = true;
  //   },
  //   showInfo(product) {
  //     this.itemForInfo = product;
  //     this.showInfoModal = true;
  //   }
  // },
  computed: {
    ...mapState(["classbooksCollection"]),
      filteredClassbooks() {
      return this.classbooksCollection.filter((item) => {
        let name = item.name.toLowerCase();
        return name.match(this.filterText);
      })
      },
  },
   mounted() {
    this.$store.dispatch("getClassbookCollection");
  },
}
</script>


<style scoped>
   @import '../../assets/products.css';
</style>
