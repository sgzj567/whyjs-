<template>
  <div class="app">
    <h2>App</h2>
    <div class="nav">
      <!-- <router-link to="/home">首页</router-link> -->
      <!-- 自己设置路由的活跃类 -->
      <!-- <router-link to="/home" active-class="active">首页</router-link> -->
      <!-- 也可以给to写成类的模式 -->
      <!-- 一般不加replace replace返回的时候不记录之前的路径 active是自己设定的原本是router-link-active的名字-->
      <router-link :to="{
        path: '/home'
      }" active-class="active" replace>首页</router-link>
      <router-link to="/about" replace>关于</router-link>
      <router-link to="/user/123" replace>用户123</router-link>
      <router-link to="/user/321" replace>用户321</router-link>
      <router-link to="/order" replace>订单</router-link>
      <span @click="spanBtn">首页</span>
      <button @click="btnClick">关于</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function spanBtn() {
  router.push({
    path: "/home",
    query: { name: "why", age: "18" }
  })
}
// 其他元素任意跳转
function btnClick() {
  router.push({
    path: "/about",
    // 可以传参数 相当于get传参会拼接到url后面
    query: { name: "kobe", age: 17 }
  })
}

</script>

<style scoped>
/* 点击router-link的时候设置高亮  自动添加的类*/
.router-link-active {
  color: red;
}

.active {
  color: aqua;
}
</style>
