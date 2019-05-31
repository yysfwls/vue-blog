<template>
  <div id="app">
    <!--<add-Blog></add-Blog>-->
    <!--<show-blogs></show-blogs>-->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'


export default {
  name: 'app',
  components: {
    AddBlog,ShowBlogs,BlogHeader,
  }
}
</script>

<style scoped>
  .app {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: red;
  }
</style>

