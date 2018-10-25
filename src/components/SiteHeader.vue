<template>
  <div class="site-header">
      <div class="site-header-logo">
          <a href="http://becoder.top"><span>Becoder</span></a>
      </div>
      <nav class="site-header-nav">
          <ul>
            <li v-for="(item, index) in navlist" v-bind:key="index">
                  <a :href="item.url">{{item.title}}</a>
            </li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
  data () {
    return {
        navlist :[
            {
                title: '博客',
                url: '#',
            },
            {
                title: '简书',
                url: 'https://www.jianshu.com/u/0e406beac079',
            },
            {
                title: '项目',
                url: '#',
            }
        ],
        msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-header{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    min-height: 40px;
    width: 100%;
}

.site-header-logo{
    height: 100%;
    width: 150px;
}

.site-header-logo span{
    display: block;
    min-height: 40px;
    width: 100%;
    background: url('../assets/logo.png') no-repeat;
    background-size: 100% 100%;
    text-indent: -9999px;
    text-align: left;
}

.site-header-nav{

}
.site-header-nav ul{
    list-style: none;
}

.site-header-nav ul li{
    display: inline-block;
    padding: 0 10px;
}
.site-header-nav ul li a{
    text-decoration: none;
}
</style>
