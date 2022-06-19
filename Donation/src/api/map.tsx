import apiService from '../services/api';
import {store} from '../redux/store';
export const UserMapApp = async (typeProfile: String) => {
  const {token} = store.getState().authReducer;

  try {
    const response = await apiService.get('/v1/users_map', {
      headers: {Authorization: `Bearer ${token}`},
      params: {
        typeProfile,
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
