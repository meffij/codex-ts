export interface ChooseSpecEvent {
  type : 'ChooseSpec';
  player : number;
};

export interface RNGEvent {
  type : 'RNG';
  // max is exclusive 
  // -- this event represents a request for a random int from 0 to (max - 1)
  max : number;
};

export type GameEvent =
  ChooseSpecEvent |
  RNGEvent
;
