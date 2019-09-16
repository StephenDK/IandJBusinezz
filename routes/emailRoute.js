

module.exports = app => {

    app.get('/', (req, res) => {
        res.send('hello world');
    })
    // email route
    app.post('/email', (req, res) => {
        console.log(req.body)
        // Send email from user to Iliena and Jacky
    })
}