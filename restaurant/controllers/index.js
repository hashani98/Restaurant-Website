const ItemController = require('./ItemController')
const PostController = require('./PostController')
const OrderController = require('./OrderController')
module.exports = {
  post: PostController,
  item: ItemController,
  order: OrderController
}
