function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(subu =>
      goodUsers.some(goodu => goodu.id === subu.id)
    );
  };
}

module.exports = checkUsersValid;
