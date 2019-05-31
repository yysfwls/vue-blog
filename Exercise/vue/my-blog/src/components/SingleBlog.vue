<template>
    <div id="single-blog">
      <p>编号:{{ blog.id}}</p>
      <h1>{{blog.title}}</h1>
      <!--<p>当前时间:{{nowtime}}</p>-->
      <article>{{blog.body}}</article>
      <p>作者:{{blog.author}}</p>
      <p>分类:{{blog.belong}}</p>

      <p>当前时间：{{nowTime}}</p>
      <ul>
        <li v-for="category in blog.categories">
          {{category}}
        </li>
      </ul>
      <button @click="deleteSingleBlog">删除</button>
      <router-link :to="/edit/ + id">编辑</router-link>
    </div>
</template>

<script>
    export default {
        name: "single-blog",
      data(){
          var nowTime;
          return{
            id:this.$route.params.id,
            blog:{}
          }
      },
      created() {
          this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
            .then(function (data) {
              // console.log(data);
              // return data.json();
              this.blog = data.body;
            })
            // .then(function (data) {
            //   this.blog = data;
            // })

        this.nowTimes();
      },
      methods:{
          deleteSingleBlog(){
            this.$http.delete("./../static/posts" + this.id + ".json")
              .then(response =>{
                this.$router.push({path:'/'})
              })
          },
        timeFormate(timeStamp) {
          let year = new Date(timeStamp).getFullYear();
          let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
          let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
          let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
          let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
          this.nowTime = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm ;
        },

        // 定时器函数
        nowTimes(){
            this.timeFormate(new Date());
            setInterval(this.nowTimes,1000);
            this.clear()
        },
        clear(){
            clearInterval(this.nowTimes);
            this.nowTimes = null; }
        //   nowTimes(){
        //   this.timeFormate(new Date());
        //   setInterval(this.nowTimes,30*1000);
        // }

      }
    }
</script>
<style lang="less" scoped>


</style>

<style scoped>
  @import '../../static/SingleBlog.css';
</style>
