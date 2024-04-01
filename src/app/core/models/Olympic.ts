import { ParticipationType } from './Participation';

export type OlympicType = {
  id: number;
  country: string;
  participations: ParticipationType[];
};
