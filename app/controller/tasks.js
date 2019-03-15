const Controller = require('egg').Controller
function toInt(str) {
    if (typeof str === 'number') return str
    if (!str) return str
    return parseInt(str, 10) || 0
}
class TaskController extends Controller {

    async show() {
        const ctx = this.ctx
        ctx.body = await ctx.model.Task.findAll({
            where: {
                userid: toInt(ctx.params.id),
            }
        })
    }
}
module.exports = TaskController
