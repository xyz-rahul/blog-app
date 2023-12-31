# Blog App Read Me

## Features

- **User-Friendly Interface**: The app provides an intuitive user interface with a homepage showcasing cards of various blogs. You can easily navigate to create and view blog pages.

- **Create Blogs**: Users can create their blogs by providing a title, content, and an optional image.

- **View Blogs**: Explore a wide range of blogs created by others in the community. Click on a blog card to view the full blog content.

## Tech Stack

### Backend

- **Node.js**: A JavaScript runtime used for building the server-side of the application.

- **Express.js**: A fast, minimal, and flexible Node.js web application framework that is used for creating middleware and routing.

- **Sequelize**: A powerful and flexible ORM for Node.js that allows you to interact with your database using JavaScript.

### Frontend

- **React**: A popular JavaScript library for building user interfaces. The frontend of the app is built using React, providing a smooth and responsive user experience.

- **React Router DOM**: The application uses React Router DOM for handling client-side routing. This allows for seamless navigation between different sections of the app, including viewing blogs and creating new ones, all without requiring a full page reload.

### Home Page
![home](https://github.com/xyz-rahul/blog-app/assets/77181531/e10d5ce4-18f9-459f-8f47-efbb257a222b)
### Create Page
![create](https://github.com/xyz-rahul/blog-app/assets/77181531/712db558-232b-4911-8d1c-3a193572117f)
### View Page
![view](https://github.com/xyz-rahul/blog-app/assets/77181531/217f56cf-5bfb-4ddf-831e-126c3fa6f605)



## Setup

Follow these steps to set up the Blog App on your local machine:

1. Clone the repository:
```

git clone <repository-url>

```

2. Install dependencies:

- For the backend (Node.js and Express), navigate to the `backend` directory and run:
  ```
  cd backend
  npm install
  ```

- For the frontend (React and React Router DOM), navigate to the `frontend` directory and run:
  ```
  cd frontend
  npm install
  ```

3. Set up your `.env` file for the backend:
- In the `backend` directory, create a `.env` file and configure the necessary environment variables, such as database connection details, API keys, and any other sensitive information.

4. Start the server:
- In the `backend` directory, run:
  ```
  npm start
  ```

5. Start the React frontend:
- In the `frontend` directory, run:
  ```
  npm start
  ```

6. Open your web browser and go to `http://localhost:3000` to access the Blog App.
