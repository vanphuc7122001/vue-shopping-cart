<template>
  <table class="table text-center">
    <thead>
        <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng trong kho</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Hành Động</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(cartItem, index)  in cartList" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ cartItem.name }}</td>
            <td>{{ cartItem.price }}</td>
            <td>{{ cartItem.quantityInStock }}</td>
            <td>
                <button class="btn btn-success" @click="handleIncrement(cartItem)">
                    <i class="fa fa-arrow-up"></i>
                </button>
                <span  class="mx-3">{{ cartItem.amount }}</span>
                <button class="btn btn-success" @click="handleDecrement(cartItem)">
                    <i class="fa fa-arrow-down"></i>
                </button>

            </td>
            <td>
                {{ cartItem.price * cartItem.amount }}
            </td>
            <td>
                <button class="btn btn-danger" @click="handleDelete(cartItem)">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        </tr>
        <tr>
            <td>Tổng tiền</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{{ sumMoney }}</td>
        </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    props : {
    cartList:{
      type: Array
    }
  },
  methods:{
    handleDelete(cartItem){
        this.$emit('handle-delete-cart', cartItem)
    },
    handleIncrement(cartItem){
        this.$emit('handle-increment-cartItem', cartItem)
    },
    handleDecrement(cartItem){
        this.$emit('handle-decrement-cartItem', cartItem)
    }
  },
  computed:{
    sumMoney(){
        return this.cartList.reduce((total, cart) => total + (cart.amount * cart.price),0)
    }
  }
}
</script>

<style>

</style>