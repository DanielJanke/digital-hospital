import checklistdata from "../assets/checklists";

export const RATING_SET_ANSWER_STAY_QUESTION = "property-rating/rate/set-answer-stay-question";

export const CHECK: "ukb/checklists/CHECK" = "ukb/checklists/CHECK";
export const UNCHECK: "ukb/checklists/UNCHECK" = "ukb/checklists/UNCHECK";

export default function checklistReducer(state = checklistdata, action) {
  switch (action.type) {
    case CHECK: {
      return {
        ...state,
        [action.checklist]: state[action.checklist].map((todo, index) => {
          if (index === action.index) {
            return {
              ...todo,
              checked: !todo.checked
            };
          }
          return todo;
        })
      };
    }
    default:
      return state;
  }
}

export function check(checklist, index) {
  return {
    type: CHECK,
    index,
    checklist
  };
}
