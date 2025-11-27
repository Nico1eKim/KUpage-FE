import ProjectApplyHeader from '../../../components/TeamMatching/ProjectApply/ProjectApplyHeader';
import ProjectApplyBody from '../../../components/TeamMatching/ProjectApply/ProjectApplyBody';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  ProjectApplySchema,
  projectApplySchema,
} from '../../../components/TeamMatching/ProjectApply/schema/projectApplySchema';
import { useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';

const ProjectApply = () => {
  const location = useLocation();
  const { teamData } = location.state || {};

  const methods = useForm<ProjectApplySchema>({
    resolver: zodResolver(projectApplySchema),
    defaultValues: {
      motivation: '',
      appliedPart: undefined,
      portfolioUrl: undefined,
    },
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  if (!teamData)
    return (
      <div className="w-full min-h-screen flex-center">
        <Loader2 className="w-20 h-20 animate-spin text-main" />
      </div>
    );

  return (
    <FormProvider {...methods}>
      <form noValidate className="min-h-screen bg-gradient">
        <ProjectApplyHeader />
        <ProjectApplyBody teamData={teamData} />
      </form>
    </FormProvider>
  );
};

export default ProjectApply;
