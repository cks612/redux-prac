// action type 정의
const SHOW_ALL = "redux-start/filter/SHOW_ALL";
const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";

// action 생성 함수
export function showAll() {
  return { type: SHOW_ALL };
}
export function showComplete() {
  return { type: SHOW_COMPLETE };
}

// 초기값
const initialState = "ALL";

// 리듀서
export default function reducer(previousState = initialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }
  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  return previousState;
}
