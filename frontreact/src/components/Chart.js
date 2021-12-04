import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Chart = ({ width = 600, height = 600, data }) => {
  const barChart = useRef();

  useEffect(() => {
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    d3.select(barChart.current).select('g').remove();

    const svg = d3.select(barChart.current);
    svg.attr('width', width);
    svg.attr('height', height);

    let g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear().domain([0, 500]).range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, iwidth])
      .padding(0.1);

    const bars = g.selectAll("rect").data(data);
    bars.enter().append("rect")
      .attr("class", "bar")
      .style("fill", "blue")
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.stock))
      .attr("height", d => iheight - y(d.stock))
      .attr("width", x.bandwidth())  
      .on('mouseover',hoverIn )
      .on('mouseout', hoverOut)

    g.append("g")
      .classed("y--axis", true)
      .call(d3.axisLeft(y));
      
    const tooltip = d3.select("body")
      .append("tooltip")
      .style("position", "absolute")
      .style("opacity", 1);

    function hoverIn(bar, product) { 
      tooltip.transition()
        .style('opacity', 1);

      tooltip.html(`Hay ${product.stock} unidades de ${product.name}`)
        .style('background-color', 'white')
        .style('left', (bar.x + 30) + 'px')
        .style('top', (bar.y + 30) + 'px')

    }

    function hoverOut() {
      tooltip.transition()
        .style('opacity', 0);
    }

  });

  return (
    <div id='chartArea'>
      <svg ref={barChart}></svg>
    </div>
  );
};

export default Chart;
