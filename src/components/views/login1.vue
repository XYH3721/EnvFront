<template>
    <div class="login1-page">
        {{msg}}
        <p><router-link to="/">首页</router-link></p>
        <p><router-link to="/page/factory">工厂</router-link></p>
        <p><router-link to="/page/government">政府</router-link></p>
        <p><router-link to="/page/visitor">访客</router-link></p>
        
    </div>
</template>

<script>
export default {
    name: "login1",  
    data() {
        return {
            msg: "login page for factory & government"
        };
    }
};
</script>

<style>

</style>