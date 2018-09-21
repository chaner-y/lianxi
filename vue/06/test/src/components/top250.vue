<template>
    <div class="new_m">
        <mt-header title="Top250">
            <router-link to="/" slot="left">
                <mt-button icon="back">
                    返回
                </mt-button>
            </router-link>
            <mt-button icon="search" slot="right" @click="search"></mt-button>
        </mt-header>
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul class="movielist">
                <li v-for="item in list" :key="item.id">
                    <img :src="item.images.small"/>
                    <div class="info">
                        <h4>{{item.title}}</h4>
                        <p>主演：{{getNames(item.casts)}}</p>
                        <p>类型：{{getStyle(item.genres)}}</p>
                        <p>上映时间：{{item.pubdates[0],item.pubdates[1]}}</p>
                    </div>
                </li>
            </ul>
        </mt-loadmore>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                allLoaded:false,
                list:[],
                count:10,
                start:0,
                page:1,
                totalPage:0
            }
        },
        methods:{
            //向上拉，加载更多
            loadBottom(){
                console.log(666);
                this.page++;
                if(this.page > this.totalPage){
                    this.allLoaded =true;
                    return;
                }
                this.start = (this.page-1)*this.count;
                this.getMovies();
            },
            search(){
                //手动跳转路由
                this.$router.push({name:'Search',query:{keyword:this.keyword}})
            },
            getNames(arr){
                return arr.map(item=>{
                    return item.name;
                }).join();
            },
            getStyle(arr){
                return arr.map(item=>{
                    return item;
                }).join();
            },
            getMovies(){
                //loading
                this.$loading.open();
                this.$axios.post('/api/top250',{
                    city:this.city || '广州',
                    count:this.count,
                    start:this.start,
                    apikey:'0b2bdeda43b5688921839c8ecb20399b'
                }).then(res =>{
                    let data = res.data;
                    console.log(data);
                    
                    //设置总分页数量
                    this.totalPage = Math.ceil(data.total/data.count);
                    this.list.push(...data.subjects);

                    //去除loading的效果
                    this.$loading.close();
                })
            }
        },
        created(){
            this.getMovies();
        }

    }
</script>
 <style scoped>
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .mint-loadmore{
        overflow-y: auto;
    }
 </style>
 