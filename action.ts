import { Spec } from './datatypes';

export type ActionType =
  "Resign" |
  "StartSingleSpecGame" |
  "ChooseSpec" |
  "MakeWorker"
;

export interface GameAction {
  type : ActionType;
};

export interface ChooseSpecAction extends GameAction {
  type : "ChooseSpec";
  spec : Spec;
};

export interface MakeWorkerAction extends GameAction {
  type : "MakeWorker";
  index : number;
};
