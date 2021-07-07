export const productMixin = {
  data() {
    return {
      filterText: '',
      itemForDelete: {},
      itemForInfo: {},
      itemForUpdate: {},
      showDeleteModal: false,
      showInfoModal: false,
      showUpdateModal: false,
      showAddModal: false,
      copyOfItemForUpdate: {}
    };
  },
  methods: {
    onDeleteIcon(product) {
      this.itemForDelete = product;
      this.showDeleteModal = true;
    },
    onUpdateIcon(product) {
      this.itemForUpdate = product;
      this.showUpdateModal = true;
      this.copyOfItemForUpdate = Object.assign({}, product);
    },
    onAddIcon() {
      this.showAddModal = true;
    },
    showInfo(product) {
      this.itemForInfo = product;
      this.showInfoModal = true;
    },
    loggedUser(product) {
      let userId = this.userProfile.id;
      return userId===product.userId ? true : false;
    }
  }
}
