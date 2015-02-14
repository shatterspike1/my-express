var _ = require('lodash')
module.exports = function(app) {
    
    app.get('/issues/list', function(req, res){
    
        var issues = app.db.get('issues')
        
        var q = {}
        
        issues.find(q, function (err, iss){
        
            res.render('issuesList.jade', {
                issues: iss
            })
        
        })
    
    })

}