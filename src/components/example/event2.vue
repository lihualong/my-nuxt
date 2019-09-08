<template>
    <div>
       <h1>child jim</h1>
       <v-btn @click="doSomething">hello parent</v-btn>
    </div>
</template>

<script>
  export default {
    name: "event2",
    mounted() {
      this.$on('helloDown',(d)=>{
        console.log(d)
      })
    },
    methods: {
      doSomething() {
        this.$dispatch('helloUp', 'hello parent')
      }
    }
  }
</script>

<style scoped>

</style>
