<template>
  <div class="projects">
    <SiteHeader></SiteHeader>
    
    <b-container fluid class="proj-container">

      
      <b-card no-body class="overflow-hidden" style="max-width: 540px; margin: 10px auto"
        v-for="(item, index) in projects" :key="index"
      >
        <b-row no-gutters align-v="center">
          <b-col md="5">
            <b-card-img :src="item.imageUrl" :alt="item.title" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="7">
            <b-card-body :title="item.title">
              <b-card-text class="text-left">
                {{item.abstract}}
              </b-card-text>
               <b-button-group>
              <b-button  variant="info" @click="item.urlgo">
                点击游玩
              </b-button>
              <b-button  variant="success" @click="item.codego">
                查看源码
              </b-button>
               </b-button-group>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>

    <site-footer></site-footer>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    let jsonFile = require('./../../assets/configs/projects.json');
    
    let arr = [];

    for(let i in jsonFile){
      let item = jsonFile[i];
      arr.push(
        {
          title: item.title,
          abstract: item.abstract,
          imageUrl: item.imageUrl,
          urlgo: ()=>{
            window.open(item.gameUrl, '_blank');
          },
          codego: ()=>{
            window.open(item.codeUrl, '_blank');
          }
        }
      )
    }

    return {
      projects: arr
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.proj-container{
  margin-top: 2rem; 
}
</style>
