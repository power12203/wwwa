import { combineReducers } from "redux"; // redux에서 combineReducers 함수를 import합니다.
import counter from "./counter"; // "./counter" 경로에서 counter 모듈을 import합니다.
import todos from "./todos";

// redux 여러 개의 reducer를 결합하는 곳입니다.

const rootReducer = combineReducers({
  counter, // counter reducer를 rootReducer에 추가합니다.
  todos,
});

export default rootReducer; // rootReducer를 모듈의 기본 출력으로 내보냅니다.
