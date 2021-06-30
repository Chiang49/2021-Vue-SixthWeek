<template>
  <div class="container">
    <div class="text-end">
      <button class="btn btn-outline-danger" type="button" @click="deleteAll">
        清空購物車
      </button>
    </div>
    <!-- 購物車列表 -->
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cartItem.length === 0">
          <tr class="text-center">
            <td colspan="4" class="fst-italic text-secondary">購物車未有商品</td>
          </tr>
        </template>
        <template v-else>
          <tr v-for="product in cartItem" :key="product.id">
            <td>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteOne(`${product.id}`)">
                <i class="fas fa-spinner fa-pulse"></i>
                x
              </button>
            </td>
            <td>
              {{ product.product.title }}
              <div class="text-success">
                已套用優惠券
              </div>
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <input min="1" type="number" class="form-control"
                    v-model.number="product.qty"
                    @change="changProductNum(`${product.id}`, `${product.product_id}`, `${product.qty}`)"
                  />
                  <span class="input-group-text" id="basic-addon2"> {{ product.product.unit }}</span>
                </div>
              </div>
            </td>
            <td class="text-end">
              {{ product.final_total }}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ carts.final_total }}</td>
        </tr>
      </tfoot>
    </table>
    <!-- 表單 -->
    <div class="my-5 row justify-content-center">
      <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createdOlder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            placeholder="請輸入 Email"
            v-model="form.user.email"
            rules="email|required"
            :class="{ 'is-invalid': errors['email'] }"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            placeholder="請輸入姓名"
            v-model="form.user.name"
            rules="required"
            :class="{ 'is-invalid': errors['姓名'] }"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="電話"
            type="text"
            class="form-control"
            placeholder="請輸入電話"
            v-model="form.user.tel"
            rules="required|min:8"
            :class="{ 'is-invalid': errors['電話'] }"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            placeholder="請輸入地址"
            v-model="form.user.address"
            rules="required"
            :class="{ 'is-invalid': errors['地址'] }"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name="留言"
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carts: {},
      cartItem: [],
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    // 取得購物車資料
    getCartData () {
      const apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(apiUrl).then((res) => {
        // console.log(res)
        if (res.data.success) {
          this.carts = res.data.data
          this.cartItem = res.data.data.carts
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 刪除全部購物車
    deleteAll () {
      const apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(apiUrl).then((res) => {
        // console.log(res)
        if (res.data.success) {
          alert('購物車已清空')
          this.getCartData()
        } else {
          alert(res.data.message)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 刪除個別商品
    deleteOne (id) {
      const apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(apiUrl).then((res) => {
        // console.log(res)
        if (res.data.success) {
          alert('商品已刪除')
          this.getCartData()
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 修改購物車商品數量
    changProductNum (id, productId, qty) {
      const product = {
        product_id: productId,
        qty: parseInt(qty)
      }
      const apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.put(apiUrl, { data: product }).then((res) => {
        // console.log(res)
        if (res.data.success) {
          this.getCartData()
        } else {
          alert(res.data.message)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 送出訂單
    createdOlder () {
      if (this.cartItem.length === 0) {
        alert('購物車沒有商品')
      } else {
        const apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
        this.$http.post(apiUrl, { data: this.form }).then((res) => {
          // console.log(res)
          if (res.data.success) {
            alert(res.data.message)
            this.$refs.form.resetForm()
            this.form.message = ''
            this.getCartData()
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  },
  created () {
    this.getCartData()
  }
}
</script>
