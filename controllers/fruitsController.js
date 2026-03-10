const { response } = require('express')
const FruitModel = require('../models/FruitModel')

const showAllFruits = async ( request, response) => {
    try {
        const fruits = await FruitModel.showAllFruits()
        response.status(200).send(fruits)
    } catch(error) {
        response.status(500).send({error: error})
    }
}

const showFruit = async (request, response) => {
    const name = request.params.name.toLowercase()
    try {
    const fruit = await FruitsModel.showFruit(name)
    response.status(200).send(fruit)
    } catch(error){
       response.status(404).send ({error: error})
    }
}

const createFruit = async (request, response) => {
    try{
        const newFruit = await FruitModel.create(request.body);
        response.status(201).send(newFruit);
    }catch (error) {
        response.status(409).send({error: error});
    }
}

const updateFruit = async (request, response) => {
    const name = request.params.name.toLowercase();

    try{
        const fruit = await FruitModel.showFruit(name);
        const result = await fruit.update(request.body)

        response.status(200).send(result);
    }catch (error) {
        response.status(404).send({error: error});
    }
}


const deleteFruit = async (request, response) => {
    const name = request.params.name.toLowercase();

    try{
        const fruit = await FruitModel.showFruit(name);
        const result = await fruit.delete(request.body)

        response.status(200).send(result);
    }catch (error) {
        response.status(404).send({error: error});
    }
}

module.exports = {showAllFruits, showFruit, createFruit, updateFruit, deleteFruit}
