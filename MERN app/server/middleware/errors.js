const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "this email is already registered";
    return errors
  }

  Object.values(err.errors).forEach(({ properties }) => {
    errors[properties.path] = properties.message;
  });
  return errors
};

module.exports = handleErrors;
