import { GameError } from './gameerror';
import { GameEvent } from './event';
export type Color =
  'Neutral' |
  'Red' |
  'Green'
;

export type Spec = 
  'Bashing' |
  'Finesse'
;

export type TechLevel =
  0 | 1 | 2 | 3;

export function specToColor(s : Spec) : Color {
  return 'Neutral';
};

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

export type Subtype =
  'Virtuoso' |
  'Burn' |
  'Buff' |
  'Debuff' |
  'Cute Animal' |
  'Mercenary'
;

export type EffectType =
  '+1+1 Rune' |
  '-1-1 Rune' |
  'Sparkshot' |
  'Haste' |
  'Healing'
;

export interface Effect {
  timestamp : number;
  target? : number;
  type : EffectType;
};

export function KWEffect(type : EffectType) {
  return { type, timestamp : 0, target : 0 };
};

export interface CardData {
  name : string;
  cost : number;
  color : Color;
  type : CardType;
  effects? : [Effect];
  subtypes? : [Subtype]
}

export interface CardInstance {
  readonly data : CardData;
  readonly CUID : number;
}

export interface UnitCardData extends CardData {
  type : 'Unit';
  ATK : number;
  HP : number;
}

export interface SpellCardData extends CardData {
  type : 'Spell';
}

export interface BuildingCardData extends CardData {
  type : 'Building';
  HP : number;
}

export interface HeroBand {
  level : number;
  ATK : number;
  HP : number;
  effects? : [Effect];
};

export interface HeroData {
  name : string;
  cost : number;
  spec : Spec;
  minband : HeroBand;
  midband : HeroBand;
  maxband : HeroBand;
};


export interface TechBuilding {
  health : number;
  disabled? : boolean;
};

export interface PlayerData {
  gold : number;
  workers : number;
  baseHealth : number;
  hand : [CardInstance];
  deck : [CardInstance];
  codex : [CardInstance];
  tech1Building? : TechBuilding;
  tech2Spec? : Spec;
  tech2Building? : TechBuilding;
  tech3Building? : TechBuilding;
};

export interface GameData {
  error? : GameError;
  winner? : number;
  pending? : [GameEvent];
  eventQueue? : [GameEvent];
  currentPhase : Phase;
  currentPlayer : number;
  players : [PlayerData];
};
