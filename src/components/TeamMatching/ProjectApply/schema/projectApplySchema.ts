import { z } from 'zod';

export const projectApplySchema = z.object({
  motivation: z
    .string()
    .min(1, { message: '1자 이상 입력해주세요' })
    .max(1000, { message: '1000자 이하로 입력해주세요' }),
  appliedPart: z.enum(['SERVER', 'WEB', 'ANDROID']),
  portfolioUrl: z
    .instanceof(File, { message: 'pdf 파일을 업로드해주세요.' })
    .refine((f) => f.type === 'application/pdf', 'PDF 파일만 업로드할 수 있습니다.')
    .refine((f) => f.size <= 10 * 1024 * 1024, '10MB 이하만 가능합니다.'),
});

export type ProjectApplySchema = z.infer<typeof projectApplySchema>;
