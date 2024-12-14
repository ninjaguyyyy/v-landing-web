import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://api1.ldpform.com/sendform';

export interface FormData {
  name: string;
  phone: string;
  apartmentType: string;
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

export const sendFormData = async (payload: any): Promise<ApiResponse> => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: '*/*',
    'Accept-Language':
      'en,vi-VN;q=0.9,vi;q=0.8,fr-FR;q=0.7,fr;q=0.6,en-US;q=0.5',
    Origin: 'https://vesinhcongnghiep.tktg.vn',
    Referer: 'https://vesinhcongnghiep.tktg.vn/',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  };

  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(
      API_URL,
      payload,
      { headers }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to send data');
  }
};
