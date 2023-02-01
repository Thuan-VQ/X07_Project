import React from "react";
import axios from "axios";
import uuid from "react-uuid";
const register = (email, password, user_role) => {
  const newUser = {
    _id: uuid(),
    email: email,
    password: password,
    role: user_role,
    user_info: {},
    user_status: 0,
  };
  return newUser;
};

const candidateInfo = (
  name,
  email,
  gender,
  age,
  phone,
  address,
  category,
  description
) => {
  const userInfo = {
    info: {
      fullName: name,
      email : email,
      gender: gender,
      age: age,
      phoneNumber: phone,
      address: address,
      description: description,
    },
    category: category,
  };
  return userInfo;
};

const recruiterInfo = (
  companyName,
  companyEmail,
  companyPhone,
  companyAddress,
  companyDescription,
  operationSector
) => {
  const userInfo = {
    info: {
      name: companyName,
      email: companyEmail,
      phoneNumber: companyPhone,
      address: companyAddress,
      description: companyDescription,
    },
    operationSector: operationSector,
  };
  return userInfo;
};

const autoLogin = () => {
  const json = localStorage.getItem("currentUser");
  return json ? JSON.parse(json) : null;
};
const logOut = () => {
  // localStorage.removeItem("currentUser");
  // localStorage.removeItem("token");
  // localStorage.removeItem("myRcm");
  localStorage.clear()
};

const UserApis = {
  register: register,
  autologin: autoLogin,
  candidateInfo: candidateInfo,
  recruiterInfo: recruiterInfo,
  logOut: logOut,
};
export default UserApis;
