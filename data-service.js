/*********************************************************************************
* BTI325 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: LO TSZ KIT Student ID: 160067211 Date: 2022/09/29
*
* Online (Cyclic) URL:https://plum-mysterious-cockatoo.cyclic.app/
* _______________________________________________________
*
********************************************************************************/
const fs = require("fs")

let employees = []
let departments = []

function initialize(){
    return new Promise( 
        (resolve,reject)=>{
    
        fs.readFile('./data/employees.json',(err,data)=>{
            if (err)reject("Failure to read file employees.json!")
            employees = JSON.parse(data);
           // console.log(employees[0])
    
            fs.readFile('./data/departments.json',(err,data)=>{
                if (err) reject("Failure to read file employees.json!");
                departments = JSON.parse(data)
               // console.log(departments[0])
                resolve("success reading data")
            }) 
    
        })
    })

 
} 


function getAllEmployees(){
    return  new Promise( (resolve,reject)=> {
        employees.length > 0 ? resolve(employees) : reject("Data not found!")   
    })  
} 


function getManagers (){ return new Promise( (resolve,reject)=> {
    let managers = employees.filter(employee=>employee.isManager==true)
    employees.length > 0 ? resolve(managers) : reject("Data not found!") 

})}
function getDepartments (){ return new Promise( (resolve,reject)=> {

    employees.length > 0 ? resolve(departments) : reject("Data not found!") 

})}

module.exports = {
    initialize,
    getAllEmployees,
    getManagers,
    getDepartments
}