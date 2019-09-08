<template>
    <div>
      <v-btn @click="show">hello child</v-btn>
      <child></child>

    </div>
</template>

<script>
  import child from '../../components/example/event1'
  export default {
    name: "events",
    components: {
      child
    },
    mounted() {
      this.$on('helloUp',d=>{
        console.log(d)
      })
    },
    methods: {
      show(){
        this.$boardcast('helloDown', 'hello child')
      }
    }
  }
</script>

<style scoped>

</style>
