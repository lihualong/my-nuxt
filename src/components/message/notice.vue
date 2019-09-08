<template>
  <div class="my-notice-container">
    <div class="my-notice" v-for="item in notices" :key="item.id">{{item.content}}</div>
  </div>

</template>

<script>
  let seed = 0
  export default {
    name: "Notice",
    data () {
      return {
        notices: []
      }
    },
    methods: {
      add (notice) {
        let id = 'notice' + (seed ++)
        console.log(notice)
        this.notices.push({
          ...notice,
          id
        })
        const duration = notice.duration
        setTimeout(() => {
          this.remove(id)
        }, duration * 1000)
      },
      remove (id) {
        const notices = this.notices
        for (let i = 0; i < notices.length; i ++) {
          if (notices[i].id === id) {
            this.notices.splice(i, 1)
            break
          }
        }
      }
    }
  }
</script>

<style >
  .my-notice-container{
    position: fixed;
    width:100%;
    top:16px;
    left:0;
    text-align: center;
    pointer-events: none;
  }
  .my-notice{
    width:200px;
    margin:10px auto;
    font-size:14px;
    border:blue 1px solid;
    border-radius:5px;
    padding:8px 16px;
    background-color:#fff;
    margin-bottom:8px;
  }
</style>
