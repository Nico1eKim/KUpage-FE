import { ENDPOINTS } from '../config';
import { ApiResponse } from '../types/commonApiResponseTypes';
import { TeamsResponse } from '../types/teamMatchingApiTypes';
import useApi from './useApi';

const useTeamMatching = () => {
  const { api } = useApi();

  const getTeamDatas = async () => {
    const res = await api.get<ApiResponse<TeamsResponse>>(ENDPOINTS.TEAMS);
    return res.data;
  };

  return getTeamDatas;
};

export default useTeamMatching;
