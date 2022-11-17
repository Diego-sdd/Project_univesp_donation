import apiService from '../services/api';
import {store} from '../redux/store';

export const LoginUserApp = async (id: Number) => {
  const {token} = store.getState().authReducer;
  try {
    const response = await apiService.get('/v1/user_map_filter', {
      headers: {Authorization: `Bearer ${token}`},
      params: {
        id
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