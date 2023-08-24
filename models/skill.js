const skills = [
  {id: 125223, skill: 'CSS', done: false},
  {id: 127904, skill: 'HTML', done: false},
  {id: 139608, skill: 'JS', done: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}

function create(skill) {

  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function deleteOne(id) {

  id = parseInt(id);
  
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}