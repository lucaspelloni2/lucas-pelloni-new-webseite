import _ from "lodash";
import {Memories, Memory} from "../../Content";
import {PageDimensions} from "../../Layout/Theme";
import {
  ActionTypes,
  GoToNextImage,
  GoToPrevImage,
  SetCurrentImageIndex,
  SetCurrentMemory,
  ToggleLeftPanel,
  YearState
} from "./types";

const initialState: YearState = {
  isLeftPanelOpen: false,
  currentMemory: Memories[0],
  currentImageIndex: 0,
  translatedMemories: Memories.map((m, i: number) => ({
    ...m,
    translation: PageDimensions[3 + i]
  })),
  grouped: _(Memories)
    .groupBy((e: Memory) => Number(e.year))
    .orderBy(year => Number(year), "desc")
    .value()
};

const next = (totalPictures: number, currentIndex: number): number => {
  console.log("next", totalPictures, currentIndex);
  if (currentIndex === totalPictures - 1) {
    return 0;
  }
  return currentIndex + 1;
};

const prev = (totalPictures: number, currentIndex: number): number => {
  if (currentIndex === 0) {
    return totalPictures - 1;
  }
  return currentIndex - 1;
};

const memoryReducer = (
  state: YearState = initialState,
  action:
    | SetCurrentMemory
    | ToggleLeftPanel
    | SetCurrentImageIndex
    | GoToNextImage
    | GoToPrevImage
): YearState => {
  switch (action.type) {
    case ActionTypes.SET_MEMORY:
      return {
        ...state,
        currentMemory: action.memory
      };
    case ActionTypes.TOGGLE_LEFT_PANEL:
      return {
        ...state,
        isLeftPanelOpen: !state.isLeftPanelOpen
      };
    case ActionTypes.SET_CURRENT_IMAGE_INDEX:
      return {...state, currentImageIndex: action.index};
    case ActionTypes.GO_TO_NEXT_IMAGE:
      return {
        ...state,
        currentImageIndex: next(
          state.currentMemory.achievement.pictures.length,
          state.currentImageIndex
        )
      };
    case ActionTypes.GO_TO_PREV_IMAGE:
      return {
        ...state,
        currentImageIndex: prev(
          state.currentMemory.achievement.pictures.length,
          state.currentImageIndex
        )
      };
    default:
      return state;
  }
};

export default memoryReducer;
