<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>

      <article>
        <!--{{blog.content | snippet}}-->
        {{blog.body | snippet}}
      </article>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'show-blogs',
    data() {
      return {
       blogs: [],
       search:""

      }
    },
    created() {
      this.$http.get('./../static/post.json')
        .then(function (data) {
          // console.log(data.json());
          // return data.json()
          this.blogs = data.body
          // console.log(this.blogs);
        })
        // .then(function (data) {
        //   var blogsArray = [];
        //   for (let key in data){
        //     //console.log(key);
        //     data[key].id = key;
        //     blogsArray.push(data[key]);
        //   }
        //   //console.log(blogsArray);
        //   this.blogs = blogsArray;
        // })
    },
    computed:{
      filteredBlogs:function () {                                              //过滤博客
        return this.blogs.filter((blog) =>{                                    //拿到blog的内容
          return blog.title.match(this.search);                                //拿到用户输入的内容
        })
      }
    },
    filters:{
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    directives:{
      'rainbow':{
        bind(el,binding,vnode){
          el.style.color = "#" + Math.random().toString(16).slice(2,8);

        }
      }
    }
  }
</script>

<style scoped>
  @import '../../static/ShowBlogs.css';
  /*@import '../../static/color.less';*/


</style>
