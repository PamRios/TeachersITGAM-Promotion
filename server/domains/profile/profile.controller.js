// Actions methods
// GET "/project"
const showProfile = (req, res) => {
  res.render('profile/profileView');
};

// Actions methods
// GET "/project/add"
const filesProfile = (req, res) => {
  res.render('profile/filesProfileView');
};

// Controlador Project
export default {
  showProfile,
  filesProfile,
};
