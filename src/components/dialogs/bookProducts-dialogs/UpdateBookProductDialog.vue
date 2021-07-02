<template>
    <Modal v-model="showUpdateModal" modalClass="modal-wrapper">
      <h2 class="add__modal-title">Update Product </h2>
      <div class="modal-content">
        <img :src="itemForUpdate.src" class="preview-image">
        <h3 class="modal-content-name">Book name:</h3>
        <input
        class="modal__product__name-input"
        type="text"
        :maxlength="130"
        v-model.lazy="itemForUpdate.name"/>
        <h3 class="modal-content-price">Book Price:</h3>
        <textarea
         name="price"
         placeholder="Enter Price"
         class="modal__product__price-textarea"
         :maxlength="50"
         v-model.lazy="itemForUpdate.price"/>
      </div>
      <div class="delete-action-buttons">
        <button class="btn btn-primary" @click="confirmUpdate(itemForUpdate)">Confirm</button>
        <button class="btn btn-danger" @click="closeUpdateModal">Cancel</button>
      </div>
    </Modal>
</template>

<script>
  export default {
    props: {
      showUpdateModal: Boolean,
      itemForUpdate: Object,
      copyOfItemForUpdate: Object
    },
    methods: {
      closeUpdateModal() {
        Object.assign(this.itemForUpdate, this.copyOfItemForUpdate);
        this.showUpdateModal = false;
        this.$emit('updateDialogClosed', this.showUpdateModal);
        this.$emit('originalProduct', this.itemForUpdate);
      },
      async confirmUpdate() {
        await this.$store.dispatch("updateBookProduct", this.itemForUpdate);
        this.closeUpdateModal();
        this.$store.dispatch("getBookCollection");
      },
    }
  };
</script>

<style scoped>
  @import '../../../assets/dialogs.css';
</style>