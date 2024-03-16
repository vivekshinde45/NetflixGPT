export const checkValidations = (name, email, password) => {
  const errorMessage = {
    name: null,
    email: null,
    password: null,
  };
  console.log("name form validation.js " + name);
  if (name === null || name === "") {
    errorMessage.name = "Name is required, please provide the name";
  } else if (email === null) {
    errorMessage.email = "Email is required, please provide the name";
  } else if (password === null) {
    errorMessage.password = "Password is required, please provide the password";
  }

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) errorMessage.email = "Email ID is not valid";
  if (!isPasswordValid) errorMessage.password = "Password is not valid";

  return errorMessage;
};

export const checkPasswordMatched = (password, confirmPassword) => {
  return password === confirmPassword ? null : "Password not match";
};
