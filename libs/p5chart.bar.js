class P5BarChart {
  constructor({
    canvas,
    position,
    data,
    horizontalLines,
    bars,
    background,
    xAxis,
    yAxis,
  }) {
    this.canvas = {
      width: !canvas || canvas.width === undefined ? 1280 : canvas.width,
      height: !canvas || canvas.height === undefined ? 720 : canvas.height,
    };
    this.pos = {
      x: !position || position.x === undefined ? 0 : position.x,
      y: !position || position.y === undefined ? 0 : position.y,
    };
    this.data = data ? data : [];
    this.horizontalLines = {
      visible:
        !horizontalLines || horizontalLines.visible === undefined
          ? true
          : horizontalLines.visible,
      color:
        !horizontalLines || horizontalLines.color === undefined
          ? color(0)
          : horizontalLines.color,
    };
    this.bars = {
      fillColor:
        !bars || bars.fillColor === undefined ? color(0) : bars.fillColor,
      borderColor:
        !bars || bars.borderColor === undefined ? color(0) : bars.borderColor,
    };
    this.background = {
      fillColor:
        !background || background.fillColor === undefined
          ? color(255)
          : background.fillColor,
      borderColor:
        !background || background.borderColor === undefined
          ? color(255)
          : background.borderColor,
    };
    this.xAxis = {
      labels: !xAxis || xAxis.labels === undefined ? [] : xAxis.labels,
      labelColor:
        !xAxis || xAxis.labelColor === undefined ? color(0) : xAxis.labelColor,
      lineColor:
        !xAxis || xAxis.lineColor === undefined ? color(0) : xAxis.lineColor,
      description:
        !xAxis || xAxis.description === undefined
          ? color(0)
          : xAxis.description,
    };
    this.yAxis = {
      labelColor:
        !yAxis || yAxis.labelColor === undefined ? color(0) : yAxis.labelColor,
      lineColor:
        !yAxis || yAxis.lineColor === undefined ? color(0) : yAxis.lineColor,
      description:
        !yAxis || yAxis.description === undefined
          ? color(0)
          : yAxis.description,
    };
    this.preProcessData();
  }

  // resizes the whole drawboard for the chart
  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  // draw contents to the screen
  display() {
    // draw the board
    stroke(this.background.borderColor);
    fill(this.background.fillColor);
    rect(this.pos.x, this.pos.y, this.canvas.width, this.canvas.height);

    // draw bar lines
    stroke(this.yAxis.lineColor);
    line(
      this.pos.x + 130,
      this.yDrawBottom,
      this.pos.x + 130,
      this.pos.y + 100
    );
    stroke(this.xAxis.lineColor);
    line(
      this.pos.x + 130,
      this.yDrawBottom,
      this.pos.x + 1200,
      this.yDrawBottom
    );

    // draw y texts
    fill(this.yAxis.labelColor);
    stroke(this.yAxis.labelColor);
    textAlign(RIGHT, CENTER);
    for (let i = this.max; i >= 0; i -= this.yIncrement) {
      text(
        i.toFixed(2),
        this.pos.x + 130 - this.max.toString().length * this.w(2),
        this.yDrawBottom - i * this.yDistance
      );
    }

    // draw horizontal lines
    if (this.horizontalLines.visible) {
      fill(this.horizontalLines.color);
      stroke(this.horizontalLines.color);
      for (let i = this.max; i > 0; i -= this.yIncrement) {
        line(
          this.w(this.pos.x + 130),
          this.yDrawBottom - i * this.yDistance,
          this.w(this.pos.x + 1200),
          this.yDrawBottom - i * this.yDistance
        );
      }
    }

    // draw bars
    fill(this.bars.fillColor);
    stroke(this.bars.borderColor);
    for (let i = 0; i < this.data.length; i++) {
      let line = this.data[i];
      rect(
        this.pos.x + 150 + this.xEachSpace * i,
        this.yDrawBottom - line * this.yDistance,
        this.barWidth,
        line * this.yDistance
      );
    }

    // draw x Labels
    fill(this.xAxis.labelColor);
    stroke(this.xAxis.labelColor);
    textAlign(CENTER);
    for (let i = 0; i < this.xAxis.labels.length; i++) {
      let xLabel = this.xAxis.labels[i];
      text(
        xLabel,
        this.pos.x + 150 + this.xEachSpace * i + this.barWidth / 2,
        this.yDrawBottom + 20
      );
    }
  }

  preProcessData() {
    // y bottom most position
    this.yDrawBottom = this.pos.x + this.canvas.height - this.h(70);

    // find min and max values
    this.max = Math.max.apply(Math, this.data);

    // y position difference between two labels
    this.yIncrement = this.yi();

    // width can be taken to display one x instance
    this.xEachSpace = (1200 - 130) / this.data.length;

    // defines the bar width
    this.barWidth = (50 / 120) * this.xEachSpace;

    // y pixel difference between two labels
    this.yDistance = this.yd();
  }

  yd() {
    return this.h((5.5 / this.max) * 100);
  }

  yi() {
    return this.h((10 / 100) * this.max);
  }

  w(width) {
    return (width / 1280) * this.canvas.width;
  }

  h(height) {
    return (height / 720) * this.canvas.height;
  }
}
