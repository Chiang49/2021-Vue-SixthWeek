<template>
    <div class="container text-center">
        <h2>產品介紹頁面</h2>
        {{ product.title }}
    </div>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  created () {
    const id = this.$route.params.id
    const apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
    this.$http.get(apiUrl).then((res) => {
    //   console.log(res)
      if (res.data.success) {
        this.product = res.data.product
      } else {
        alert(res.data.message)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
