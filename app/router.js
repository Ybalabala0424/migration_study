// 'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app
    router.resources('user', '/users', controller.users)
    router.resources('task', '/tasks', controller.tasks)
}
