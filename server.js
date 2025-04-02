const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
/*
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB connection successful"))
  .catch(() => console.log("Erro connecting to the database"));
*/

// Start server
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`App is running on http://127.0.0.1:${port}`);
});
