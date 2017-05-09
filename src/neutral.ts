import { CardData, UnitCardData, Effect, KWEffect } from './datatypes';

// TODO freeze these?

export const Tenderfoot : UnitCardData = {
  name : 'Tenderfoot',
  color : 'Neutral',
  type : 'Unit',
  ATK : 1,
  HP : 2,
  cost : 1,
  subtypes : ['Virtuoso'],
};

export const TimelyMessenger : UnitCardData = {
  name : 'Timely Messenger',
  color : 'Neutral',
  type : 'Unit',
  ATK : 1,
  HP : 1,
  cost : 1,
  effects : [KWEffect('Haste')],
  subtypes : ['Mercenary'],
};

export const HelpfulTurtle : UnitCardData = {
  name : 'Helpful Turtle',
  color : 'Neutral',
  type : 'Unit',
  ATK : 1,
  HP : 2,
  cost : 2,
  effects : [KWEffect('Healing')],
  subtypes : ['Cute Animal'],
};
