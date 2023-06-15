/* import axios from "axios";

const API = axios.create({
  baseURL: 'https://localhost:5000'
});

export const logIn = (authData) =>{ 


  return(
    
    API.post("/user/login", authData)
  )
 

}
export const signUp = (authData) => {
 
  console.log("inside signup api")
  console.log(authData);
  return(
    API.post("/user/signup", authData)
  )
} */


import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
}); 

export const logIn = (authData) => {
 
  return API.post("/user/login", authData);}


export const signUp = (authData) => {
  console.log("This is signup");
  console.log(authData);
  return API.post("/user/signup", authData);}

export const postQuestion = (questionData) =>{

  console.log(questionData);

  return API.post("/questions/Ask", questionData);
}
  
export const getAllQuestions = () => API.get("/questions/get");

export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);

export const voteQuestion = (id, value,userId) =>
  API.patch(`/questions/vote/${id}`, { value,userId });

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered,userId) =>
  {
    console.log(id);
    console.log(noOfAnswers);
    console.log(answerBody);
    console.log(userAnswered);
    console.log(userId);
  return API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered ,userId});
  }
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const getAllUsers = () => {
  console.log("getallusers request has been sent");
  return API.get("/user/getAllUsers");
}

export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);