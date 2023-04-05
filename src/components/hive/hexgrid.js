import { defineHex, Grid, spiral } from 'honeycomb-grid';

export default class HexGrid {
  constructor(q, r) {
    this.q = q;
    this.r = r;

    this.hex = defineHex({ dimensions: 30 });
    this.grid = new Grid(
      this.hex,
      spiral({q: 1, r: 2, s: -3})
    );
  }
}
