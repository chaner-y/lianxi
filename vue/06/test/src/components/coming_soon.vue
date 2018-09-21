<template> 
    <div class="coming">
        <mt-header title="即将上映">
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
                        <p>上映时间：{{item.pubdates[0]}}</p>
                    </div>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script>
    export default {
        props:['city'],
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
            //向上拉加载更多
            loadBottom(){
                // console.log(666);
                this.page++;
                if(this.page > this.totalPage){
                    this.allLoaded = true;
                    return;
                }
                this.start = (this.page-1)*this.count;
                this.getMovies();
            },
            search(){
				// 手动跳转路由
				this.$router.push({name:'Search',query:{keyword:this.keyword}});
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
            // getTiem(arr){
                // console.log(arr)
                // return arr.map(item=>{
                    // console.log(item);
                    // return arr[0];
                // });
            // },
            getMovies(){
                //loading 加载
                this.$loading.open();
                this.$axios.post('/api/coming_soon',{
                    city:this.city ||  '广州',
                    count:this.count,
                    start:this.start,
                    apikey:'0b2bdeda43b5688921839c8ecb20399b'
                }).then(res=>{
                    let data = res.data;
                    console.log(data);

                    //设置总分页数量
                    this.totalPage = Math.ceil(data.total/data.count);
                    this.list.push(...data.subjects);

                    //去除loading的效果
                    this.$loading.close();
                });
                console.log('List',this.list);
            }
            
        },
        created(){
            //一进来请求一次
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
    /* .movielist{
        padding: 10px;
    }
    .movielist li{
        overflow: hidden;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px dotted #ccc;
        display: flex;
    }
    .movielist img{
        margin-right: 20px;
        height: 130px;
    }
    .movielist info{
        text-align: left;
    } */
    .mint-loadmore{
        overflow-y: auto;
    }
</style>


