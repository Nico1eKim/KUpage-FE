import { partTypeValue } from './partType.constants';

export interface ProjectApplyInfo {
  appliedPart: partTypeValue;
  motivation: string;
  portfolioUrl: File | string;
}
