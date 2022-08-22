const allRoles = {
  user: ['manageComment'],
  admin: ['getUsers', 'manageUsers', 'manageArticle', 'manageComment'],
  visitor: ['upvoteReview']
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
