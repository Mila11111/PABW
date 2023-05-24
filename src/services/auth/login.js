const axios = require("axios");

async function login(username, password) {
  try {
    const response = await axios.post(
      "https://bbd89567-4a06-46ae-8f03-cb1ea6652289.mock.pstmn.io/login",
      {
        username,
        password,
      }
    );

    // Process the response data
    const { token } = response.data;
    console.log("Login successful!");
    console.log("Token:", token);

    // You can perform additional actions after successful login
  } catch (error) {
    console.error("Login failed:", error.message);
  }
}

// Usage
const username = "your_username";
const password = "your_password";

login(username, password);
