module.exports = {
    head: {
        title: 'NodeBird',
        meta: [{
          charset: 'utf-8',
        },{
          name : 'referrer',
          content : 'no-referrer-when-downgrade'
        }, {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
        }, {
          'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
        }, {
          hid: 'desc', name: 'description', content: '제로초의 NodeBird SNS',
        }, {
          hid: 'ogtitle', name: 'og:title', content: 'NodeBird',
        }, {
          hid: 'ogdesc', name: 'og:description', content: '제로초의 NodeBird SNS',
        }, {
          hid: 'ogtype', property: 'og:type', content: 'website',
        }, {
          hid: 'ogimage', property: 'og:image', content: 'https://vue.nodebird.com/vue-nodebird.png',
        }, {
          hid: 'ogurl', property: 'og:url', content: 'https://vue.nodebird.com',
        }],
        link: [{ rel: 'shortcut icon', href: '/vue-nodebird.png' }],
      },
    modules : [
        '@nuxtjs/axios',
    ],
    css : [
        '@mdi/font/css/materialdesignicons.min.css'
    ],
    buildModules : [
        '@nuxtjs/vuetify',
        ['@nuxtjs/vuetify', {iconfont : 'mdi'}]
    ],
    moment : {
        locales : ['ko'],
    },
    build: {
      analyze: false,
      extend(config, { isClient, isServer, isDev }) {
        if (isServer && !isDev) {
          config.devtool = 'hidden-source-map';
        }
        console.log('webpack', config, isServer, isClient);
      },
    },
    vuetify : {
        defaultAsserts : true,
    },
    axios : {
      browserBaseURL: process.env.NODE_ENV === 'production' ? 'http://api.jknodebird.site:80' : 'http://localhost:3085',
      baseURL: process.env.NODE_ENV === 'production' ? 'http://api.jknodebird.site:80' : 'http://localhost:3085',
        https : false,
    },
    server: {
        port: process.env.PORT || 3080,
    },
}