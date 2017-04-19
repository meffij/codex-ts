export type color =
  'Neutral' |
  'Red' |
  'Green'
;

export type Spec = 
  'Bashing' |
  'Finesse'
;

export type Phase =
  'Tech' |
  'Ready' |
  'Upkeep' |
  'Main' |
  'Discard/Draw' |
  'End'
;

export type CardType =
  'Unit' |
  'Spell' |
  'Building' |
  'Upgrade'
;

export type EffectType =
  "+1+1 Rune" |
  "-1-1 Rune" |
  "Sparkshot"
;

export interface Effect {
  timestamp : number;
  target : number;
  type : EffectType;
};

export interface CardData {
  name : string;
  cost : number;
  color : color;
  type : CardType;
}

export interface CardInstance {
  readonly data : CardData;
  readonly timestamp : number;
}

export interface UnitCardData extends CardData {
  type : 'Unit';
  ATK : number;
  HP : number;
}

export interface PlayerData {
  hand : [CardInstance];
  deck : [CardInstance];
  codex : [CardInstance];
};

export interface GameData {
  currentPhase : Phase;
  players : [PlayerData];
};
