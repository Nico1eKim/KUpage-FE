import { UseQueryResult } from '@tanstack/react-query';
import { createContext } from 'react';
import { ApiResponse } from '../../types/commonApiResponseTypes';
import { TeamInfo, TeamsResponse } from '../../types/teamMatchingApiTypes';

interface TeamMatchingContextValue {
  query: UseQueryResult<ApiResponse<TeamsResponse>, Error>;
  selectedTeamId: number | undefined;
  selectedTeamData: TeamInfo | undefined;
  canApply: boolean | undefined;
}

export const TeamMatchingContext = createContext<TeamMatchingContextValue | null>(null);
