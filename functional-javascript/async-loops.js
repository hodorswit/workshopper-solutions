function loadUsers(userIds, load, done) {
  let completed = 0;
  var users = [];
  userIds.map((id, index) => {
    load(id, user => {
      users[index] = user;
      completed++;
      if (completed === users.length) return done(users);
    });
  });
  return users;
}

module.exports = loadUsers;
