<template>
  <div class="site-header">  
    <b-navbar class="site-header-nav" toggleable="md" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="https://becoder.top">
        <img :src="require('../assets/images/logo.png')" width="150" height="40" alt="becoder.top">
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item v-for="(item, index) in navlist" :key="index" :href="item.url" @click="item.urlgo">
            {{item.title}}
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="(item, index) in iconlist" :key="index" :href="item.url" :title="item.title">
            <img :src="item.icon" width="20" height="20" :alt="item.title">
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-3">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="输入搜索关键字"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="primary">搜索</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
                urlgo: () => {
                  this.$router.push('/');
                }
            },
            {
                title: '简书',
                url: 'https://www.jianshu.com/u/0e406beac079',
                urlgo: () => {
                  
                }
            },
            {
                title: '项目',
                url: '#',
                urlgo: () => {
                  this.$router.push('proj');
                }
            }
        ],
        iconlist: [
            {
            icon: require('./../assets/images/jianshu.svg'),
            url: 'https://www.jianshu.com/u/0e406beac079',
            title: '简书'
            },
            {
            icon: require('./../assets/images/github.svg'),
            url: 'https://github.com/Ryan4G/',
            title: 'Github'
            }
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-header{
    display: flex;
    min-height: 40px;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.site-header-nav{
    width: 100%;
}
</style>
