// code testing file

let chart;

function setup() {
  createCanvas(windowWidth, windowHeight);

  chart = new P5BarChart({
    canvas: {
      width: windowWidth / 1.5,
      height: windowHeight / 1.5,
    },
    position: { x: 100, y: 100 },
    data: [100, 200, 100, 75, 60, 20, 20, 20, 100, 200, 100, 75],
    horizontalLines: {
      visible: true,
      color: color(255, 0, 255),
    },
    bars: {
      fillColor: color(255, 0, 0),
      borderColor: color(0),
    },
    background: {
      fillColor: color(255),
      borderColor: color(255),
    },
    xAxis: {
      labels: ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "G", "H"],
      labelColor: color(0, 255, 0),
      lineColor: color(0, 255, 0),
    },
    yAxis: {
      labelColor: color(0, 0, 255),
      lineColor: color(255, 0, 0),
    },
  });
}

function draw() {
  background(190);
  chart.display();
}

function windowResized() {
  chart.resize(windowWidth / 1.5, windowHeight / 1.5);
}
