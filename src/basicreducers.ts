import { GameData, PlayerData } from './datatypes';
import { GameError } from './gameerror';

export function basePlayerData() : PlayerData {
  let ret = { 
    baseHealth : 20,
    gold : 0,
    hand : [],
    deck : [],
    codex : []
  } as PlayerData;
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
