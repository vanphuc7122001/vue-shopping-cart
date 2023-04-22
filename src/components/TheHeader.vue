<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand logo text-danger" href="#">Turn cart</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Link</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="mx-3">
          <button class="btn btn-danger" @click="handelOpenModal">
            <i class="fa fa-shopping-cart"></i>
            <span class="badge badge-light">{{ sumAmountCart }}</span>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <Teleport to="body">
    <AppModal
      :isOpen="isOpenModalCart"
      :title="titleModal"
      :handleCloseModal="handleCloseModal"
    >
      <CartList
        :cartList="cartList"
        @handle-delete-cart="handleDelete"
        @handle-increment-cartItem="handleIncrement"
        @handle-decrement-cartItem="handleDecrement"
      />
    </AppModal>
  </Teleport>
</template>

<script>
import CartList from "./CartList.vue";
export default {
  props: {
    cartList: {
      type: Array,
    },
  },
  components: {
    CartList,
  },
  data() {
    return {
      isOpenModalCart: false,
      titleModal: "Cart",
    };
  },
  computed: {
    sumAmountCart(){
      return this.cartList.reduce( (sum, cart) => sum += cart.amount, 0);
    }
  },
  methods: {
    handelOpenModal() {
      this.isOpenModalCart = true;
    },
    handleCloseModal() {
      this.isOpenModalCart = false;
    },
    handleDelete(cartItem) {
      this.$emit("handle-delete-cart", cartItem);
    },
    handleIncrement(cartItem) {
      this.$emit("handle-increment-cart", cartItem);
    },
    handleDecrement(cartItem){
      this.$emit("handle-decrement-cart", cartItem);
    }
  },
};
</script>

<style scoped></style>
