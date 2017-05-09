import { GameAction } from "./action"
import { GameData } from "./datatypes"
import { baseGameData, modifyGold, makeWorker } from "./basicreducers"

export default function reducer
    (state : GameData, action : GameAction) : GameData {
  if (action.type === 'init') {
    return baseGameData();
  }
  if (action.type === 'modifyGold') {
    return modifyGold(state, action.player, action.amount);
  }
  if (action.type === 'Resign') {
    // action.player loses the game
    return { ...state, winner : (1 - action.player) };
  }
  if (action.type === 'MakeWorker') {
    return makeWorker(state, action.index);
  }
  if (action.type === 'StartSingleSpecGame') {
    return state;
  }
  return state;
};
