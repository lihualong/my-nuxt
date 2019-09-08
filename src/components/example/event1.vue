<template>
  <div>
    <h1>child center</h1>
    <child></child>
  </div>
</template>

<script>
  import child from './event2'
  export default {
    name: "event1",
    components: {
      child
    },
    mounted() {
      this.$on('helloUp',(d)=>{
        console.log(d)
      })
      this.$on('helloDown',(d)=>{
        console.log(d)
      })
    }
  }
</script>

<style scoped>

</style>
