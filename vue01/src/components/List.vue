<template>
  <div>List {{ $route.params.id }}</div>
</template>

<script>
export default {
  data() {
    return {
      newsList: []
    };
  },
   mounted() {
       this.getNewsList()
   },
  methods: {
    getNewsList() {
      this.axios
        .get(
          "http://toutiao.0512688.com/api/index/recommend?channel=%E4%BA%92%E8%81%94%E7%BD%91&offset=20"
        )
        .then(response => {
          console.log(response);

          this.newsList = response.data.data;
        })
        .catch(response => {
          console.log(response);
        });
    }
  }
};
</script>