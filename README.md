# API JWT Auth Example 

- Sequelize ORM
- MySQL / MariaDB
- JWT
- CORS


## Getting Started

- Run the project
- Signup with api signup use data : 
  ```
  {
    "username": "mod",
    "email": "mod@irufano.com",
    "password": "1234567890",
    "roles": ["mod", "user"]
  }
  ```

  ```
  Available role is : "admin", "admin", "user"
  ```

- Signin with api signin
- Get token from signin response
- Access test api using additional header :
  ```
  "Authorization" : "Bearer your_token" 
  ```
- Test your api with different role