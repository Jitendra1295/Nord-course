function Mymiddleware(req, resp, next) {
    console.log("I am Middleware ");
    next()

}
module.exports = Mymiddleware 