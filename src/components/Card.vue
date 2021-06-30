<template>
  <div class="card">
    <div class="card-frame">
      <div class="con">
        <img :src="product.imageUrl" class="card-img" :alt="product.title">
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-originPrice">原價 NT. {{ product.origin_price }}</p>
      <p class="card-price">特價 NT. {{ product.price }}</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary mb-1" @click="getproductDetail( product.id )">查看完整資訊</button>
      <button type="button" class="btn btn-primary mb-1" @click="getProductMore(`${ product.id }`)">查看多一點</button>
      <button type="button" class="btn btn-primary" @click="pushAddCart(`${ product.id }`, qty)">加入購物車</button>
    </div>
  </div>
</template>

<script>
import emitter from '../mitt'
export default {
  // props接收資料
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      tempDetail: {}
    }
  },
  methods: {
    // 取得商品細節
    getProductMore (id) {
      const apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(apiUrl).then((res) => {
        // console.log(res)
        if (res.data.success) {
          this.tempDetail = res.data.product
          this.pushOpenModal()
          this.pushProductDetail()
        }
        // console.log(this.tempDetail)
      }).catch((err) => {
        console.log(err)
      })
    },
    // 前往商品頁面
    getproductDetail (id) {
      this.$router.push(`/product/${id}`)
    },
    // (emit)開啟 Modal
    pushOpenModal () {
      this.$emit('pushOpenModal')
    },
    // (mitt)傳送資料到productModal
    pushProductDetail () {
      emitter.emit('productDetail', this.tempDetail)
    },
    // (emit) 加到購物車
    pushAddCart (id, qty = 1) {
      const product = {
        product_id: id,
        qty
      }
      this.$emit('pushAddCart', product)
    }
  }
}
</script>

<style lang="scss">
  .card{
    text-align: left;
    &-frame{
      height: 0;
      padding-bottom: 100%;
      overflow: hidden;
      position: relative;
      .con{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
    &-img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &-originPrice{
      text-decoration: line-through;
      margin-bottom: 8px;
    }
    &-price{
      font-size: 1.5rem;
    }
    .btn{
      width: 100%;
    }
  }
</style>
