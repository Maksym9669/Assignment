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
  }
};
