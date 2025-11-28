import ProjectApplyHeader from '../../../components/TeamMatching/ProjectApply/ProjectApplyHeader';
import ProjectApplyBody from '../../../components/TeamMatching/ProjectApply/ProjectApplyBody';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  ProjectApplySchema,
  projectApplySchema,
} from '../../../components/TeamMatching/ProjectApply/schema/projectApplySchema';

const ProjectApply = () => {
  const methods = useForm<ProjectApplySchema>({
    resolver: zodResolver(projectApplySchema),
    defaultValues: {
      motivation: '',
      appliedPart: [],
      portfolioUrl: undefined,
    },
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  return (
    <FormProvider {...methods}>
      <form noValidate className="min-h-screen bg-gradient">
        <ProjectApplyHeader />
        <ProjectApplyBody />
      </form>
    </FormProvider>
  );
};

export default ProjectApply;
