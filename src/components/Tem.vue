<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// axios 请求
axios.get('/api/getData').then(res => {
  console.log(res)
})

let tpl = ref('this is vue components')
onMounted(() => {
  console.log('mounted')
})
</script>
<template>
  <div>
    <h1 class="text-center">{{ tpl }}</h1>
  </div>
</template>

<style lang="scss">
div {
  h1 {
    font-size: 30px;
  }
}
</style>