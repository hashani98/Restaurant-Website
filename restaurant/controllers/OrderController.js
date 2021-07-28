// const { Controller } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
// const Order = require('../models/Order')

// class OrderController extends Controller {
//   constructor () {
//     super(Order, process.env)
//   }

//   async get (params) {
//     const orders = await Order.find(params, Controller.parseFilters(params))
//     return Order.convertToJson(orders)
//   }

//   async getById (id) {
//     const order = await Order.findById(id)
//     if (order == null) {
//       throw new Error(`${Order.resourceName} ${id} not found.`)
//     }

//     return order.summary()
//   }

//   async post (body) {
//     const order = await Order.create(body)
//     return order.summary()
//   }

//   async put (id, params) {
//     const order = await Order.findByIdAndUpdate(id, params, { new: true })
//     return order.summary()
//   }

//   async delete (id) {
//     const order = await Order.findByIdAndRemove(id)
//     return order
//   }
// }

// module.exports = new OrderController()

const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const Controller = vertex.Controller
const Order = require('../models/Order')

class OrderController extends Controller {
  constructor () {
    super(Order, process.env)
  }

  get (params) {
    return new Promise((resolve, reject) => {
      Order.find(params, Controller.parseFilters(params))
        .then(orders => {
          resolve(Order.convertToJson(orders))
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getById (id) {
    return new Promise((resolve, reject) => {
      Order.findById(id)
        .then(order => {
          if (order == null) {
            throw new Error(Order.resourceName + ' ' + id + ' not found.')
          }

          resolve(order.summary())
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  post (body) {
    return new Promise((resolve, reject) => {
      Order.create(body)
        .then(order => {
          resolve(order.summary())
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  put (id, params) {
    return new Promise((resolve, reject) => {
      Order.findByIdAndUpdate(id, params, { new: true })
        .then(order => {
          resolve(order.summary())
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  delete (id) {
    return new Promise((resolve, reject) => {
      Order.findByIdAndRemove(id)
        .then(() => {
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

module.exports = OrderController

