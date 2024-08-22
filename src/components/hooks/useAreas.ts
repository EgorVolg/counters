import { useSelector } from "react-redux"
import { TArea } from "../types"

export const useAreas = () => {
    const { areas } = useSelector((state:TArea[]) => state.areas)
    return { areas }

}