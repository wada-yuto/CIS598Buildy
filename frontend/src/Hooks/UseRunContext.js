import { useContext } from "react";
import { RunContext } from "../Context/RunContext";


export const useRunContext = () => {
    const context = useContext(RunContext)

    if(!context) throw Error("Context must be used within a RunProvider")
    return context
}