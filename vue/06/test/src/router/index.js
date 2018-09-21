import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home';
import search from '@/components/search';
import in_theaters from '@/components/in_theaters';
import coming_soon from '@/components/coming_soon';
import citylist from '@/components/citylist';
import new_movies from '@/components/new_movies';
import top250 from '@/components/top250';
import weekly from '@/components/weekly';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
      props:true
    },
    {
      path:'/citylist',
      name:'CityList',
      component:citylist,
      props:true
    },
    {
      path:'/search',
      name:'Search',
      component:search
    },
    {
      path:'/in_theaters',
      name:'in_theaters',
      component:in_theaters
    },
    {
      path:'/coming_soon',
      name:'coming_soon',
      component:coming_soon
    },
    {
      path:'/new_movies',
      name:'new_movies',
      component:new_movies
    },
    {
      path:'/top250',
      name:'top250',
      component:top250
    },
    {
      path:'/weekly',
      name:'weekly',
      component:weekly
    }
  ]
})
