<template>
    <div>
        <h1>The User Page</h1>
        <button class="btn btn-primary" @click="navigateToHome">Go to /home</button>
        <hr>
        <router-view></router-view>
    </div>
    

</template>

<script>
export default {
    methods: {
        navigateToHome: function(){
            this.$router.push({path:'/'});

            // alternate syntax using a route name (see routes.js)
            // this.$router.push({name:"home"});
        }
    }
}
</script>
