import questions from "../assets/questions";

export const ANSWER: "ukb/questions/ANSWER" = "ukb/questions/ANSWER";

export const ANSWER_WITH_PAYLOAD_ANAMNESE: "ukb/questions/ANSWER_WITH_PAYLOAD_ANAMNESE" =
  "ukb/questions/ANSWER_WITH_PAYLOAD_ANAMNESE";
export const ANSWER_ANAMNESE: "ukb/questions/ANSWER_ANAMNESE" =
  "ukb/questions/ANSWER_ANAMNESE";

// export const UNCHECK: "ukb/checklists/UNCHECK" = "ukb/checklists/UNCHECK";

const initialState = {
  currentQuestion: 0,

  currentQuestionAnamnese: 0,

  answersAnanmnese: {
    ["name"]: "",
    ["adress"]: "",
    ["phone"]: "",
    ["insurance"]: "",
    ["nameFamily"]: "",
    ["diabetics"]: "",
    ["smoker"]: "",
    ["amountCigarettes"]: ""
  }
};

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case ANSWER: {
      return {
        ...state,
        currentQuestion: action.nextQuestion
      };
    }

    case ANSWER_ANAMNESE: {
      return {
        ...state,
        currentQuestionAnamnese: action.nextQuestion
      };
    }

    case ANSWER_WITH_PAYLOAD_ANAMNESE: {
      return {
        ...state,
        currentQuestionAnamnese: action.nextQuestion,
        answersAnanmnese: {
          ...state.answersAnanmnese,
          [action.path]: action.payload
        }
      };
    }
    default:
      return state;
  }
}

export function answer(nextQuestion) {
  return {
    type: ANSWER,
    nextQuestion
  };
}

export function answerAnamnese(nextQuestion) {
  return {
    type: ANSWER_ANAMNESE,
    nextQuestion
  };
}

export function answerWithPayloadAnamnese(nextQuestion, path, payload) {
  return {
    type: ANSWER_WITH_PAYLOAD_ANAMNESE,
    nextQuestion,
    path,
    payload
  };
}

export function check(checklist, index) {
  return {
    type: CHECK,
    index,
    checklist
  };
}
