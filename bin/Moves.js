class Move {
  constructor(beats, losesTo) {
    this.beats = beats;
    this.losesTo = losesTo;
  }
  checkResult(humanMove) {
    if (this.beats === humanMove) return "computer";
    if (this.losesTo === humanMove) return "human";
    return "tie";
  }
  get name() {
    return this.constructor.name.toUpperCase();
  }
}

class Rock extends Move {
  constructor() {
    super("SCISSORS", "PAPER");
  }
}
class Paper extends Move {
  constructor() {
    super("ROCK", "SCISSORS");
  }
}
class Scissors extends Move {
  constructor() {
    super("PAPER", "ROCK");
  }
}

module.exports = { Rock, Paper, Scissors };
