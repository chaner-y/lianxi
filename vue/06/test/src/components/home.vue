<template>
	<div class="home">
		<mt-header title="电影资讯网">
			<router-link to="/citylist" slot="left">
			   <mt-button>[{{currentCity}}]</mt-button>
			 </router-link>
			<mt-button icon="search" slot="right" @click="search"></mt-button>
		</mt-header>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,idx) in items" :key="idx">
				<img :src="item.images.large"/>
			</mt-swipe-item>
		</mt-swipe>
		<ul class="datalist flexlist">
			<li v-for="(item,idx) in datalist" :key="idx" @click="showDetail(item.id)">
				<img :src="item.images.small" />
				<h4>{{item.title}}</h4>
			</li>
		</ul>
	</div>
</template>

<script>
    export default {
        props:['city'],
        data(){
			console.log(this.city)
            return {
                items:[],
                datalist:[],
                keyword:'碟中谍6',
                currentCity:this.city || '广州'
            }
        },
        watch:{
            //监听currentCiry,改变则重新请求数据
            currentCity(){
                this.getMovie();
            }
        },
        created(){
            //进入先请求一次数据
            this.getMovie();
        },
        methods:{
			showDetail(id){
				this.$router.push({name:'Detail',params:{id}});
			},
			search(){
				// 手动跳转路由
				this.$router.push({name:'Search',query:{keyword:this.keyword}});
			},
			loadTop(){
				this.$refs.loadmore.onTopLoaded();
			},
            loadmore(){

            },
            //获取正在热映电影
			getMovie(){
				// this.$loading.open();
				this.$axios.post('/api/in_theaters',{
					apikey:'0b2bdeda43b5688921839c8ecb20399b',
					city:this.currentCity.replace(/市$/,''),
					count:12
				}).then(res=>{
					let data = res.data;
					console.log(data);

					this.datalist = data.subjects;

					this.items = data.subjects.slice(0).sort((a,b)=>{
						return a.collect_count-b.collect_count
					}).slice(0,3);

					// this.$loading.close();



				});
			}
        }
    }
</script>
<style>
    .mint-swipe{
        height:200px;
    }
    .mint-swipe img{
        width: 100%;
    }
	.datalist{
		list-style: none;
		overflow: hidden;
		margin: 0;
		padding: 0;
	}
	.datalist li{
		float: left;
		margin:8px 16px;
	}
	.datalist li img{
		height:80px;
		width: 80px;
	}
	.datalist li h4{
		font-size: 12px;
	}
</style>


