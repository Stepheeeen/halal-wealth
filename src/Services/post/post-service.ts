import ApiClient from "../apiClient";

// post request data
interface postrequest_data {
  accountNumber: string;
  bankCode: string;
  bvn: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  newPassword: string;
  transactionPin: string;
  address: string;
  gender: string;
  middleName: string;
  username: string;
  nextOfKinAddress: string;
  nextOfKinBankAccountNumber: string;
  nextOfKinBankName: string;
  nextOfKinEmail: string;
  nextOfKinFullname: string;
  nextOfKinGender: string;
  nextOfKinPhoneNumber: string;
  nextOfKinRelationship: string;
  contactAddress: string;
  otp: string;
  pin: string;
  requestId: string;
}

// signup interface data
interface signup_data {
  accountNumber: string;
  bankCode: string;
  bvn: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
}

// signin interface data
interface signin_data {
  emailAddress: string;
  password: string;
}

// Authentication
export const signup = async (data: signup_data) => {
  const response = await ApiClient.post("", data);

  return response.data;
};

export const signin = async (data: signin_data) => {
    const response = await ApiClient.post ("", data);

    return response.data
}
