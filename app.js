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

app.use(express.json())

// route parameters

//  get specific course
app.get("/course/:id", (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) res.status(404).send("Data not found")
    res.send(course)
})

//get all courses
app.get("/courses", (req, res) => {
    res.send(courses)
})

// add new course
// create

app.get("/courses", (req, res) => {
    res.send(courses)
})
app.post("/courses", (req, res) => {
    console.log("req.body::", req.body, req.body.name);
    const courseName = req.body.name
    if (typeof courseName !== 'string') return res.status(404).send("Bad Request")
    const course = courses.find(course => course.name === courseName);
    if (course) return res.status(400).send("Data Already Exists")
    const addCourse = {
        name: courseName,
        id: courses.length + 1
    }
    courses.push(addCourse);
    res.status(200).send({
        msg: "Data Added",
        ...courses
    })
})

// put method
app.put("/courses/:name", (req, res) => {
    const courseName = req.params.name
    const newName = req.body.name
    if (typeof newName !== 'string') return res.status(404).send("Bad Request")
    const course = courses.find(course => course.name === courseName);
    course.name = newName;
    res.status(201).send({
        msg: "Data updated",
        ...courses
    })
})

// delete Method
app.delete("/courses/:id", (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    console.log("id", req.params.id, course);
    if (!course) return res.status(404).send("Data not found");
    const index = courses.indexOf(course)
    console.log("index", index);
    courses.splice(index, 1);
    res.send(course)

})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server is run in port ${PORT}`);
})