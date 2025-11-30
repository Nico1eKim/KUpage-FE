import TeamCard from './TeamCard';
import TeamMatchingDetailContainer from './TeamMatchingDetailContainer';
import { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import { TeamMatchingContext } from './TeamMatchingContext';
import { Loader2 } from 'lucide-react';

interface Props {
  selectedTeamId: number | undefined;
  setSelectedTeamId: Dispatch<SetStateAction<number | undefined>>;
}

const TeamMatchingBody = ({ selectedTeamId, setSelectedTeamId }: Props) => {
  const { query } = useContext(TeamMatchingContext)!;

  const { data: teamData, isError, isEnabled, isLoading } = query;

  useEffect(() => {
    if (teamData?.success) {
      setSelectedTeamId(teamData.result.teams[0]?.teamId);
    }
  }, [teamData]);

  const cardClickHandler = (teamId: number) => {
    setSelectedTeamId(teamId);
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex-center">
        <Loader2 className="w-20 h-20 animate-spin text-main" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-full mt-8 flex flex-row">
        <div className="w-full text-center text-24 font-400 p-92">데이터를 불러올 수 없습니다</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full mt-8 flex flex-row">
      {isEnabled && teamData && teamData.success && (
        <>
          <div className="w-[40%] flex-1 p-[47px] flex flex-col gap-28 bg-gradient">
            {teamData.result.teams.map((team) => {
              return (
                <TeamCard
                  key={team.teamId}
                  data={team}
                  selectedTeamId={selectedTeamId}
                  onClick={() => cardClickHandler(team.teamId)}
                />
              );
            })}
          </div>
          <div className="w-[60%] h-full p-[47px]">
            <TeamMatchingDetailContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default TeamMatchingBody;
