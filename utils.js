const users = require("./users");

module.exports = {
  calculateTotalClicksAndViews: function(users, users_statistics) {
    let usersCopy = users.slice();
    for (let user of usersCopy) {
      let totalPageViews = 0,
        totalClicks = 0;
      for (let entry of users_statistics) {
        if (user.id == entry.user_id) {
          totalPageViews += entry.page_views;
          totalClicks += entry.clicks;
        }
      }
      user.total_page_views = totalPageViews;
      user.total_clicks = totalClicks;
    }
    return usersCopy;
  },

  getChartDataForUser: function(
    userId,
    users_statistics,
    startDate = 0,
    endDate = 6
  ) {
    let numberOfDays = endDate - startDate + 1;
    let result = { clicks: {}, views: {} };
    for (let entry of users_statistics) {
      if (entry.user_id === userId && numberOfDays) {
        result.clicks[entry.date] = entry.clicks;
        result.views[entry.date] = entry.page_views;
        numberOfDays--;
        // clicks[entry.date] = entry.clicks;
        // views[entry.date] = entry.page_views;
      }
    }

    return result;
  },

  getUserCredentials: function(id, list = []) {
    for (let user of list) {
      if (id === user.id) return `${user.first_name} ${user.last_name}`;
    }
  },

  getMinKey: function(obj = {}) {
    let str = "9999-99-99";
    for (let key in obj) {
      if (key < str) str = key;
    }
    return str;
  },

  getMaxKey: function(obj = {}) {
    let str = "";
    for (let key in obj) {
      if (key > str) str = key;
    }
    return str;
  }
};
