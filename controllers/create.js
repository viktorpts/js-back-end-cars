module.exports = {
    get(req, res) {
        res.render('create', { title: 'Create Listing' });
    },
    post(req, res) {
        console.log(req.body);
        
        res.redirect('/');
    }
};