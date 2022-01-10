// Coloque aqui suas actions
const USER_LOGIN = 'USER_LOGIN';

const userLogin = (email) => ({
  type: USER_LOGIN,
  email,
});

export {
  USER_LOGIN,
  userLogin,
};
