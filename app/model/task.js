
module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize

    const Task = app.model.define('task', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        userid: STRING,
        taskName: {type: STRING},
        deadline: INTEGER,
        created_at: DATE,
        updated_at: DATE,
    })

    return Task
}
