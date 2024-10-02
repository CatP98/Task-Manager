const dotenv = require('dotenv'); // To manage environment variables
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' }); // Load environment variables

const Task = require(`./../models/taskModel`);

const DB = process.env.DATABASE_LOCAL; // Get the database URL from environment variables


// READ JSON FILE

const tasks = require('./tasks.json'); // Load tasks from JSON file

const loadTasks = async () => {
    try {
        await Task.create(tasks); // Wait for tasks to be created
        console.log('Tasks successfully loaded from file to DB!! 🤩');
    } catch (err) {
        console.error('Error loading the tasks:', err); // Log the error
    }
};


//DELETE ALL THE DATA FROM DB

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
        await mongoose.connect(DB, {
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
