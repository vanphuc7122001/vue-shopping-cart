<template>
  <header>
    <the-header
      :cartList="cartList"
      @handle-delete-cart="handleDeleteCart"
      @handle-increment-cart="handleIncrement"
      @handle-decrement-cart="handleDecrement"
    />
  </header>
  <main>
    <product-list
      @handle-add-cart="handleAddCart"
    />
  </main>
</template>

<script>
import ProductList from "./components/ProductList.vue";

import TheHeader from "./components/TheHeader.vue";
export default {
  data() {
    return {
      cartList: [],
    };
  },
  name: "App",
  components: {
    TheHeader,
    ProductList,
  },
  methods: {
    handleAddCart(productItem) {
      const index = this.cartList.findIndex(
        (cartItem) => cartItem.id == productItem.id
      );
      if (index !== -1) {
        this.cartList[index].amount += 1;
      } else {
        const newProduct = {
          ...productItem,
          amount: 1,
        };
        this.cartList = [...this.cartList, newProduct];
      }
    },
    handleDeleteCart(cartItem) {
      this.cartList = this.cartList.filter((cart) => cart.id !== cartItem.id);
    },
    handleIncrement(cartItem) {
      const index = this.cartList.findIndex( cart => cart.id === cartItem.id);
      if(index !== -1){
        if(this.cartList[index].amount < this.cartList[index].quantityInStock){
        this.cartList[index].amount +=1
      }else{
        alert('Không được tăng nửa')
      }
      }
      
    },
    handleDecrement(cartItem) {
      const index = this.cartList.findIndex( cart => cart.id === cartItem.id);
      if(index !== -1){
        if(this.cartList[index].amount > 1){
        this.cartList[index].amount -=1
      }else{
        alert('Không được giảm nửa')
      }
      }
    },
  },
};
</script>

<style>
header {
  background-color: #f1f1f1;
  height: 50px;
  max-width: 100%;
  box-shadow: 0 0 3px #000;
  margin: 0 auto;
}
</style>
