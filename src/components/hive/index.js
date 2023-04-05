import HexGrid from './hexgrid';
import Canvas from './canvas';

export default class Hive {
  constructor(ref, q, r) {
    this.hexGrid = new HexGrid(q, r);
    this.canvas = new Canvas(ref, this.hexGrid);
  }

  reveal() {}
}