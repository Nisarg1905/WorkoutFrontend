import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "UseWorkoutsContext must be used inside WorkoutsContextProvider"
    );
  }

  return context;
};
