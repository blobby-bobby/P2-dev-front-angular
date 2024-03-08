import { PartcipationType } from "./Participation"

export type OlympicType = {
    id: number,
    country: string,
    participations: PartcipationType[]
}
