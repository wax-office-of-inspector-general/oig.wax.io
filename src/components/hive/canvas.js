import * as PIXI from 'pixi.js';

export default class Canvas {
  constructor(ref, hexGrid) {
    this.hexGrid = hexGrid;

    this.app = new PIXI.Application({
      backgroundAlpha: 0,
      view: ref
    });

    this.graphics = new PIXI.Graphics();

    this.graphics.lineStyle(1, 0x999999);

    this.hexGrid.grid.forEach(this.render.bind(this));
  }

  render(hexagon) {
    const [firstCorner, ...otherCorners] = hexagon.corners;

    // move the "pen" to the first corner
    this.graphics.moveTo(firstCorner.x, firstCorner.y);

    // draw lines to the other corners
    otherCorners.forEach(({ x, y }) => this.graphics.lineTo(x, y));

    // finish at the first corner
    this.graphics.lineTo(firstCorner.x, firstCorner.y);

    this.app.stage.addChild(this.graphics);
  }
}
