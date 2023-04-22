<template>
  <div class="card text-left">
    <img class="card-img-top" :src="productItem.image" :alt="productItem.id" />
    <div class="card-body">
      <h4 class="card-title">{{ productItem.name }}</h4>
      <p class="card-text">{{ productItem.price }} VNĐ</p>
    </div>
    <div class="m-2">
      <button class="btn btn-info" @click="handleOpenModal">Chi tiết</button>
      <button class="btn btn-danger mx-2" @click="handleAddCart(productItem)">
        Thêm
      </button>
    </div>
  </div>

  <Teleport to="body">
    <app-modal :isOpen="isOpenModalDetail" :title="title" :handleCloseModal="handleCloseModal"> 
      <ProductDetail :productItem="productItem"/>
    </app-modal>
  </Teleport>
</template>

<script>
import ProductDetail from './ProductDetail.vue';
export default {
  components:{
    ProductDetail
  },
  data() {
    return {
      isOpenModalDetail: false,
      title: "Chi tiết sản phẩm"
    };
  },
  props: {
    productItem: {
      type: Object,
    },
  },
  methods: {
    handleAddCart(productItem) {
      this.$emit("handle-add-cart", productItem);
    },
    handleOpenModal(){
      this.isOpenModalDetail = true;
    },
    handleCloseModal() {
      this.isOpenModalDetail = false;
    },
  },
};
</script>

<style>
</style>