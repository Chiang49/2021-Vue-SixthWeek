<template>
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ productDetail.title }}</span>
          </h5>
          <button type="button" class="btn-close"
                data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img class="img-fluid" :src="productDetail.imageUrl" :alt="productDetail.title">
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill">{{ productDetail.category }}</span>
              <p>商品描述：{{ productDetail.description }}</p>
              <del class="h6">原價 {{ productDetail.origin_price }} 元</del>
              <div class="h5">現在只要 {{ productDetail.price }} 元</div>
              <div>
                <div class="input-group">
                  <input type="number" class="form-control"
                        v-model.number="qty"
                        min="1">
                  <button type="button" class="btn btn-primary" @click="pushAddCart(`${productDetail.id}`,`${qty}`)">加入購物車</button>
                </div>
              </div>
            </div>
            <!-- col-sm-6 end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../mitt'
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      productDetail: {},
      modal: '',
      qty: 1
    }
  },
  methods: {
    // 開啟 Modal
    openModal () {
      this.modal.show()
    },
    // 關閉 Modal
    closeModal () {
      this.modal.hide()
      this.qty = 1
    },
    // (emit) 加到購物車
    pushAddCart (id, qty = 1) {
      const product = {
        product_id: id,
        qty: parseInt(qty)
      }
      this.$emit('pushAddCart', product)
    }
  },
  created () {
    // (mitt)接收資料
    emitter.on('productDetail', (detail) => {
      this.productDetail = detail
    })
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
