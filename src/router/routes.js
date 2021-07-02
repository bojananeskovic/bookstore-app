import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Products from '../components/products/Products.vue';
import BookProduct from '../components/products/BookProduct.vue';
import ArtProduct from '../components/products/ArtProduct.vue';
import BoardGamesProduct from '../components/products/BoardGamesProduct.vue';
import ClassBookProduct from '../components/products/ClassBookProduct.vue';
import GiftsProduct from '../components/products/GiftsProduct.vue';
import OfficeSuppliesProduct from '../components/products/OfficeSuppliesProduct.vue';
import RanchesProduct from '../components/products/RanchesProduct.vue';
import StationaryProduct from '../components/products/StationaryProduct.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/about', component: About},
  {path: '/products', component: Products, meta: {requiresAuth: true}},
  {path: '/products/book-products', component: BookProduct, meta: {requiresAuth: true}},
  {path: '/products/art-products', component: ArtProduct, meta: {requiresAuth: true}},
  {path: '/products/boardGames-products', component: BoardGamesProduct, meta: {requiresAuth: true}},
  {path: '/products/classbook-products', component: ClassBookProduct, meta: {requiresAuth: true}},
  {path: '/products/gifts-products', component: GiftsProduct, meta: {requiresAuth: true}},
  {path: '/products/officeSupplies-products', component: OfficeSuppliesProduct, meta: {requiresAuth: true}},
  {path: '/products/ranches-products', component: RanchesProduct, meta: {requiresAuth: true}},
  {path: '/products/stationary-products', component: StationaryProduct, meta: {requiresAuth: true}},
  {path: '/login', component: Login},
  {path: '/register', component: Register}
];

export default routes;

