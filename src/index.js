const express = require("express");
const { v4: uuidv4 } = require("uuid")

const app = express();

app.use(express.json());

const costomers = [];

app.post("/account", (request, response) => {
    const { name, cpf } = request.body;

    const customerAlreadyExists = costomers.some(
        (customer) => customerAlreadyExists.cpf === cpf
        );
    if(customerAlreadyExists) {
        return response.status(400).json( { error: "Customer already exists!"});
    }

    costumers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: [],
    });
    return response.status(201).send();

});

app.listen(3333);