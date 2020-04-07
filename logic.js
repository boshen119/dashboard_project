// Starter code for Plotly US Map with hover alert
// source: https://codepen.io/pen/?&editable=true

// Create map object:

// Plotly.
// declaring SVG params
var svg = d3.select('svg');
var width = +svg.attr('width');
var height = +svg.attr('height');

//starting the function
var render = data => {
  var margin = {top: 20, right: 40, bottom: 20, left: 100};
  var innerWidth = width - margin.left - margin.right;
  var innerHeight = height - margin.top - margin.bottom;

  var xscale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.sum_loaned)])
    .range([0, innerWidth]);

  var yscale = d3.scaleBand()
    .domain(data.map(d => d.addr_state))
    .range([0, innerHeight]);

    // Appending the bar traits to 'g'
    var g = svg.append("g")
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
    g.append('g').call(d3.axisLeft(yscale));
    g.append('g').call(d3.axisBottom(xscale))
    .attr('transform', `translate(0, ${innerHeight})`);

    g.selectAll('rect').data(data)
    .enter().append('rect')
    .attr('y', d => yscale(d.addr_state))
    .attr('width', d => xscale(d.sum_loaned))
    .attr('height', yscale.bandwidth());

};


  d3.csv('/static/new_sum_and_avg.csv').then(data=> {
    // console.log(data);
    data.forEach(d => {
      d.sum_loaned = +d.sum_loaned;
      d.avg_loan = +d.avg_loan;
      d.avg_annual_inc = +d.avg_annual_inc;
      d.avg_fico_range_low = +d.avg_fico_range_low;
      d.avg_fico_range_high = +d.avg_fico_range_high;
      console.log(d);
    })
    render(data);
  });


// d3.json('/static/loan_sum_avg_cs.json', function(data){
//   console.log("Hello");
//     console.log(data);
//   });
    //   function unpack(rows, key) {
    //       return rows.map(function(row) { return row[key]; });


//       var map = [{
//           type: 'choropleth',
//           locationmode: 'USA-states',
//           locations: unpack(rows, 'code'),
//           z: unpack(rows, 'loan_amnt exports'),
//           text: unpack(rows, 'state'),
//           zmin: 0,
//           zmax: 17000,
//           colorscale: [
//               [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
//               [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
//               [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
//           ],
//           colorbar: {
//               title: 'Millions USD',
//               thickness: 0.2
//           },
//           marker: {
//               line:{
//                   color: 'rgb(255,255,255)',
//                   width: 2
//               }
//           }
//       }];


//       var layout = {
//           title: 'Lending Club Loans in $ by State',
//           geo:{
//               scope: 'usa',
//               showlakes: true,
//               lakecolor: 'rgb(255,255,255)'
//           }
//       };

//       Plotly.newPlot("myDiv", map, layout, {showLink: false});
// });