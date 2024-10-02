const mongoose = require('mongoose');

// Set the Schema
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false, // Default value if not provided
    },
    description: {
        type: String,
        default: '' // Default to an empty string if not provided
    }
});

// Create the Model
const Task = mongoose.model('Task', taskSchema);

// Export the Model
module.exports = Task;




// class Task {
//     constructor(id, name, dueDate, completed = false, description = '') {
//         this.id = id; // Unique identifier for the task
//         this.name = name; // Name of the task
//         this.dueDate = new Date(dueDate); // Due date of the task
//         this.completed = completed; // Status of the task
//         this.description = description; // Description of the task
//     }
// }

// // Export the Task class
// module.exports = Task;
