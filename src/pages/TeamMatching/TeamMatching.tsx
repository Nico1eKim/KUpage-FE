import TeamMatchingHeader from '../../components/TeamMatching/TeamMatchingHeader';
import TeamMatchingBody from '../../components/TeamMatching/TeamMatchingBody';
import { useQuery } from '@tanstack/react-query';
import useTeamMatching from '../../hooks/useTeamMatching';
import { useState } from 'react';
import { TeamMatchingContext } from '../../components/TeamMatching/TeamMatchingContext';
import { useNavigate } from 'react-router-dom';

const TeamMatching = () => {
  const navigate = useNavigate();
  const getTeamDatas = useTeamMatching();
  const query = useQuery({
    queryKey: ['team-datas'],
    queryFn: () => getTeamDatas(),
    retry: false,
  });
  const [selectedTeamId, setSelectedTeamId] = useState<number | undefined>();

  const teams = query.data?.result?.teams ?? [];
  const selectedTeamData = teams.find((data) => data?.teamId === selectedTeamId);
  const isApply = query.data?.result?.canApply;

  if (query.isError) {
    const status = (query.error as any).response?.status;
    if (status === 403) {
      alert('로그인이 필요합니다!');
      navigate('/login');
      return null;
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray">
      <TeamMatchingContext.Provider value={{ query, selectedTeamId, selectedTeamData, isApply }}>
        {query.data && (
          <>
            <TeamMatchingHeader />
            <TeamMatchingBody
              selectedTeamId={selectedTeamId}
              setSelectedTeamId={setSelectedTeamId}
            />
          </>
        )}
      </TeamMatchingContext.Provider>
    </div>
  );
};

export default TeamMatching;
