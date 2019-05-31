<template>
  <div id="add-blog">
    <h2>编辑博客</h2>
    <form v-if="!submited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular</label>
        <input type="checkbox" value="Angular" v-model="blog.categories">
      </div>
      <label>作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">确认修改</button>
    </form>

    <div v-if="submited">
      <h3>您的博客发布成功！</h3>
    </div>

    <div id="preview">
      <h3>博客纵览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'add-blog',
    data () {
      return{
        id:this.$route.params.id,
        blog:{},
        authors:["arya","henry","bucky"],
        submited: false
      }
    },
    methods:{
      fetchData(){
        this.$http.get('https://myblog-34efc.firebaseio.' +
          'com/posts/' + this.id + ".json")
          .then(response => {
            this.blog = response.body;

          })
      },
      post:function(){
        this.$http.put('https://myblog-34efc.firebaseio.' +
          'com/posts/' + this.id + ".json",this.blog)
          .then(function (data) {
            console.log(data);
            this.submited = true;
          });
      }
    },

    created(){
      this.fetchData();
    }
  }
</script>

<style scoped>
  @import '../static/Editblog.css';
</style>

