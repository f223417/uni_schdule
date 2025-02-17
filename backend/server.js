const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Our timetable now includes multiple weeks and a holiday announcement
let timetable = {
  weeks: {
    week1: {
      Monday: [
        { time: "08:45 - 10:15", subject: "Software Engineering", teacher: "Saba Naseem", room: "R-10" },
        { time: "10:30 - 12:00", subject: "Parallel Computing", teacher: "Aliza Saeed", room: "R-12" }
      ],
      Tuesday: [
        { time: "08:45 - 10:15", subject: "AI Lab", teacher: "Aqsa Younas", room: "Lab 2" }
      ],
      Wednesday: [
        { time: "08:45 - 10:15", subject: "Artificial Intelligence", teacher: "Mahzaib Younas", room: "R-6" }
      ],
      Thursday: [
        { time: "08:45 - 10:15", subject: "Business Writing", teacher: "Nouman Iftikhar", room: "FSM R-6" }
      ],
      Friday: [
        { time: "08:45 - 10:15", subject: "Computer Networks Lab", teacher: "Rabia Anwar", room: "Lab 4" }
      ]
    },
    week2: {
      Monday: [
        { time: "08:45 - 10:15", subject: "Data Structures", teacher: "Dr. Asif", room: "R-2" }
      ],
      Tuesday: [
        { time: "08:45 - 10:15", subject: "Algorithms", teacher: "Dr. Saeed", room: "R-3" }
      ],
      Wednesday: [
        { time: "08:45 - 10:15", subject: "Operating Systems", teacher: "Dr. Kamran", room: "R-4" }
      ],
      Thursday: [
        { time: "08:45 - 10:15", subject: "Database Systems", teacher: "Dr. Ahsan", room: "R-5" }
      ],
      Friday: [
        { time: "08:45 - 10:15", subject: "Computer Networks", teacher: "Dr. Umar", room: "R-7" }
      ]
    }
  },
  holiday: {
    announcement: "",  // e.g. "University closed on 15th due to holiday."
    startDate: "",     // Format: "YYYY-MM-DD"
    endDate: "",       // Format: "YYYY-MM-DD"
    displayDuration: 10  // seconds (fixed)
  }
};

// Route to get the timetable data
app.get("/api/timetable", (req, res) => {
  res.json(timetable);
});

// Route to update the timetable data (including holiday info)
app.post("/api/timetable", (req, res) => {
  timetable = req.body;
  res.json({ message: "Timetable updated successfully!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
