<template>
    <div class="factory-page">
        {{msg}}
        <p><router-link to="/">首页</router-link></p>
        <p><router-link to="/page/factory">工厂</router-link></p>
        <p><router-link to="/page/government">政府</router-link></p>
        <p><router-link to="/page/visitor">访客</router-link></p>
        <p><router-link to="/login1">登录</router-link></p>
        <p><router-link to="/register1">注册</router-link></p>
    </div>
</template>

<script>
export default {
    name: "factory",  
    data() {
        return {
            msg: "factory page"
        };
    }
};
</script>

<style>

</style>