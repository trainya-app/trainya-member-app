import { createContext, ReactNode, useState } from "react";

interface IProps {
    children: ReactNode;
}

export const WorkoutContext = createContext({} as any);

export const WorkoutContextProvider = ({ children }: IProps) => {
    const [exercisesChecked, setExercisesChecked] = useState<number[]>([]);
    const [prevWorkoutId, setPrevWorkoutId] = useState<number>();

    return (
        <WorkoutContext.Provider value={{ prevWorkoutId, setPrevWorkoutId, exercisesChecked, setExercisesChecked }}>
            { children }
        </WorkoutContext.Provider>
    )
}