import { createContext, ReactNode, useState } from "react";

interface IProps {
    children: ReactNode;
}

export const WorkoutContext = createContext({} as any);

export const WorkoutContextProvider = ({ children }: IProps) => {
    const [exercisesChecked, setExercisesChecked] = useState<number[]>([]);
    const [prevWorkout, setPrevWorkout] = useState({
        id: null,
        title: null,
    });

    function clearPrevWorkout() {
        setPrevWorkout({
            id: null,
            title: null,
        });
        setExercisesChecked([]);
    }

    return (
        <WorkoutContext.Provider value={{ prevWorkout, setPrevWorkout, clearPrevWorkout, exercisesChecked, setExercisesChecked }}>
            { children }
        </WorkoutContext.Provider>
    )
}