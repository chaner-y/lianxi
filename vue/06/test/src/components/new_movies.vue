<template>
    <div class="weekly">
        <mt-header title="最近片榜">
            <router-link to="/" slot="left">
                <mt-button icon="back">
                    返回
                </mt-button>
            </router-link>
            <mt-button icon="search" slot="right" @click="search"></mt-button>
        </mt-header>
        <mt-button size="small" type="default" @click.native.prevent="active = 'container1'">新片榜</mt-button>
        <mt-button size="small" type="default" @click.native.prevent="active = 'container2'">口碑榜</mt-button>
        <mt-tab-container v-model="active" swipeable>
            <!-- <router-view/> -->
            <mt-tab-container-item id="container1">
                <mt-cell v-for="n in 5" :title="'tab-container2 ' + n" :key="n"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="container2">
                <mt-cell v-for="n in 5" :title="'tab-container2 ' + n" :key="n"></mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                active:'container1',
                // tabs:[
                //     {
                //         title:'新片榜',
                //         id:'new_movies.1'
                //     },{
                //         title:'口碑'
                //     }
                // ]
            }
        },
        methods:{
             search(){
                //手动跳转路由
                this.$router.push({name:'Search',query:{keyword:this.keyword}});
            },
        },
        created(){
          
        }
    }
</script>

<style scoped>
    .mint-loadmore{
        overflow-y: auto;
    }
</style>


