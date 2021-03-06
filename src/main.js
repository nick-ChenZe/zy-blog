// vendor
import Vue from 'vue';
import Router from 'vue-router';

// components
import App from './App.vue';
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';
import Category from './views/Category.vue';
import Post from './views/Post.vue';

require('lodash');
var VueResource = require('vue-resource');
window.duoshuoQuery = {short_name:"chenze2168"};

// debug
Vue.config.debug = true;

// install router
Vue.use(Router);
Vue.use(VueResource);
    
// routing
let router = new Router();  

router.map({
    '/home': {
        name: 'home',
        component: Home
    },
    '/blog': {
        name: 'Blog',
        component: Blog
    },
    '/post/:id': {
        name: 'post',
        component: Post,
        canReuse:false
    },
    '/404':{
        name:'error',
        component: require("./views/Error.vue")
    }
});

router.redirect({
    '/': '/home',
    '*': '/404'
});
// let's begin
router.start(App, '#app');