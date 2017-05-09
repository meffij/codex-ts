var assert = require("assert");
import { gameRedux } from './index';
import { basePlayerData, modifyGold } from './basicreducers';
import { suite, test, slow, timeout } from "mocha-typescript";

@suite class Tests {
  @test goldInc() {
    let redux = gameRedux();
    let store = redux.getState();
    assert(store.players[0].gold === 0);
    redux.dispatch({type : 'modifyGold', player : 0, amount : 5});
    let newStore = redux.getState();
    assert(newStore.players[0].gold === 5);
    redux.dispatch({type : 'modifyGold', player : 0, amount : -2});
    newStore = redux.getState();
    assert(newStore.players[0].gold === 3);
    redux.dispatch({type : 'modifyGold', player : 1, amount : 2});
    newStore = redux.getState();
    assert(newStore.players[1].gold === 2);
    redux.dispatch({type : 'modifyGold', player : 1, amount : -3});
    newStore = redux.getState();
    assert(newStore.players[1].gold === 0);
  };

  @test startSingleSpecGame() {

  };
};
