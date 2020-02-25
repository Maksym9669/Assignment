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
  // const page = parseInt(req.query.page);
  // const limit = parseInt(req.query.limit);

  const page = 5;
  const limit = 50;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const resultUsers = users.slice(startIndex, endIndex);

  let result = {
    results: utils.calculateTotalClicksAndViews(resultUsers, users_statistics)
  };

  if (endIndex < users.length) {
    result.next = {
      page: page + 1,
      limit: limit
    };
  }

  if (startIndex > 0) {
    result.previous = {
      page: page - 1,
      limit: limit
    };
  }

  console.log(result);
  res.json(result);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);
