import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

const Home = (resolve) => {
  require.ensure(['./views/Home.vue'], () => {
    resolve(require('./views/Home.vue'));
  });
};

const Navigation = (resolve) => {
  require.ensure(['./views/Navigation.vue'], () => {
    resolve(require('./views/Navigation.vue'));
  });
};

const NotFound = (resolve) => {
  require.ensure(['./views/NotFound.vue'], () => {
    resolve(require('./views/NotFound.vue'));
  });
};

const About = (resolve) => {
  require.ensure(['./views/About.vue'], () => {
    resolve(require('./views/About.vue'));
  });
};

const Creator = (resolve) => {
  require.ensure(['./views/Creator.vue'], () => {
    resolve(require('./views/Creator.vue'));
  });
};

const HowToPlay = (resolve) => {
  require.ensure(['./views/HowToPlay.vue'], () => {
    resolve(require('./views/HowToPlay.vue'));
  });
};

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        'external-nav': Navigation,
      },
    },
    {
      path: '/',
      name: 'inner-home',
      components: {
        default: Home,
        'internal-nav': Navigation,
      },
      children: [
        {
          path: 'creator',
          name: 'creator',
          component: Creator,
        },
        {
          path: 'about',
          name: 'about',
          component: About,
        },
        {
          path: 'how-to-play',
          name: 'howtoplay',
          component: HowToPlay,
        },
      ],
    },
    {
      path: '/error-404',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '*',
      redirect: { name: 'not-found' },
    },
  ],
});
