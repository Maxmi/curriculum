const url = require('url')
// const bodyParser = require('body-parser')
// const queries = require('../../database/queries')
// const commands = require('../../database/commands')
// const goalsById = require('../../goals/goals')

module.exports = app => {

  app.use('/admin', app.ensureAdmin)
  app.get('/admin', (request, response) => {
    response.render('admin/index')
  })
}
