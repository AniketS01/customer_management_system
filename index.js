const mongoose = require('mongoose')
const People = require('./models/peoples')


mongoose.promise = global.Promise
// connecting database
const db = mongoose.connect('mongodb://localhost:27017/customercli',{useNewUrlParser: true, useUnifiedTopology: true})

// Add people
const addPeople = (people) => {
    People.create(people).then(people => {
        console.info('person added......')
       client.close()
    })
}

// find
const findPeople = name => {
    const search = new RegExp(name, 'i')
    People.find({name: search}).then(name => {
        console.info(name)
        db.close()
    })
}

//update
const updatePeople = (_id, people) => {
    People.update({ _id }, people).then(people => {
        console.info('customer update')
        db.close()
    })
}

//people
const listPeople = () =>{
    People.find().then(people => {
        console.info(people)
        console.info(`${people.length} people`)
       db.close()
    })
}

// delete
const removePeople = (_id) => {
    People.remove({ _id }).then(people => {
        console.info('customer deleted........')
       db.close()
    })
}

module.exports = {addPeople, findPeople, updatePeople, removePeople, listPeople}