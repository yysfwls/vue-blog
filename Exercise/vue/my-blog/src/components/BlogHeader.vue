<template>
    <nav>
      <ul>
        <li>
          <router-link to="/" exact>博客</router-link>
          <router-link to="/add" exact>写博客</router-link>
          <el-dropdown  class="colorBtn " trigger="click"  @command="changeColor">
            <button><span class="el-dropdown-link " >换肤</span></button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a"  @click="change_type(a)">黛</el-dropdown-item>
              <el-dropdown-item command="b"  @click="change_type(b)">靛青</el-dropdown-item>
              <el-dropdown-item command="c"  @click="change_type(c)">牙白</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "blog-header",
      methods:{
        changeColor(command){
          // console.log(command);
          document.getElementById('app').className ='theme'+command ;
        }
      }
    }
</script>

<style lang="less" scoped>
  @import '../../static/BlogHeader.css';
  @import '../../static/color.less';

</style>
