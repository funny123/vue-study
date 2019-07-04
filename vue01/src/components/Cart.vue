<template>
  <div>
    <el-table :data="lists" style="width: 100%">
      <el-table-column prop="id" label="商品编号" width="180"></el-table-column>
      <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
      <el-table-column prop="price" label="商品价格"></el-table-column>
      <el-table-column prop="count" label="商品数量"></el-table-column>
      <el-table-column label="操作">
       <template slot-scope="scope">
        <el-button @click="reduceCount(scope.row.id)" type="text" size="small">减</el-button>
        <el-button type="text" size="small" @click="addCount(scope.row.id)">加</el-button>
        <el-button type="text" size="small" @click="delCount(scope.row.id)">删</el-button>
      </template>
      </el-table-column>
    </el-table>
    <span>总价：{{totalPrice}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "aaaaaa",
          price: 10,
          count: 1
        },
        {
          id: 2,
          name: "bbbbbbb",
          price: 13,
          count: 1
        },
        {
          id: 3,
          name: "ccccccc",
          price: 9,
          count: 1
        }
      ]
    };
  },
  computed: {
      totalPrice:function(){
         var total = 0;
         for(let i=0;i<this.lists.length;i++){
             total += this.lists[i].price*this.lists[i].count
         }
         return total;
      }
  },
  methods: {
      reduceCount(id) {
        console.log(id);
        if(this.lists[id-1].count===1) return;
        this.lists[id-1].count--

      },
      addCount(id){
          console.log(id-1);
          this.lists[id-1].count++
      },
      delCount(id){
          
          this.lists.splice(id-2,1)
      }
  },
};
</script>