module.exports = {
    async home(req, res) {
        const cars = await req.storage.getAll();
        
        res.render('index', { cars, title: 'Carbicle' });
    }
};