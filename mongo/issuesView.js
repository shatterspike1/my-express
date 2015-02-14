var _ = require('lodash')
module.exports = function(app) {
    
    app.get('/issues/view/:id', function(req, res){
        
        var issues = app.db.get('issues')
        
        var q = {}
        
        issues.find(q, function(err, iss){
        
            var issue = _.find(iss, function(i) { return i.id == req.params.id})
        
            res.render('issuesView.jade', {
                issue: issue
            })
        })
    })

}