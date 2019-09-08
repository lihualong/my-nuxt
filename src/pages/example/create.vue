<template>
    <div>
      <v-btn @click="openNotice(true)">单例调用notice</v-btn>
      <v-btn @click="openNotice2(false)">调用notice</v-btn>
    </div>
</template>

<script>
  export default {
    name: "create",
    methods: {
      openNotice(v){
        this.$notice('hello')

      },
      openNotice2(){
        this.$notice({duration:3,content:'hello'})
      }
    }
  }
</script>

<style scoped>

</style>
