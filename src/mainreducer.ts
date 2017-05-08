import { GameAction } from "./action"
import { GameData } from "./datatypes"
import { baseGameData, modifyGold } from "./basicreducers"

export default function reducer
    (state : GameData, action : GameAction) : GameData {
  if (action.type === 'init') {
    return baseGameData();
  }
  if (action.type === 'modifyGold') {
    return modifyGold(state, action.player, action.amount);
  }
  return state;
};
