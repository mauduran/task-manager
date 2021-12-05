# Task Manager Backend

REST API created in NodeJs to be used as a means of task managements:

## Environment
- **PORT**: Used to set the port the server listens to. Defaults to 3001
- **MONGODB_URI** - Connection string for MongoDB database
- **TOKEN_SECRET** - Secret used to sign JWT tokens

## Endpoints

### User

#### `/user`:
- POST: 
  - **What it does**: Registers a new User.
  - **Requires Authorization Token**: No
  - **Body**: `{name: string, username: string, password: string}`
  - **Returns**:
    - 201: When the user was created. Response: `{ success: true, message: "User created"}` 
    - 409: When a user with that username already exists. Response: `{success: false, message:'User Already Exists'}`
    - 400: With any other error such as missing fields. Response: `{success: false, message:'Unable to create users'}`

- GET: 
  - **What it does**: Gets list of all users  without compromising information.
  - **Requires Authorization Token**: No
  - **Body**: None
  - **Returns**:
    - 200: When the user was created. Response: `{ success: true, users: List of Users}` 
    - 400: With error. Response: `{success: false, message:'Unable to get users'}`
  
#### `/user/login`:
- POST: 
  - **What it does**:Logs a user in
  - **Requires Authorization Token**: No
  - **Body**: `{username: string, password: string}`
  - **Returns**:
    - 200: When the user successfuly logs in. Response: `{ success: true, token: Authorization Token, username: Username}` 
    - 400: When credentials are invalid or any other error occurs. `{success: false, message:'Unable to create user'}`

### Task

#### `/task`:
- POST: 
  - **What it does**: Creates a new task
  - **Requires Authorization Token**: YES
  - **Body**:  
      ``` 
      { 
        title: string, 
        description: string, 
        dateOfDelivery: Date, 
        commments: string (Optional), 
        responsiblePerson: string (Optional),
        tags: string[] (Optional)
      } 
       ```
  - **Returns**:
    - 201: When the task was created. Response: ` {success: true, message: "Task created"} ` 
    - 400: With any error such as missing fields. Response: ` {success: false, message:'Unable to create task'} `
- GET: 
  - **What it does**: Gets all tasks for a user.
  - **Requires Authorization Token**: YES
  - **Body**: None
  - **Returns**:
    - 200: When list of tasks could be fetched. Response: `{ success: true, tasks: List of tasks }` 
    - 400: When any  error occurs. `{success: false, message:'Unable to fetch tasks'}`

#### `/task/:id`:
- PUT: 
  - **What it does**: Creates a new task
  - **Requires Authorization Token**: YES
  - **Body**:  
      ``` 
      { 
        title: string (Optional), 
        description: string (Optional), 
        dateOfDelivery: Date (Optional), 
        commments: string (Optional), 
        responsiblePerson: string (Optional),
        tags: string[] (Optional),
        status: string (Optional),
      } 
       ```
  - **Returns**:
    - 201: When task is updated. Response: ` {success: true, message: "Task created"} ` 
    - 400: With any error such as missing fields. Response: ` {success: false, message:'Unable to create task'} `

- GET: 
  - **What it does**: Gets a task given its id.
  - **Requires Authorization Token**: YES
  - **Body**: None
  - **Returns**:
    - 200: When the task is found.  Response: `{ success: true, task: Task with all its info }` 
    - 400: When any  error occurs. `{success: false, message:'Unable to get task'}`

- Delete: 
  - **What it does**: Deletes a task given its id.
  - **Requires Authorization Token**: YES
  - **Body**: None
  - **Returns**:
    - 200: When the task is deleted.  Response: `{ success: true, message: 'Task deleted' }` 
    - 400: When any error occurs. `{success: false, message:'Unable to delete task'}`

## Project structure
server.js is the entrypoint of the project. I sets up the server and begins to listen to requests.

src contains different subfolders that take care of different responsibilities.

### Constants
List of constants to be used in the code to avoid typos. 

### Controllers
Files in charge of implementing the core logic of the endpoints.
Each file defines a function for each endpoint to be used.

**Current controllers**:
- `user.controller.js`
- `task.controller.js`

### Routes
Files that define the paths and methods of the endpoints.
Routes leverage the functions implemented on the controller files to keep the files clean.

**Current routes**
- `user.routes.js`
- `task.routes.js`

### Middlewares
Files that do some treatment on the incoming requests before or after the controller function is executed.

**Current middlewares**
- `authentication.middleware.js`
- `validateLoginBody.middleware.js`
- `validateNewUser.middleware.js`
- `validateUpdatedTask.middleware.js`

### Models
Files that define the data model for objects to be stored in the MongoDB store.
Defines attributes, data types and form of the data.

**Current models**
- `task.model.js`
- `user.model.js`

### Schemas
Files that use yup to define the schema of the incoming request bodies to make sure it aligns with the desired input.

**Current schemas**
- `login.schema.js`
- `newTask.schema.js`
- `newUser.schema.js`
- `updatedTask.schema.js`


