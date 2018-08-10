<template>
    <div>
        <h3>Some User Details</h3>
        <hr>
        <p>User has navigated to {{ $route.params.id }}</p>

        <!-- router-link using explcitly constructed "to"-->
        <!-- <router-link 
            tag="button" 
            class="btn btn-primary" 
            v-bind:to="'/user/' + $route.params.id + '/edit'">Edit</router-link> -->

        <!-- router-link using the route name declared in the routes.js -->
        <router-link 
            tag="button" 
            class="btn btn-primary" 
            :to="{ name: 'userEdit', params: {id: $route.params.id }, query: {locale:'en', q:100}}">Edit</router-link>



    </div>



</template>