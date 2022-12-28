import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2fb642d4 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _a254eb8a = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _3b55fbe7 = () => interopDefault(import('../pages/hashtag/_id/index.vue' /* webpackChunkName: "pages/hashtag/_id/index" */))
const _d224169e = () => interopDefault(import('../pages/post/_id/index.vue' /* webpackChunkName: "pages/post/_id/index" */))
const _b2843ec8 = () => interopDefault(import('../pages/user/_id/index.vue' /* webpackChunkName: "pages/user/_id/index" */))
const _20bf727f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/profile",
    component: _2fb642d4,
    name: "profile"
  }, {
    path: "/signup",
    component: _a254eb8a,
    name: "signup"
  }, {
    path: "/hashtag/:id",
    component: _3b55fbe7,
    name: "hashtag-id"
  }, {
    path: "/post/:id",
    component: _d224169e,
    name: "post-id"
  }, {
    path: "/user/:id",
    component: _b2843ec8,
    name: "user-id"
  }, {
    path: "/",
    component: _20bf727f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
