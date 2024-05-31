const dotenv = require("dotenv");
const app = require("./app");
const connectDb = require("./db/connectDB");
dotenv.config();

connectDb();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening on port : ${PORT}`);
});
