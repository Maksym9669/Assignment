const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const utils = require("./utils");
let users = require("./users");
let users_statistics = require("./users_statistics");
//In case we need post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// function calculateTotalClicksAndViews(users, users_statistics) {
//   let usersCopy = users.slice();
//   for (let user of usersCopy) {
//     let totalPageViews = 0,
//       totalClicks = 0;
//     for (let entry of users_statistics) {
//       if (user.id == entry.user_id) {
//         totalPageViews += entry.page_views;
//         totalClicks += entry.clicks;
//       }
//     }
//     user.total_page_views = totalPageViews;
//     user.total_clicks = totalClicks;
//   }
//   return usersCopy;
// }

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];

  res.json(utils.calculateTotalClicksAndViews(users, users_statistics));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);
