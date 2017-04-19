export type color =
  'Neutral' |
  'Red' |
  'Green'
;

export type spec = 
  'Bashing' |
  'Finesse'
;

export type cardType =
  'Unit' |
  'Spell' |
  'Building' |
  'Upgrade'
;

export type EffectType =
  'Resign'
;

export interface Effect {
  timestamp : number;
  type : EffectType;
};

export interface CardData {
  name : string;
  cost : number;
  color : color;
  type : cardType;
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
