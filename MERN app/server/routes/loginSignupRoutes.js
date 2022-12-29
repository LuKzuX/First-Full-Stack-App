const express = require("express");
const login_signup = express.Router();
const { login, signUp } = require("../functions/routeFunctions");

//login_signup.get(`/login`, )
//login_signup.get(`/signup`, )
login_signup.post(`/login`, login);
login_signup.post(`/signup`, signUp);

module.exports = login_signup;
