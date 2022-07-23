const express = require("express");
const mongoose = require("mongoose");
const employeeRoutre = require("./routes/employeeRoute");

const app = express();

const connectWithRetry = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db connected "))
    .catch((e) => {
      console.log("db connection error", e);
      setTimeout(connectWithRetry, 5000);
    });
};
connectWithRetry();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello  oooworld");
});

app.use("/api/employees", employeeRoutre);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server runing on port ${port}`);
});
