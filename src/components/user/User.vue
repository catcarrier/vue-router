<template>
    <div>
        <h1>The User Page</h1>
        <button class="btn btn-primary" @click="navigateToHome">Go to /home</button>
    </div>
    

</template>

<script>
export default {
    methods: {
        navigateToHome: function(){
            this.$router.push({path:'/'});
        }
    }
}
</script>
