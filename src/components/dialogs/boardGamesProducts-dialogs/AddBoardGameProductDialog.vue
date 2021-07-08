<template>
   <Modal v-model="showAddModal" modalClass="modal-wrapper">
      <h2 class="add__modal-title">Add new Board Game</h2>
      <div class="modal-content">
        <h3 class="modal-content-name">Board Game name:</h3>
        <input
        class="modal__product__name-input"
        type="text"
        :maxlength="625"
        placeholder="Enter Board Game Name"
        v-model="productAdded.name">
        <h3 class="modal-content-name">Board Game Image</h3>
         <img class="image-preview"
        :src="productAdded.src">
         <button @click="onPickFile()" class="upload-image-btn btn btn-light">
        Upload Image
      </button>
        <input type="file"
        ref="fileInput"
        class="add__modal-image-btn"
        style="display:none"
        accept="image/*"
        @change="onFilePicked">
        <h3 class="modal-content-name">Board Game description:</h3>
        <textarea placeholder="Enter Board Game Description"
        class="modal__product__price-textarea"
        name="desc"
        id="desc"
        :maxlength="200"
        v-model="productAdded.desc"/>
        <h3 class="modal-content-name">Board Game price:</h3>
        <textarea placeholder="Enter Board Game Price"
        class="modal__product__price-textarea"
        name="price"
        id="price"
        :maxlength="200"
        v-model="productAdded.price"/>
      </div>
      <div class="delete-action-buttons">
        <button class="btn btn-primary" @click="confirmAdd(productAdded)">Confirm</button>
        <button class="btn btn-danger" @click="closeAddModal">Cancel</button>
      </div>
    </Modal>
</template>

<script>
export default {
  data() {
    return {
      previewImage: null,
      productAdded: {
        name: "",
        src: "",
        desc:"",
        price: "",
      },
    };
  },
  props: {
    showAddModal: Boolean,
  },
  methods: {
    onFilePicked(event) {
      const files = event.target.files;
      let fileName = files[0].name;
      if (fileName.lastIndexOf(".") <= 0) {
        alert("Please provide image");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.productAdded.src = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.previewImage = files[0];
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    async confirmAdd() {
      if(!this.previewImage) {
        alert('No image was selected!');
        return
      }
      const boardGamesProduct = {
        name: this.productAdded.name,
        src: this.previewImage,
        price: this.productAdded.price,
        desc: this.productAdded.desc
      }
      await this.$store.dispatch('createBoardGamesProduct', boardGamesProduct);
      this.$store.dispatch('getBoardGamesCollection');
      this.closeAddModal();
    },
    closeAddModal() {
      this.showAddModal = false;
      this.$emit('addDialogClosed', this.showAddModal);
    },
  },
};
</script>

<style scoped>
  @import '../../../assets/dialogs.css';
</style>
