import express from "express";

const app = express();
const port = process.env.PORT || 8066;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
