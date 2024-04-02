import { ParticipationType } from './Participation';

/**
 * holds the id, country and participations properties of the olympic
 * type of the mock data
 */
export type OlympicType = {
  id: number;
  country: string;
  participations: ParticipationType[];
};
