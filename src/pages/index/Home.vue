<template>
  <div class="home">
    <SiteHeader></SiteHeader>
    
    <b-container fluid class="home-container">
      <b-jumbotron>
        <template slot="header">
          Bootstrap Vue
        </template>
        <template slot="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </template>
        <hr class="my-4">
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <b-btn variant="primary" href="#">Do Something</b-btn>
        <b-btn variant="success" href="#">Do Something Else</b-btn>
      </b-jumbotron>
    </b-container>

    <site-footer></site-footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container{
  margin-top: 2rem; 
}
</style>
