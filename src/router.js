import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home";
import Index from "./pages/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/index",
      children: [
        {
          path: "/index",
          name: "index",
          component: Index
        },
        {
          path: "/product/:id",
          name: "product",
          component: resolve => require(["./pages/index.vue"], resolve)
        },
        {
          path: "/detail/:id",
          name: "detail",
          component: resolve => require(["./pages/detail.vue"], resolve)
        }
      ]
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import('./pages/cart.vue')
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./pages/login.vue")
    },
    {
      path: "/order",
      name: "order",
      component: () => import("./pages/order.vue"),
      children: [
        {
          path: "list",
          name: "order-list",
          component: () => import("./pages/orderList.vue")
        },
        {
          path: "pay",
          name: "order-pay",
          component: () => import("./pages/orderPay.vue")
        },
        {
          path: "confirm",
          name: "order-confirm",
          component: () => import("./pages/orderConfirm.vue")
        },
        {
          path: "alipay",
          name: "alipay",
          component: () => import("./pages/alipay.vue")
        }
      ]
    }
  ]
});
