const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", MessageSchema);

const Message = mongoose.model("Message", MessageSchema);

// SAVE MESSAGE
app.post("/contact", async (req, res) => {
  try {
    const newMessage = new Message(req.body);

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message saved!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
});

// GET ALL MESSAGES
app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();

    res.json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});