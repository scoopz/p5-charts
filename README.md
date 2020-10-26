
# p5-charts
This is sort of a library which you can integrate in your p5.js project to fulfil chart needs. There is no installation at the moment, you can just copy the class you want directly from the source and use it by providing below information.

### Settings :: P5BarChart
| Property | Type | Description| Default| 
|--|--|--|--|
|canvas.width| Number| Defines the width of the chart canvas. | 1280|
|canvas.height| Number| Defines the height of the chart canvas. | 720|
|canvas.FillColor| color | Defines fill color of the chart canvas. | color(255) |
|canvas.borderColor| color | Defines border color of the chart canvas. | color(255) |
|position.x| Number| Defines chart drawing x position. | 0 |
|position.y| Number| Defines chart drawing y position. | 0|
|data| Array.Number | Data used to draw the chart. | [] |
|horizontalLines.visible|Boolean|Enable or disable horizontal lines visibility.|true|
|horizontalLines.color|color|Defines the horizontal line colors.|color(0)|
|axisLines.color|color|Defines the color of x and y main lines.|color(0)|
|bars.fillColor|color|Defines bar fill color.|color(0)|
|bars.borderColor|color|Defines bar border color.|color(0)|
|xAxis.labels| Array.String | Data used to denote each data point in the x axis. | [] |
|xAxis.labelColor| color | Defines text color of x axis labels. | color(0) |
|xAxis.lineColor| color | Defines chart line color for x axis. | color(0) |
|xAxis.description [WIP]| String | Defines x axis descriptoin. | "The X axis" |
|yAxis.labelColor| color | Defines text color of y axis labels. | color(0) |
|yAxis.lineColor| color | Defines chart line color for y axis. | color(0) |
|yAxis.description [WIP]| String | Defines y axis descriptoin. | "The Y axis" |