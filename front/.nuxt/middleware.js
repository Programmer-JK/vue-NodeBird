const middleware = {}

middleware['annonymous'] = require('../middleware/annonymous.js')
middleware['annonymous'] = middleware['annonymous'].default || middleware['annonymous']

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

export default middleware
