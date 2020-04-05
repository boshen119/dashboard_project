// Starter code for Plotly US Map with hover alert
// source: https://codepen.io/pen/?&editable=true

// Create map object:

// Plotly.
d3.json('/static/loan_sum_avg_cs.json', function(data){
    console.log(data);
  });
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