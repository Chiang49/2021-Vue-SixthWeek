<template>
  <div class="container text-center">
    <h2 class="mb-3">產品列表</h2>
    <ul class="row list-unstyled mb-5">
      <li v-for="productItem in products" :key="productItem.id" class="col-md-6 col-lg-3 mb-3 mb-lg-0">
        <Card :product="productItem" @pushOpenModal="getOpenModal" @pushAddCart="addCart"></Card>
      </li>
    </ul>
  </div>
  <ProductModal ref="productDetail" @pushAddCart="addCart"></ProductModal>
</template>

<script>
import Card from '@/components/Card.vue'
import ProductModal from '@/components/ProductModal.vue'
export default {
  components: {
    Card,
    ProductModal
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    // 取得商品列表
    getProducts (page = 1) {
      const apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http.get(apiUrl).then((res) => {
        // console.log(res)
        if (res.data.success) {
          this.products = res.data.products
        }
        // console.log(this.products)
      }).catch((err) => {
        console.log(err)
      })
    },
    // 開啟 Modal
    getOpenModal () {
      this.$refs.productDetail.openModal()
    },
    // 加到購物車
    addCart (data) {
      const apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(apiUrl, { data: data }).then((res) => {
        // console.log(res)
        if (res.data.success) {
          alert(res.data.message)
          this.$refs.productDetail.closeModal()
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
