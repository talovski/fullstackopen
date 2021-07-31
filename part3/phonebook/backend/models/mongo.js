// mongodb+srv://happens-nika-1:uknc33gz@cluster0.fmbkr.mongodb.net/phonebook?retryWrites=true&w=majority

const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}
 

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://happens-nika-1:${password}@cluster0.fmbkr.mongodb.net/phonebook?retryWrites=true&w=majority
  `
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

if (process.argv.length === 3) {
  Phonebook.find({}).then(result => {
    result.forEach(person => console.log(person))
    mongoose.connection.close()
}
  )}

if (process.argv.length === 5) {
  const person = new Phonebook({
    name: name,
    number: number
  })
  person.save().then(result => {
    console.log(`${name} with phone number ${number} was added to the phonebook`)
    mongoose.connection.close()
  })
}

// Phonebook.find({}).then(result => {
//   result.forEach(person => {
//     console.log(person)})
//   mongoose.connection.close()
// })
// const person = new Phonebook({
//   name: 'Boris Johnson',
//   number: 'INFOWARS.CO.UK',
// })

// person.save().then(result => {
//   console.log('person saved!')
//   mongoose.connection.close()
// })
