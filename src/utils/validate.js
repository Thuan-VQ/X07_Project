//check empty field
export const isEmpty = (value) => {
  if (!value) return true;
  return false;
};
//check email format
export const isEmail = (email) => {
  // eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//check password
export const isPassword = (password) => {
  const re =
    /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
  return re.test(password);
};

//check password length
export const isLength = (password) => {
  if (password.lenght < 6) return true;
  return false;
};

// check password match
export const isMatch = (password, confirmPassword) => {
  if (password === confirmPassword) return true;
  return false;
};

export const isCheckPassword = (newPassword) => {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(newPassword);
};

export const isMathUpdatePassword = (newPassword, confirmPassword) => {
  if (newPassword === confirmPassword) return true;
  return false;
};
//check phone format
export const isVietnamesePhoneNumberValid = (phone) => {
  return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(phone);
};


export const isTitle = (title)=>{
  if(!title || !title.replace(/\s/g, '').length){
    return false
  }
  return true
}
export const isPosition = (position)=>{
  if(!position || !position.replace(/\s/g, '').length){
    return false
  }
  return true
}
export const isType = (type)=>{
  if(!type){
    return false
  }
  return true
}
export const isLevel = (level)=>{
  if(!level){
    return false
  }
  return true
}

export const isAgeFrom = (ageFrom)=>{
  console.log(ageFrom);
  if(!ageFrom){
    return false
  }
  return true
}
export const isAgeTo = (ageTo)=>{
  console.log(ageTo);
  if(!ageTo){
    return false
  }
  return true
}
export const isExperience = (experience)=>{
  if(!experience){
    return false
  }
  return true
}
export const isSalary = (salary)=>{
  if(!salary || !salary.replace(/\s/g, '').length){
    return false
  }
  console.log("đúng");
  return true
}

export const isNumberApplicant = (numberApplicant) =>{
  if(!numberApplicant){
    return false
  }
  return true
}
export const isLocation = (location)=>{
  if(!location){
    return false
  }
  return true
}

export const isCategory = (category)=>{
  if(!category){
    return false
  }
  return true
}
export const isDescription = (description)=>{
  if(!description){
    return false
  }
  return true
}
export const isDate = (date)=>{;
  console.log(date);
  if(date.length===0){
    return false
  }
  return true
}

export const isCompanyName = (companyName) =>{
      if(!companyName ||!companyName.replace(/\s/g, '').length){
        return false
      }
      return true
}

export const isEmailCompany = (emailCompany)=>{
  if(!emailCompany || !emailCompany.replace(/\s/g, '').length){
    console.log("sai roi",emailCompany);
    return false
  }
  return true
}

export const isPhoneCompany = (phoneCompany)=>{
  if(!phoneCompany || !phoneCompany.replace(/\s/g, '').length){
    return false
  }
  return true
} 

export const isAddressCompany = (addressCompany)=>{
  if(!addressCompany || !addressCompany.replace(/\s/g, '').length){
    return false
  }
  return true
}

export const isCategoryCompany = (categoryCompany)=>{
  if(!categoryCompany){
    return false
  }
  return true
}

export const isDesCompany = (desCompany)=>{
  if(!desCompany || !desCompany.replace(/\s/g, '').length){
    return false
  }
  return true
}

export const candidateName = (name)=>{
  if(!name ||  !name.replace(/\s/g, '').length){
    return false
  }
  return true
}

export const candidateGender = (gender)=>{
  console.log("gender",gender);
  if(!gender){
    return false
  }
  return true
}

export const candidateAge = (age)=>{
  if(!age){
    return false
  }
  return true
}

export const candidateEmail = (email)=>{
  if(!email || !email.replace(/\s/g, '').length){
    return false
  }
  return true
}

export const candidatePhone = (phone)=>{
  if(!phone ||  !phone.replace(/\s/g, '').length){
    return false
  }
  return true
}

export const candidateAddress = (address)=>{
  if(!address || !address.replace(/\s/g, '').length){
    return false
  }
  return true
}

export const canidateCategory = (category)=>{
  if(!category){
    return false
  }
  return true
}

export const candidateDes = (des)=>{
  console.log(des);
  if(!des || !des.replace(/\s/g, '').length){
    return false
  }
  return true
}