import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Products from '../components/products/Products.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/about', component: About},
  {path: '/products', component: Products},
];

export default routes;