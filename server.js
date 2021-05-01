const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const routes = {
  "/pharmacies": "returns pharmacies list for in a specific area",
  "/colleges": "returns colleges list for in a specific area",
  "/doctors": "returns doctors list for in a specific area",
  "/hospitals": "returns hospitals list for in a specific area",
};

app.use(express.json());

app.get("/", (request, response) => {
  response.status(200);
  response.json(routes);
});

const listener = app.listen(PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
