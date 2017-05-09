import { GameData, Spec, PlayerData, CardInstance } from './datatypes';
import { GameError, makeError } from './gameerror';
import { Tenderfoot } from './neutral';

function populateSpec(input : PlayerData, spec : Spec) : PlayerData {
  return input;
};

export function chooseSpec(input : GameData, player : number, spec : Spec) : GameData {
  if (input.pending && input.pending[0].type === 'ChooseSpec') {
    if (!(input.players[player].deck.length)) {
      // populate starter deck
    }
    // dump cards into codex
    // load hero
  }
  return { ...input, error : makeError("Can't choose spec right now!") };
}
