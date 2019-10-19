<template>
  <div class="e-nuxt-container">
    <nuxt-link to="/daily/tech">Dayly Tech</nuxt-link>
    <div class="github-grash-wrapper">
      <div v-html="ghGraph"></div>
    </div>
  </div>
</template>
<script>
import $axios from 'axios';
export default {
  components: {
  },
  data () {
    return {
      ghGraph: '',
      externalContent: ''
    }
  },
  mounted () {
    this.getGithubStatus();
  },
  methods: {
    getGithubStatus() {
      const date = this.getDate();
      const url = `https://github.com/users/fengpeng213/contributions?to=${date}`;
      console.log(url)
      $axios.get(url).then(res => {
        const data = (res && res.data) || '';
        const firstIndex = data.indexOf('<svg');
        const lastIndex = data.lastIndexOf('svg>');
        this.ghGraph = data.slice(firstIndex, lastIndex).replace(/<text.*<\/text>/g, ''); 
      });
    },
    getDate(seperator = '-') {
      const date = new Date();
      const year = date.getFullYear();
      let month = '0' + (date.getMonth() + 1);
      let day = '0' + date.getDate();

      month = month.slice(-2);
      day = day.slice(-2);
      
      return [year, month, day].join(seperator)
    }
  }
}
</script>
<style lang="scss" scoped>
.github-grash-wrapper {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
</style>
