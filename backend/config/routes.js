

module.exports = app => {
    app.route('/users')
        .get(app.api.user.get)
        .post(app.api.user.save)
        

    app.route('/users/:id')
        .get(app.api.user.getById)
        .put(app.api.user.save)

    app.route('/categories')
        .get(app.api.category.get)
        .post(app.api.category.save)

    // cuidado com a ordem das rotas as especificas devem vir antes das genericas

    app.route('/categories/tree')
        .get(app.api.category.getTree)

    app.route('/categories/:id')
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove) 

        
    app.route('/articles')
        .get(app.api.article.get)
        .post(app.api.article.save)

    app.route('/articles/:id')
        .get(app.api.article.getById)
        .put(app.api.article.save)
        .delete(app.api.article.remove)
       
}