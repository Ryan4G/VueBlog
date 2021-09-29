<template>
  <div class="site-footer">
    <div class="site-footer-copyright">
      <p v-html="getCopyright()"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteFooter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    getCopyright(){
      let html = '';
      
      html = "<a href='https://becoder.top'>Becoder.top - 个人网站</a> &copy; " + (new Date()).getFullYear();

      return html;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-footer{
    display: flex;
    min-height: 40px;
    width: 100%;
    border-top: 1px solid #e9ecef;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.site-footer-copyright{
    display: block;
    height: 80px;
    width: 100%;
    line-height: 80px;
    text-align: center;
}
</style>
