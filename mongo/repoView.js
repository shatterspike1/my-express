var _ = require('lodash')
module.exports = function(app) {
    
    app.get('/repo/view/:id', function(req, res){
        
        var repos = app.db.get('repos')
        
        var q = {}
        
        repos.find(q, function(err, rs){
        
            var repo = _.find(rs, function(r) { return r.id == req.params.id})
        
            res.render('repoView.jade', {
                repo: repo
            })
        
        })
    })

}