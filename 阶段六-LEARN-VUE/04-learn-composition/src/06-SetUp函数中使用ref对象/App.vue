<template>
  <h2 ref="h2Ref">我是App</h2>
  <button @click="getEl">获取</button>
  <show-info ref="ShowRef"></show-info>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import ShowInfo from './ShowInfo.vue'
export default {
  components: {
    ShowInfo
  },
  // setup函数一开始就会调用 
  setup() {
    const h2Ref = ref()
    const ShowRef = ref()
    const getEl = computed(() => {
      console.log(h2Ref.value);
    })
    // setup中的mounted是onMounted
    onMounted(() => {
      // 拿子组件值
      console.log(ShowRef.value.name);
      // 子组件
      console.log(ShowRef.value);
      // 子组件方法
      ShowRef.value.ShowInfoFoo()
    })
    return {
      h2Ref, getEl, ShowRef
    }
  }
}
</script>

<style scoped>

</style>
