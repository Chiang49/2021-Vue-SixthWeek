<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div class="container-fluid">
        <h1><a class="navbar-brand" href="#">Navbar</a></h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">產品</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">購物車</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view></router-view>
</template>
