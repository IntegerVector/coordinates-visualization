export class Board {
  constructor(canvasId) {
    this._canvas = document.getElementById(canvasId);
  };

  filter(callBack) {
    this._filter = callBack;
  }

  draw({width, height, count, scale}) {
    this._width = width;
    this._height = height;
    this._scale = scale;
    this._canvas.width = width;
    this._canvas.height = height;
    this._centerX = width / 2;
    this._centerY = height / 2

    this._drawBackground();
    this._drawDots(count);
  }

  _getContext() {
    return this._canvas.getContext('2d');
  }

  _drawBackground() {
    const background = this._getContext();
    background.fillStyle = 'black';
    background.fillRect(0, 0, this._width, this._height);
  }

  _drawDots(dotsCount) {
    const dotContext = this._getContext();
    dotContext.fillStyle = 'white';

    for (let dot = 1; dot <= dotsCount; ++dot) {
      if (typeof this._filter === 'function') {
        if (!this._filter(dot)) continue;
      }

      const x = this._scale * dot * Math.cos(dot) + this._centerX - 5;
      const y = this._scale * dot * Math.sin(dot) + this._centerY - 5;

      dotContext.rect(x, y, 10, 10);
    }

    dotContext.fill();
  }
}
