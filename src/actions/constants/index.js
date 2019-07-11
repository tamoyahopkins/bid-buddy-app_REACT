//export const domain = "https://team5-kwitter-api.herokuapp.com";
export const domain = "https://se5-bidbuddy.herokuapp.com/";

export const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const handleJsonResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then(result => {
    throw result;
  });
};

//test