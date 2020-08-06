const isEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

exports.validateSignupData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "O campo não pode estar vazio.";
  } else if (!isEmail(data.email)) {
    errors.email = "Preencha um email válido.";
  }

  if (isEmpty(data.password)) errors.password = "O campo não pode estar vazio";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "As senhas não coincidem.";
  if (isEmpty(data.handle)) errors.handle = "O campo não pode estar vazio";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateLoginData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "O campo não pode estar vazio.";
  if (isEmpty(data.password)) errors.password = "O campo não pode estar vazio.";

  return {
    errors,
    valid: Object.keys(errors.length === 0 ? true : false),
  };
};
