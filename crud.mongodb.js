
// CRUD Operations

use("CrudDb")

// Create

db.createCollection("courses")

// Insert

db.courses.insertOne({
    name: "Tushar",
    class: "12Th",
    percentage: "88.7",
    year: "2022"
})

 db.courses.insertMany([
    {
        name: "Rahul",
        class: "10th",
        percentage: "92.3",
        year: "2022"
    },
    {
        name: "Priya",
        class: "11th",
        percentage: "85.6",
        year: "2022"
    },
    {
        name: "Neha",
        class: "12th",
        percentage: "91.0",
        year: "2022"
    }
 ])


//  Read

// let x = db.courses.find({year:"2022"})

// console.log(x.toArray())

// let y = db.courses.findOne({year:"2022"})

// console.log(y)

// Update

// db.courses.updateOne({year:"2022"} , {$set:{year:"2021"}})

// db.courses.updateMany({year:"2022"} , {$set:{year:"2020"}})

// delete

db.courses.deleteMany({year:"2021"})
