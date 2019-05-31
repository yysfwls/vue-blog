<template>
    <div id="add-blog">
      <h2>添加博客</h2>
      <form v-if="!submmited">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required />
        <label>博客内容</label>
        <textarea v-model="blog.body"></textarea>

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
        <button v-on:click.prevent="post">添加博客</button>
      </form>

      <div v-if="submmited">
        <h3>您的博客发布成功！</h3>
      </div>

      <div id="preview">
        <h3>博客纵览</h3>
        <p>博客标题:{{blog.title}}</p>
        <p>博客内容</p>
        <p>{{blog.body}}</p>
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
            blog:{
              title:"",
              content:"",
              categories: [],
              author:"",
              body:"",
              id:""
            },
            authors:["arya","henry","bucky"],
            submmited: false
          }
      },
      methods:{
        post:function () {
          this.$http.post("https://myblog-34efc.firebaseio.com/posts.json",this.blog)
            // {//./../static/post.json
            // title:this.blog.title,
            // body:this.blog.body,}
            .then(function (data) {
              console.log(data);
              this.submmited = true;
            });

        }
      }
    }
</script>

<style scoped>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  label{
    display: block;
    margin: 20px 0 10px;

  }
  input[type="text"]{
    display: block;
    width: 50%;
    padding: 8px;
    border-bottom: 1px solid #7aacfe;
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }
  textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }
  textarea{
    height: 200px;
  }
  #checkboxes{
    margin-top: 10px;
  }
  #checkboxes label{
    display: inline-block;
    margin-top: 0;
  }
  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
  select{
    width: 50%;
  }
  button{
    display: block;
    margin: 20px 0;
    background: #F4988F;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 7px;
    font-size: 18px;
    cursor: pointer;
    outline:none;
  }
  button:hover {
    box-shadow: 0 12px 16px 0
    rgba(0,0,0,0.24),
    0 17px 50px 0
    rgba(0,0,0,0.19);
  }
  button:active {
    transform: translateY(2px);
  }

  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
</style>
