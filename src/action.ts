import { Spec } from './datatypes';

export type ActionType =
  "init" |
  "StartSingleSpecGame"
;

export interface ResignAction {
  type : 'Resign';
  player : number;
};

export interface ModifyGoldAction {
  type : 'modifyGold';
  amount : number;
  player : number;
};

export interface ChooseSpecAction {
  type : "ChooseSpec";
  spec : Spec;
};

export interface MakeWorkerAction {
  type : "MakeWorker";
  index : number;
};

export interface SimpleAction {
  type : ActionType
};

export type GameAction = 
  SimpleAction |
  ModifyGoldAction |
  ChooseSpecAction |
  MakeWorkerAction |
  ResignAction
;
