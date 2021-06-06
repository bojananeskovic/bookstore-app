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

const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/about', component: About},
  {path: '/products', component: Products},
  {path: '/products/book-products', component: BookProduct},
  {path: '/products/art-products', component: ArtProduct},
  {path: '/products/boardGames-products', component: BoardGamesProduct},
  {path: '/products/classbook-products', component: ClassBookProduct},
  {path: '/products/gifts-products', component: GiftsProduct},
  {path: '/products/officeSupplies-products', component: OfficeSuppliesProduct},
  {path: '/products/ranches-products', component: RanchesProduct},
  {path: '/products/stationary-products', component: StationaryProduct}
];

export default routes;