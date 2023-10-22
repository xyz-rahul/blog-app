const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

// Load environment variables from a .env file
dotenv.config();
app.use(express.json());
// Middleware for URL encoding
app.use(express.urlencoded({ extended: false }));
// Middleware for cookie parsing
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173', // Replace with the allowed origin
  // methods: 'GET,POST', // Allow only specific HTTP methods
  // allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
};

app.use(cors(corsOptions));
// app.use(cors());

// Import routes
const userRoutes = require(path.join(__dirname, 'routes', 'userRoutes'));
const blogRoutes = require(path.join(__dirname, 'routes', 'blogRoutes'));
const commentRoutes = require(path.join(__dirname, 'routes', 'commentRoutes'));
app.use(userRoutes);
app.use(blogRoutes);
app.use(commentRoutes);

// Connect to the database
const sequelize = require(path.join(__dirname, 'db', 'dbConfig.js'));

sequelize
  .authenticate()
  .then(() => {
    console.log('DB connection established');
    
    // Set up tables and relations
    const setUpAssociation = require(path.join(__dirname, 'db', 'association.js'));
    setUpAssociation();
    console.log('All models were synchronized successfully.');
  })
  .then(() => {
    console.log('Tables and relations are created');
    return sequelize.sync({ force: true }); // table are dropped and recreated on startup
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });



// Start the server
try {
  if (process.env.PORT === undefined) throw new Error('PORT not defined');
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
} catch (error) {
  console.log('Error:', error.message);
}


