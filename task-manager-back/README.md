# Task Manager Backend

REST API created in NodeJs to be used as a means of task managements:

# Endpoints

## User

### `/user`:
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
  
### `/user/login`:
- POST: 
  - **What it does**:Logs a user in
  - **Requires Authorization Token**: No
  - **Body**: `{username: string, password: string}`
  - **Returns**:
    - 200: When the user successfuly logs in. Response: `{ success: true, token: Authorization Token, username: Username}` 
    - 400: When credentials are invalid or any other error occurs. `{success: false, message:'Unable to create user'}`

## Task

### `/task`:
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
    - 200: When list of tasks could be fetched. Response: `{ success: true, tasks: List of tasks with condensed information }` 
    - 400: When any  error occurs. `{success: false, message:'Unable to fetch tasks'}`

### `/task/:id`:
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

