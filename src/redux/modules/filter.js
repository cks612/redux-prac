import { createActions, handleActions } from "redux-actions";

export const { showAll, showComplete } = createActions(
  "SHOW_ALL",
  "SHOW_COMPLETE",
  {
    prefix: "redux-start/filter",
  }
);

// action type 정의
// const SHOW_ALL = "redux-start/filter/SHOW_ALL";
// const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";

// action 생성 함수
// export function showAll() {
//   return { type: SHOW_ALL };
// }
// export function showComplete() {
//   return { type: SHOW_COMPLETE };
// }

// 초기값
const initialState = "ALL";

const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => "ALL",
    SHOW_COMPLETE: () => "COMPLETE",
  },
  initialState,
  { prefix: "redux-start/filter" }
);

// 리듀서
export default reducer;
// export default function reducer(previousState = initialState, action) {
//   if (action.type === showComplete) {
//     return "COMPLETE";
//   }
//   if (action.type === showAll) {
//     return "ALL";
//   }

//   return previousState;
// }
