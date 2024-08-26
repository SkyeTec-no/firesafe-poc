"use client";
import {
  ConstructionType,
  FireResistance,
  InsulationType,
  Penetrations,
  PenetrationType,
  PositionOfPenetration,
  Solution,
  WallThickness,
} from "@/data/solutions";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ReactNode, useCallback, useEffect, useReducer } from "react";
/*type ConstructionType = "Solution based on construction" | "Solution based on product";
type WallThickness = "HundredMillimeters" | "HundredFiftyMillimeters" | "TwoHundredMillimeters";
type FireResistance =
  | "TwentyMinutes"
  | "ThirtyMinutes"
  | "FortyFiveMinutes"
  | "SixtyMinutes"
  | "NinetyMinutes"
  | "OneHundredTwentyMinutes"
  | "OneHundredFiftyMinutes"
  | "OneHundredEightyMinutes";
type Penetrations = "Single" | "Multiple" | "None";
type PositionOfPenetration = "Horizontal" | "Vertical" | "Elbow87_90_0Distance" | "SocketThroughWall";
type PenetrationType = "PVC" | "Steel" | "Copper" | "PP" | "MultilayerPipe";
type InsulationType = "WithInsulation" | "WithoutInsulation";

type Solution = {
  name: string;
  wallThickness: WallThickness;
  fireResistance: FireResistance;
  penetration: Penetrations;
  positionOfPenetrations: PositionOfPenetration;
  typeOfPenetrations: PenetrationType;
  insulationType: InsulationType;
  diameter: number;
  pdf: Blob;
};

const solutions: Solution[] = [
  {
    name: "Solution 1",
    wallThickness: "HundredMillimeters",
    fireResistance: "SixtyMinutes",
    penetration: "Single",
    positionOfPenetrations: "Horizontal",
    typeOfPenetrations: "PVC",
    insulationType: "WithoutInsulation",
    diameter: 32,
    pdf: new Blob(),
  },
  {
    name: "Solution 2",
    wallThickness: "TwoHundredMillimeters",
    fireResistance: "SixtyMinutes",
    penetration: "Single",
    positionOfPenetrations: "Horizontal",
    typeOfPenetrations: "PVC",
    insulationType: "WithoutInsulation",
    diameter: 40,
    pdf: new Blob(),
  },
  {
    name: "Solution 3",
    wallThickness: "HundredMillimeters",
    fireResistance: "SixtyMinutes",
    penetration: "Single",
    positionOfPenetrations: "Vertical",
    typeOfPenetrations: "Steel",
    insulationType: "WithoutInsulation",
    diameter: 50,
    pdf: new Blob(),
  },
  {
    name: "Solution 4",
    wallThickness: "TwoHundredMillimeters",
    fireResistance: "NinetyMinutes",
    penetration: "Multiple",
    positionOfPenetrations: "Elbow87_90_0Distance",
    typeOfPenetrations: "Copper",
    insulationType: "WithInsulation",
    diameter: 110,
    pdf: new Blob(),
  },
  {
    name: "Solution 5",
    wallThickness: "HundredFiftyMillimeters",
    fireResistance: "ThirtyMinutes",
    penetration: "None",
    positionOfPenetrations: "SocketThroughWall",
    typeOfPenetrations: "PP",
    insulationType: "WithoutInsulation",
    diameter: 125,
    pdf: new Blob(),
  },
  {
    name: "Solution 6",
    wallThickness: "HundredMillimeters",
    fireResistance: "OneHundredTwentyMinutes",
    penetration: "Single",
    positionOfPenetrations: "Vertical",
    typeOfPenetrations: "MultilayerPipe",
    insulationType: "WithInsulation",
    diameter: 100,
    pdf: new Blob(),
  },
  {
    name: "Solution 7",
    wallThickness: "HundredFiftyMillimeters",
    fireResistance: "NinetyMinutes",
    penetration: "Multiple",
    positionOfPenetrations: "SocketThroughWall",
    typeOfPenetrations: "PP",
    insulationType: "WithoutInsulation",
    diameter: 125,
    pdf: new Blob(),
  },
];*/

type Choice<T> = {
  icon: string;
  key: string;
  value: T;
};

type State = {
  stepCounter: number;
  constructionTypeChoices: Choice<ConstructionType>[];
  wallChoices: Choice<WallThickness>[];
  fireResistanceChoices: Choice<FireResistance>[];
  penetrationChoices: Choice<Penetrations>[];
  positionOfPenetrationChoices: Choice<PositionOfPenetration>[];
  availableSolutions: Solution[];
};
const SET_STEP = "SET_STEP";
const SET_CONSTRUCTION_TYPE_CHOICES = "SET_CONSTRUCTION_TYPE_CHOICES";
const SET_WALL_CHOICES = "SET_WALL_CHOICES";
const SET_FIRE_RESISTANCE_CHOICES = "SET_FIRE_RESISTANCE_CHOICES";
const SET_PENETRATION_CHOICES = "SET_PENETRATION_CHOICES";
const SET_POSITION_OF_PENETRATION_CHOICES = "SET_POSITION_OF_PENETRATION_CHOICES";
const SET_AVAILABLE_SOLUTIONS = "SET_AVAILABLE_SOLUTIONS";

type Action =
  | { type: typeof SET_STEP; step: number }
  | { type: typeof SET_CONSTRUCTION_TYPE_CHOICES; choices: Choice<ConstructionType>[] }
  | { type: typeof SET_WALL_CHOICES; choices: Choice<WallThickness>[] }
  | { type: typeof SET_FIRE_RESISTANCE_CHOICES; choices: Choice<FireResistance>[] }
  | { type: typeof SET_PENETRATION_CHOICES; choices: Choice<Penetrations>[] }
  | { type: typeof SET_POSITION_OF_PENETRATION_CHOICES; choices: Choice<PositionOfPenetration>[] }
  | { type: typeof SET_AVAILABLE_SOLUTIONS; solutions: Solution[] };

const initialState: State = {
  stepCounter: 0,
  constructionTypeChoices: [],
  wallChoices: [],
  fireResistanceChoices: [],
  penetrationChoices: [],
  positionOfPenetrationChoices: [],
  availableSolutions: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_STEP:
      return { ...state, stepCounter: action.step };
    case SET_CONSTRUCTION_TYPE_CHOICES:
      return { ...state, constructionTypeChoices: action.choices };
    case SET_WALL_CHOICES:
      return { ...state, wallChoices: action.choices };
    case SET_FIRE_RESISTANCE_CHOICES:
      return { ...state, fireResistanceChoices: action.choices };
    case SET_PENETRATION_CHOICES:
      return { ...state, penetrationChoices: action.choices };
    case SET_POSITION_OF_PENETRATION_CHOICES:
      return { ...state, positionOfPenetrationChoices: action.choices };
    case SET_AVAILABLE_SOLUTIONS:
      return { ...state, availableSolutions: action.solutions };
    default:
      return state;
  }
};

const StepComponent = <T extends ReactNode>({ choices }: { choices: Choice<T>[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();
  const handleSelect = (choice: Choice<T>) => {
    const params = new URLSearchParams(search.toString());
    params.set(choice.key, choice.value as string);
    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <ul>
      {choices.map((choice, index) => (
        <li onClick={() => handleSelect(choice)} key={index}>
          {choice.value}
        </li>
      ))}
    </ul>
  );
};

const WALL_THICKNESS = "wallThickness";
const CONSTRUCTION_TYPE = "constructionType";
const FIRE_RESISTANCE = "fireResistance";
const PENETRATION = "penetration";
const POSITION_OF_PENETRATION = "positionOfPenetration";
const PENETRATION_TYPE = "penetrationType";
const INSULATION_TYPE = "insulationType";

/*
proposed solution
class StepHandler<T> {
  options: T[];
  selector: (solution: Solution) => T;

  constructor(options: T[], selector: (solution: Solution) => T) {
    this.options = options;
    this.selector = selector;
  }

  handle(selectedOption: T, solutions: Solution[]): T[] {
    // Filter solutions based on selected options
    const availableSolutions = solutions.filter((solution) => selectedOption === this.selector(solution));

    // Extract next step options from available solutions
    const nextStepOptions = availableSolutions.map(this.selector);

    // Return unique next step options
    return Array.from(new Set(nextStepOptions));
  }
}

const constructionHandler = new StepHandler<WallThickness>(
  solutions.map((solution) => solution.wallThickness),
  (solution) => solution.wallThickness
);
const selectedWalls = constructionHandler.handle("TwoHundredMillimeters", solutions);
const fireResistanceOptions = new Set();
solutions.map((solution) => {
  if (selectedWalls.includes(solution.wallThickness)) {
    fireResistanceOptions.add(solution.fireResistance);
  }
});
console.log(fireResistanceOptions);

*/
interface SolutionSelectorProps {
  baseUrl: string;
  solutionsList: Solution[];
}
const SolutionSelector = ({ baseUrl, solutionsList }: SolutionSelectorProps) => {
  const search = useSearchParams();
  const router = useRouter();
  const wallThickness = search.get(WALL_THICKNESS) as WallThickness | null;
  const constructionType = search.get(CONSTRUCTION_TYPE) as ConstructionType | null;
  const fireResistance = search.get(FIRE_RESISTANCE) as FireResistance | null;
  const penetration = search.get(PENETRATION) as Penetrations | null;
  const positionOfPenetration = search.get(POSITION_OF_PENETRATION) as PositionOfPenetration | null;
  const penetrationType = search.get(PENETRATION_TYPE) as PenetrationType | null;
  const insulationType = search.get(INSULATION_TYPE) as InsulationType | null;

  const [state, dispatch] = useReducer(reducer, initialState);

  const filterSolutions = useCallback(
    (criterion: keyof Solution, value: any) => {
      return state.availableSolutions.filter((solution) => solution[criterion] === value);
    },
    [state.availableSolutions]
  );
  const generateChoices = <T,>(options: T[], key: string): Choice<T>[] => {
    return options.map((option) => ({
      icon: "wall-icon",
      key,
      value: option,
    }));
  };
  console.log(solutionsList);
  useEffect(() => {
    dispatch({ type: SET_AVAILABLE_SOLUTIONS, solutions: solutionsList });
  }, [solutionsList]);

  // Determine the current step based on query parameters
  useEffect(() => {
    let currentStep = 0;
    if (insulationType) {
      currentStep = 7;
    } else if (penetrationType) {
      currentStep = 6;
    } else if (positionOfPenetration) {
      currentStep = 5;
    } else if (penetration) {
      currentStep = 4;
    } else if (fireResistance) {
      currentStep = 3;
    } else if (wallThickness) {
      currentStep = 2;
    } else if (constructionType) {
      currentStep = 1;
    }
    dispatch({ type: SET_STEP, step: currentStep });
  }, [
    wallThickness,
    fireResistance,
    penetration,
    positionOfPenetration,
    penetrationType,
    insulationType,
    constructionType,
  ]);

  // Test alternative solution with step handler? (see above)
  useEffect(() => {
    if (insulationType) {
      dispatch({ type: SET_STEP, step: 7 });
    } else if (penetrationType) {
      dispatch({ type: SET_STEP, step: 6 });
    } else if (positionOfPenetration && state.stepCounter === 4) {
      dispatch({ type: SET_STEP, step: 5 });
    } else if (penetration && state.stepCounter === 3) {
      const filteredSolutions = filterSolutions(PENETRATION, penetration);
      const positionOfPenetrationOptions = Array.from(
        new Set(filteredSolutions.map((solution) => solution.positionOfPenetration))
      );
      dispatch({ type: SET_AVAILABLE_SOLUTIONS, solutions: filteredSolutions });
      dispatch({
        type: SET_POSITION_OF_PENETRATION_CHOICES,
        choices: generateChoices(positionOfPenetrationOptions, POSITION_OF_PENETRATION),
      });
      dispatch({ type: SET_STEP, step: 4 });
    } else if (fireResistance && state.stepCounter === 2) {
      const filteredSolutions = filterSolutions(FIRE_RESISTANCE, fireResistance);
      const penetrationOptions = Array.from(new Set(filteredSolutions.map((solution) => solution.penetration)));
      dispatch({ type: SET_AVAILABLE_SOLUTIONS, solutions: filteredSolutions });
      dispatch({
        type: SET_PENETRATION_CHOICES,
        choices: generateChoices(penetrationOptions, PENETRATION),
      });
      dispatch({ type: SET_STEP, step: 3 });
    } else if (wallThickness && state.stepCounter === 1) {
      const filteredSolutions = filterSolutions(WALL_THICKNESS, wallThickness);
      const fireResistanceOptions = Array.from(new Set(filteredSolutions.map((solution) => solution.fireResistance)));
      dispatch({ type: SET_AVAILABLE_SOLUTIONS, solutions: filteredSolutions });
      dispatch({
        type: SET_FIRE_RESISTANCE_CHOICES,
        choices: generateChoices(fireResistanceOptions, FIRE_RESISTANCE),
      });
      dispatch({ type: SET_STEP, step: 2 });
    } else if (constructionType && state.stepCounter === 0) {
      const wallChoices = solutionsList.map((solution) => ({
        icon: "wall-icon",
        key: WALL_THICKNESS,
        value: solution.wallThickness,
      }));
      dispatch({ type: SET_WALL_CHOICES, choices: wallChoices });
      dispatch({ type: SET_STEP, step: 1 });
    } else {
      const typeOfConstructionOptions: Choice<ConstructionType>[] = [
        { icon: "wall-icon", key: CONSTRUCTION_TYPE, value: "Solution based on construction" },
        { icon: "wall-icon", key: CONSTRUCTION_TYPE, value: "Solution based on product" },
      ];
      dispatch({ type: SET_CONSTRUCTION_TYPE_CHOICES, choices: typeOfConstructionOptions });
    }
  }, [
    wallThickness,
    fireResistance,
    penetration,
    positionOfPenetration,
    penetrationType,
    insulationType,
    constructionType,
    state.availableSolutions,
    state.stepCounter,
    filterSolutions,
    solutionsList,
  ]);

  return (
    <>
      <h1>Stepper</h1>
      <div className="breadcrumbs">
        <ul>
          {constructionType && constructionType === "Solution based on construction" && (
            <li>
              <Link href={`${baseUrl}/solutionselector?constructionType=${constructionType}`}>{constructionType}</Link>
            </li>
          )}
          {constructionType && constructionType === "Solution based on product" && (
            <li>
              <Link href={`${baseUrl}/solutionselector?constructionType=${constructionType}`}>{constructionType}</Link>
            </li>
          )}
          {wallThickness && (
            <li>
              <Link
                href={`${baseUrl}/solutionselector?constructionType=${constructionType}&wallThickness=${wallThickness}`}
              >
                {WALL_THICKNESS}
              </Link>
            </li>
          )}
          {fireResistance && (
            <li>
              <Link
                href={`${baseUrl}/solutionselector?constructionType=${constructionType}&wallThickness=${wallThickness}&fireResistance=${fireResistance}`}
              >
                {FIRE_RESISTANCE}
              </Link>
            </li>
          )}
          {penetration && (
            <li>
              <Link
                href={`${baseUrl}/solutionselector?constructionType=${constructionType}&wallThickness=${wallThickness}&fireResistance=${fireResistance}&penetration=${penetration}`}
              >
                {penetration}
              </Link>
            </li>
          )}
          {positionOfPenetration && (
            <li>
              <Link
                href={`${baseUrl}/solutionselector?constructionType=${constructionType}&wallThickness=${wallThickness}&fireResistance=${fireResistance}&penetration=${penetration}&positionOfPenetration=${positionOfPenetration}`}
              >
                {positionOfPenetration}
              </Link>
            </li>
          )}
        </ul>
      </div>
      {state.stepCounter === 0 && <StepComponent choices={state.constructionTypeChoices} />}
      {state.stepCounter === 1 && <StepComponent choices={state.wallChoices} />}
      {state.stepCounter === 2 && <StepComponent choices={state.fireResistanceChoices} />}
      {state.stepCounter === 3 && <StepComponent choices={state.penetrationChoices} />}
      {state.stepCounter === 4 && <StepComponent choices={state.positionOfPenetrationChoices} />}
      {/** etc... */}
    </>
  );
};
export default SolutionSelector;
