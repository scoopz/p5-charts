// code testing file

let chart;

function setup() {
  createCanvas(windowWidth, windowHeight);

  chart = new P5BarChart({
    canvas: {
      width: 1280,
      height: 720,
    },
    position: { x: 100, y: 100 },
    data: [105, 220, 120, 75, 600.25, 55, 23, 45, 1000],
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
      labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
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
