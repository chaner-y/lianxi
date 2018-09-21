<template>
    <div class="search">
        <mt-search v-model="keyword"></mt-search>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                items:[],
                keyword:''
            }
        },
        created(){

        }
    }
</script>
<style scoped>

</style>


