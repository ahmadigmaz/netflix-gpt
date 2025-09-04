export const checkValidData = (email, password) =>{
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    console.log(isValidEmail, isValidPassword)
    if(!isValidEmail) return "Please enter a valid email";
    if(!isValidPassword) return "Please enter a valid password";
    return null;
}