const mongoose = require('mongoose')

// Function to clear all models and schemas
function clearMongooseModels() {
    // Clear all the models
    Object.keys(mongoose.models).forEach((modelName) => {
        delete mongoose.models[modelName]
    })

    // Clear all the schemas
    Object.keys(mongoose.modelSchemas).forEach((schemaName) => {
        delete mongoose.modelSchemas[schemaName]
    })

    console.log('Mongoose models and schemas cleared')
}

// Call the function before reloading models or restarting the project
clearMongooseModels()
