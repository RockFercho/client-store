const session = () => {
  return localStorage.getItem('token') !== null ? true : false;
}
module.exports = {
  session
};
