const express = require("express");

const app = express();

const courses = [{
    name: "java", id: 1
}, {
    name: "python", id: 2
}, {
    name: "javascript", id: 3
}]

// get, post , put , delete

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/about", (req, res) => {
    res.send("about page")
})

app.get("/contact", (req, res) => {
    res.send("contact us a abcd@abcd.com")
})

// route parameters

app.get("/user/:id", (req, res) => {
    res.send(req.params.id)
})

app.get("/course/:id", (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) res.status(404).send("data not found")
    res.send(course)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server is run in port ${PORT}`);
})