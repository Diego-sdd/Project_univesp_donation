import apiService from '../services/api';

export const RegisterUserApp = async (data: any) => {
  try {
    const response = await apiService.post('/v1/register_user', data);
    return response;
  } catch (e: any) {
    console.log(e);
    return {
      status: e.response.status,
      data: e.response.data,
    };
  }
};
export const LoginUserApp = async (phone: String, password: String) => {
  try {
    const response = await apiService.get('/v1/login_user', {
      params: {
        phone,
        password,
      },
    });
    return response;
  } catch (e: any) {
    console.log(e);
    return {
      status: e.response.status,
      data: e.response.data,
    };
  }
};
