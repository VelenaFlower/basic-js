module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let nameDreamTeam = [];
  members.forEach((element) => {
    if (typeof element === 'string') {
      nameDreamTeam.push(element.trim()[0].toUpperCase());
    }
  });
  return nameDreamTeam.sort().join('');
};