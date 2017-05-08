var assert = require("assert");
import { gameRedux } from './index';
import { basePlayerData, modifyGold } from './basicreducers';
import { suite, test, slow, timeout } from "mocha-typescript";

@suite class Tests {
  @test method() {
    let temp = basePlayerData();
  };
  @test goldInc() {
    let redux = gameRedux();
    let store = redux.getState();
    assert(store.players[0].gold === 0);
    redux.dispatch({type : 'modifyGold', player : 0, amount : 5});
    let newStore = redux.getState();
    assert(newStore.players[0].gold === 5);
  };
};
