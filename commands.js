#!/usr/bin/env node
const program = require('commander')
const {prompt} = require('inquirer')
const {addPeople, findPeople, updatePeople, removePeople, listPeople} = require('./index')


//questions
const questions = [
    {
        type:'input',
        name: 'name',
        message:'Name:'
    },
    {
        type:'input',
        name: 'phone',
        message:'phone number:'
    },
    {
        type:'input',
        name: 'email',
        message:'email:'
    },
    {
        type:'input',
        name: 'adress',
        message:'adress:'
    },
]


program.version('1.0.0').description('people mangement system')



// add
program.command('add').alias('a').description('add a person').action(() => {
    prompt(questions).then(answers => addPeople(answers))
})


//find
program.command('find <name>').alias('f').description('find')
.action(name => findPeople(name))

//update
program.command('update <_id>').alias('u').description('update a person').action((_id) => {
    prompt(questions).then((answers) => updatePeople(_id, answers))
})

//delete 
program.command('delete <_id>').alias('d').description('delete a person').action(_id => removePeople(_id))

//people 
program.command('list').alias('l').description('list all people').action(() => listPeople())

program.parse(process.argv)