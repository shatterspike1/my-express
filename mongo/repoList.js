var _ = require('lodash')
module.exports = function(app) {
    
    app.get('/repo/list', function(req, res){
    
        var repos = app.db.get('repos')
        
        var q = {}
        
        repos.find(q, function(err, rs){
        
            res.render('repoList.jade', {
                repos: rs
            })
        console.log(rs)
        })
    
    })

}