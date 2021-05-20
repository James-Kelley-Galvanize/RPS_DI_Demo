#!/usr/bin/env node
const yargs = require("yargs");

const options = yargs.usage("Usage: -m <move>").option("m", {
  alias: "move",
  describe: "Roshambo Move",
  type: "string",
  demandOption: true,
}).argv;

const { Rock, Paper, Scissors } = require("./Moves");

class MoveMaker {
  constructor(game, moves) {
    this.moves = [...moves];
    this.game = game;
  }
  get getRandomNum() {
    return Math.floor(Math.random() * 3);
  }
  getMove() {
    let m = this.moves[this.getRandomNum];
    return new m();
  }
}
class Game {
  constructor(humanMove) {
    this.humanMove = humanMove;
    this.MoveMaker = new MoveMaker(this, [Rock, Paper, Scissors]);
    this.result = this.getResult(humanMove.toUpperCase());
  }
  getResult(move) {
    let theMove = this.MoveMaker.getMove();
    this.computerMove = theMove;
    return theMove.checkResult(move);
  }
  logResult() {
    const winner = this.result;
    const { humanMove, computerMove } = this;
    const compMoveName = computerMove.name;

    const resultMessages = {
      computer: `The computer plays ${compMoveName} and WINS against the user's ${humanMove}`,
      human: `The computer plays ${compMoveName} and LOSES to the user's ${humanMove}`,
      tie: `The computer plays ${compMoveName} and TIES with the user's ${humanMove}`,
    };
    console.log(resultMessages[winner]);
  }
}
const theGame = new Game(options.move);
theGame.logResult();
