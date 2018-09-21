<template>
    <div class="new_m">
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul class="movielist" id="container1">
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
                allLoaded:false,//bottom-all-loaded  始初设置默认值为false
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
                this.page++;
                if(this.page > this.totalPage){
                    this.allLoaded = true;
                    return;
                }
                this.start = (this.page-1)*this.count;
                this.getMovies()
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
                this.$axios.post('/api/new_movies',{
                    city:this.city || '广州',
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
            }
        },
        created(){
            //一进来请求一次
            this.getMovies();
        }
    }
</script>

<style scoped>
    /* ul{
        list-style: none;
        padding:0;
        margin: 0;
    } */
    .mint-loadmore{
        overflow-y: auto;
    }
</style>


