# Task Manager Backend

REST API created in NodeJs to be used as a means of task managements:

# Endpoints

## User

`/user`:
- POST: 
  - **What it does**: Registers a new User.
  - **Body**: 
  - **Returns**:
    - 201: When the user was created. `{ success: true, message: "User created"}` 
    - 409: When a user with that username already exists. `{success: false, message:'User Already Exists'}`
    - 400: With any other error. `{success: false, message:'Unable to create users'}`

- GET: Get list of all users

`/user/login`:
- POST: Log a user in 
