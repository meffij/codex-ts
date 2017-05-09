import { CardInstance, GameData, PlayerData } from './datatypes';
import { GameError, makeError } from './gameerror';

export function basePlayerData() : PlayerData {
  let ret = { 
    baseHealth : 20,
    gold : 0,
    workers : 0,
    hand : [] as [CardInstance],
    deck : [] as [CardInstance],
    codex : [] as [CardInstance]
  };
  return ret;
};

export function baseGameData() : GameData {
  let ret = {
    currentPhase : 'Main',
    currentPlayer : 0,
    players : [basePlayerData(), basePlayerData()],
  } as GameData;
  return ret;
};

export function modifyGold(input : GameData, player : number, amount : number) : GameData {
  let playerData = input.players[player];
  let newGold = Math.min(20, Math.max(0, playerData.gold + amount));
  let newPlayerData = { ...playerData, gold : newGold };
  let newPlayerDatas = { ...input.players, [player] : newPlayerData };
  let clone = { ...input, players : newPlayerDatas };
  return clone;
};

export function makeWorker(input : GameData, index : number) : GameData {
  if (input.pending && input.pending.length) {
    return { ...input, error : makeError("Can't make worker while events are pending") };
  }
  let currentPlayerData = input.players[input.currentPlayer];
  if (currentPlayerData.gold < 1) {
    // TODO rich earth
    return { ...input, error : makeError("Not enough gold to make worker!") };
  }
  if (index >= currentPlayerData.hand.length || index < 0) {
    return { ...input, error : makeError("Index for makeWorker out of bounds") };
  }

  return input;
};
