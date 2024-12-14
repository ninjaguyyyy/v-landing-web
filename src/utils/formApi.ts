import axios, { AxiosResponse } from 'axios';

const API_URL = '/api/send';

export interface FormData {
  fullName: string;
  phoneNumber: string;
  service: string;
  address: string;
}

export interface TrackingForm {
  name: string;
  value: string;
}

interface ApiResponse {
  status: string;
  message: string;
  data: any;
}

export const sendFormData = async (
  formData: FormData
): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(
      API_URL,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to send data');
  }
};
