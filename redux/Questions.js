import questions from "../assets/questions";

export const ANSWER: "ukb/questions/ANSWER" = "ukb/questions/ANSWER";
export const CHECK: "ukb/questions/ANSWER" = "ukb/questions/ANSWER";
// export const UNCHECK: "ukb/checklists/UNCHECK" = "ukb/checklists/UNCHECK";

export default function questionReducer(state = questions, action) {
  switch (action.type) {
    case ANSWER:
      {
        return [
          // ...state.slice(0, index), 
          // {
          //    ...state[index],
          //    status: action.type === 'PUBLISH_POST' ? 1 : 0,
          // },
          // ...state.slice(index + 1),



          {
            currentQuestion: action.nextQuestion
          },
          ...state.slice(1),

        ]
      }
    case CHECK:
      {
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

export function answer(nextQuestion) {
  return  {
    type: ANSWER,
    nextQuestion
  }
}

export function check(checklist, index) {
  return {
    type: CHECK,
    index,
    checklist
  };
}
