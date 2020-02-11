const axios = require("axios");

function createNonProfit(nonprofit) {
    return axios
        .post("mongodb+srv://Arnaud:mdpsimple>@cluster0-4kyfe.mongodb.net/NonProfit?retryWrites=true&w=majority", incubator)
        .then(result =>{
            return result
        })
        .catch(err =>{
            return err
        })
}

function findNonProfit(id) {
    return axios
        .get("mongodb+srv://Arnaud:mdpsimple>@cluster0-4kyfe.mongodb.net/NonProfit?retryWrites=true&w=majority"+id)
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })
}

function modifyNonProfit(id, new_data) {
    return axios
        .patch("mongodb+srv://Arnaud:mdpsimple>@cluster0-4kyfe.mongodb.net/NonProfit?retryWrites=true&w=majority"+id, new_data)
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })
}

function deleteNonProfit(id) {
    return axios
    .delete("mongodb+srv://Arnaud:mdpsimple>@cluster0-4kyfe.mongodb.net/NonProfit?retryWrites=true&w=majority"+id)
    .then(result => {
        return result
    })
    .catch(err => {
        return err
    })
}


let new_nonprofit = 
{
    name: 'Laureles Non profit',
    neighborhood: "Laureles",
    description: "test non profit",
    website: "www.nonprofit.com",
    address: "Parque Segundo",
    schedule: "from 9 to 19",
    updated: Date.now,
    is_active: true
}

let new_data = 
{
    name: 'Non profit Laureles 2'
}

createNonProfit(new_nonprofit)
.then(({data}) =>{
    console.log("Creating NonProfit")
    return findNonProfit(data.id)
})
.then(({data}) =>{
    console.log("Modification")
    return modifyNonProfit(data.id, new_data)
})
.then(({data}) =>{
    console.log("Deleting")
    return deleteNonProfit(data.id)
})
.catch(err =>{
    console.log(err)
})