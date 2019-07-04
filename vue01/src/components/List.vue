<template>
  <div>
    List {{ $route.params.id }}
    <div id="list">
      <ul>
        <li v-for="(list,key) in newsList" :key="key">{{list.title}}</li>
      </ul>
    </div>
    <Adsense data-ad-client="ca-pub-4729695073417937" data-ad-slot="7270419851"></Adsense>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
      info: []
    };
  },
  mounted() {
    console.log(123131111);
    this.$axios
      .get(
        "http://toutiao.0512688.com/api/index/recommend?channel=%E4%BA%92%E8%81%94%E7%BD%91&offset=20"
      )
      .then(response => {
        console.log(response);

        this.newsList = response.data.result;
      })
      .catch(response => {
        console.log(response);
      });
  },
  methods: {
    onLoad() {
      console.log(12313);
      getNewsList();
    },
    getNewsList() {}
  }
};
</script>