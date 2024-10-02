const Task = require('../project-manager/models/taskModel.js');
const express = require('express');

const app = express();


exports.saveTasks(){}; //before exiting class

const tasks = loadTasks();

const loadTasks = ();//once program starts running

// '/'
exports.getAllTaks = async() => {
    try{


    }
    catch (err){
        console.err('Error gettin all the tasks', err);    
    }
};

exports.createTask = () {};

exports.deleteTasks = (){};



// '/:id'
exports.getTask = (){};

exports.updateTask = (){};

exports.deleteTask = (){};
