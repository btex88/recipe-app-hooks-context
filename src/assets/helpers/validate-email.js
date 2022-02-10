const emailRegex = /\S+@\S+\.\w{2,3}/;

const validateEmail = (email) => emailRegex.test(email);

export default validateEmail;
