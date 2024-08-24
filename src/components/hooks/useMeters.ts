import { useSelector } from "react-redux"
import { TMeter } from "../types"

export const useMeters = () => {
    const meters = useSelector((state: { meters: TMeter[] }) => state.meters)
    return { meters }
}