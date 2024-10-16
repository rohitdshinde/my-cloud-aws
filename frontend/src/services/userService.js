import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:3000/api/v1/users";

export async function addImage(imageObject) {
  const response = await axios.post(`${BASE_URL}/image`, imageObject, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export async function addUser(userObject) {
  const response = await axios.post(`${BASE_URL}/user`, userObject, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export async function getCount(email) {
  const response = await axios.post(`${BASE_URL}/count`, email, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export async function getImages(emailObject) {
  const response = await axios.post(`${BASE_URL}/images`, emailObject, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export async function deleteImage(imageDeleteObject) {
  const response = await axios.delete(`${BASE_URL}/delete`, {
    headers: {
      "Content-Type": "application/json",
    },
    data: imageDeleteObject,
  });
  return response;
}

export function loginToast() {
  toast("Login Successful", {
    theme: "dark",
    type: "success",
    position: "top-right",
    autoClose: 2000,
  });
}

export function logoutToast() {
  toast("Logout Successful", {
    theme: "dark",
    type: "success",
    position: "top-right",
    autoClose: 2000,
  });
}

export function checkAuthenticated(isAuthenticated, isLoading) {
  if (!isLoading) {
    if (isAuthenticated) {
      loginToast();
    } else {
      logoutToast();
    }
  }
}
