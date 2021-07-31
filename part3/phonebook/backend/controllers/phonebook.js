const phonebookRouter = require('express').Router
const Phonebook = require('../models/phonebook')

phonebookRouter.get('/', (request, response) => {
  Phonebook.find({})
    .then(persons => {
      response.json(persons)
    })
})

phonebookRouter.get('/:id', (request, response) => {
  Phonebook.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
})

phonebookRouter.delete('/:id', (request, response) => {
  Phonebook.findByIdAndRemove(request.params.id).then(result => {
    response.status(204).end()
  })
})

phonebookRouter.post('/', (request, response, next) => {
  const body = request.body

  if (body.name === undefined && body.number === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = new Phonebook({
    name: body.name,
    number: body.number
  })

  person
    .save()
    .then(savedPerson => response.json(savedPerson))
    .catch(error => next(error))
})

phonebookRouter.put('/:id', (request, response) => {
  const body = request.body

  const updatedPerson = {
    name: body.name,
    number: body.number
  }
  Phonebook.findByIdAndUpdate(request.params.id, updatedPerson, { new: true })
    .then(result => response.json(result))
})

module.exports = phonebookRouter