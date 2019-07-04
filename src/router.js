import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

const Home = (resolve) => {
  require.ensure(['./views/Home.vue'], () => {
    resolve(require('./views/Home.vue'));
  });
};

const Menu = (resolve) => {
  require.ensure(['./views/Menu.vue'], () => {
    resolve(require('./views/Menu.vue'));
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

const Player = (resolve) => {
  require.ensure(['./views/Player.vue'], () => {
    resolve(require('./views/Player.vue'));
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
      component: Home,
    },
    {
      path: '/:id',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/:id/creator',
      name: 'creator',
      component: Creator,
    },
    {
      path: '/:id/about',
      name: 'about',
      component: About,
    },
    {
      path: '/:id/how-to-play',
      name: 'howtoplay',
      component: HowToPlay,
    },
    {
      path: '/:id/player',
      name: 'player',
      component: Player,
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
