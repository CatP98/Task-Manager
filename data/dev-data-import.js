const fs = require('fs'); // To interact with the JSON file from where we want to fetch the data
const dotenv = require('dotenv'); // To manage environment variables
const mongoose = require('mongoose');

dotenv.config({ path: './../config.env' }); // Load environment variables

const Task = require(`./../models/taskModels.js`);
const tasks = require('./tasks.json'); // Load tasks from JSON file

const db = process.env.DATABASE_LOCAL; // Get the database URL from environment variables

const loadTasks = async () => {
    try {
        await Task.create(tasks); // Wait for tasks to be created
        console.log('Tasks successfully loaded from file to DB!! 🤩');
    } catch (err) {
        console.error('Error loading the tasks:', err); // Log the error
    }
};

const deleteTasks = async () => {
    try {
        await Task.deleteMany(); // Delete all tasks
        console.log('Tasks successfully deleted from DB!! 🫣');
    } catch (err) {
        console.error('Error deleting the tasks:', err); // Log the error
    }
};

(async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log('App connected to the database!! 🥳');

        // Check command-line arguments to determine action
        if (process.argv[2] === '--delete') {
            await deleteTasks();
        } else if (process.argv[2] === '--import') { // Corrected space
            await loadTasks();
        } else {
            console.log("Please specify '--import' or '--delete'");
        }

        await mongoose.disconnect();
    } catch (err) {
        console.error('Error connecting to DB:', err); // Log the error
    }
})();
