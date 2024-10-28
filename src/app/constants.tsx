export const token = localStorage.getItem("LoginToken")
export const userInfo = JSON.parse(localStorage.getItem("userInfo") || '{}');