const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new:newSkills,
  create,
  delete: deleteSkills,
  edit,
  update
};

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    title: 'Skills Details'
  });
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    title: 'Skills'
  });
}

function newSkills(req, res) {
  res.render('skills/new', { title: 'New skill' });
}

function create(req, res) {
  console.log(req.body);
   Skill.create(req.body);
  res.redirect('/skills');
}
function deleteSkills(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function update(req, res) {
  req.body.done = !!req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}
function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'Edit skill',
    skill
  });
}