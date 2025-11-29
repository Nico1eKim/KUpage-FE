import TeamMatchingHeader from '../../components/TeamMatching/TeamMatchingHeader';
import TeamMatchingBody from '../../components/TeamMatching/TeamMatchingBody';
import { useQuery } from '@tanstack/react-query';
import useTeamMatching from '../../hooks/useTeamMatching';
import { useState } from 'react';
import { TeamMatchingContext } from '../../components/TeamMatching/TeamMatchingContext';

const TeamMatching = () => {
  const getTeamDatas = useTeamMatching();
  const query = useQuery({
    queryKey: ['team-datas'],
    queryFn: () => getTeamDatas(),
  });
  const [selectedTeamId, setSelectedTeamId] = useState<number | undefined>();

  const selectedTeamData = query.data?.result?.teams.find((data) => data.teamId === selectedTeamId);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray">
      <TeamMatchingContext.Provider value={{ query, selectedTeamId, selectedTeamData }}>
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
