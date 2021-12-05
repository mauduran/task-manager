# Task Manager Backend

REST API created in NodeJs to be used as a means of task managements:

# Endpoints

## User

`/user`:
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
  
`/user/login`:
- POST: 
  - **What it does**:Logs a user in
  - **Requires Authorization Token**: No
  - **Body**: `{username: string, password: string}`
  - **Returns**:
    - 200: When the user was created. Response: `{ success: true, token: Authorization Token, username: Username}` 
    - 400: When credentials are invalid or any other error occurs. `{success: false, message:'Unable to create users'}`


