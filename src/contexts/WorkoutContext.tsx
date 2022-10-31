import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

interface IProps {
    children: ReactNode;
}

export const WorkoutContext = createContext({} as any);

export const WorkoutContextProvider = ({ children }: IProps) => {
    const [exercisesChecked, setExercisesChecked] = useState<number[]>([]);

    return (
        <WorkoutContext.Provider value={{ exercisesChecked, setExercisesChecked }}>
            { children }
        </WorkoutContext.Provider>
    )
}