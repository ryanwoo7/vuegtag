import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home/Home.vue'
import Mac from '../components/Mac/Mac'
import iPad from "../components/iPad/iPad";
import iPhone from "../components/iPhone/iPhone";
import Music from "../components/Music/Music";
import AirPodsDetails from "../components/Music/GoodsShow/AirPods Pro/AirPodsDetails";


Vue.use(VueRouter)

var router=new VueRouter({
    base:'/vuegtag/',
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/mac',
            component:Mac,
        },
        {
            path:'/ipad',
            component:iPad,
        },
        {
            path:'/iphone',
            component:iPhone,
        },
        {
            path:'/music',
            component:Music,
        },
        {
            path:'/music/airpodspro',
            component:AirPodsDetails,
        }

    ],
    mode:'history'
})

// 经验证，这个路由守卫没什么用，因为vue-router在跳转的路径相同的时候，在执行这个路由守卫之前就拦截了
router.beforeEach((to, from, next) => {
    // console.log(to.path===from.path)
    if(to.path===from.path){
        console.log('路由相等啦')
       return

    } else {
        next()
    }
})


export default router

