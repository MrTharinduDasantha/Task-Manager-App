# Task Management App

A simple task management application built using React (frontend) and Node.js with MySQL (backend). This application allows users to add, edit, delete, and filter tasks based on their status (Completed, Not Completed, All).


## Demo

By clicking this link you can see the demonstration of the task management app.

Link 👉 https://drive.google.com/file/d/1fv5oivgJvF6oLoahqo4-VJpjvy_NWjU0/view?usp=sharing 👈


## Features

- Add Task: Create new tasks with a name, description, and status.
- Edit Task: Update the details of an existing task.
- Delete Task: Remove tasks from the list.
- Mark as Completed: Toggle the completion status of a task.
- Filter Tasks: View tasks based on their status (All, Completed, Not Completed).


## Technologies Used

### Frontend
- React with Hooks
- Tailwind CSS
- Axios for API calls
- React Toastify for notifications

### Backend
- Node.js with Express
- MySQL database
- dotenv for environment variables


## Installation

Clone the repository and navigate to each project folder to install dependencies.
```bash
  git clone https://github.com/MrTharinduDasantha/Task-Management-App.git
  cd Task-Management-App
```
#### Folder Setup
The project is divided into two main folders: frontend and backend. You will need to install dependencies for each.
- Navigate to each folder (frontend and backend) and run.
```bash
npm install
```
#### Environment Variables
Before running the app, configure the .env file in the backend folder with the necessary environment variables.
- Create .env file in the backend folder.
- Replacing placeholders with your own values.
```bash
PORT = 5000
DB_HOST = Enter your database host name
DB_USER = Enter your database username
DB_PASSWORD = Enter your database password
DB_NAME = Enter your database name
DB_PORT = 3306
```
#### Run the Project.
- Start the backend server
```bash
cd backend
node app.js
```
- Start the frontend
```bash
cd ../frontend
npm run dev
```


## Usage
1. Open the application in your browser (http://localhost:5173).
2. Use the "Add Task" form to create new tasks.
3. Use the "Edit" button to modify an existing task.
4. Use the "Delete" button to remove tasks.
5. Toggle task completion using the "Mark as Complete" or "Mark as Incomplete" buttons.
6. Filter tasks by clicking the "All," "Completed," or "Not Completed" buttons.



## Screenshots

![image alt](https://github.com/MrTharinduDasantha/Task-Manager-App/blob/4cca78570be31972631aaaae4ea58edcfd3f1e49/Img%20-%201.png)
![image alt](https://github.com/MrTharinduDasantha/Task-Manager-App/blob/4cca78570be31972631aaaae4ea58edcfd3f1e49/Img%20-%202.png)

<h4 align="center"> Don't forget to leave a star ⭐️ </h4>
