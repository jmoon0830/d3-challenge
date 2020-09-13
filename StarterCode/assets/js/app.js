// @TODO: YOUR CODE HERE!
var scatterPlot = d3.select("#scatter");
d3.csv("assets/data/data.csv").then(function(d) {
    console.log(d);
    var stateAb = [];
    var poverty = [];
    var healthCare = [];
    var age = [];
    var income = [];
    var obesity = [];
    var smokes = [];
    for (var i=0; i<d.length; i++) {
        console.log(d[i].healthcare);
        stateAb.push(d[i].abbr)
        poverty.push(d[i].poverty)
        healthCare.push(d[i].healthcare)
        age.push(d[i].age);
        income.push(d[i].income);
        obesity.push(d[i].obesity);
        smokes.push(d[i].smokes);
    };

    console.log(stateAb);

    var trace1 = {
        x:poverty,
        y:healthCare,
        mode: 'markers+text',
        text: stateAb,
        type:"scatter",
        marker: {size:20}
    };
    var myPlot = document.getElementById('scatter'),
        scatterData = [trace1],
        layout = {
            title:"Healthcare vs. Poverty",
            xaxis: {
                title: {
                    text: 'Poverty'
                }
            },
            xaxis2: {
                title: {
                    text: 'Poverty2'
                }
            },
            yaxis: {
                title: {
                    text: 'Healthcare'
                }
            }
        };

    Plotly.newPlot("scatter",scatterData,layout);
    // testing bonus
    myPlot.on("plotly_click",handleChange);
    function handleChange () {
        console.log("hi");
    };
});