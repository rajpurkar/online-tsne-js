!function(t,e,n,o,r,i){function a(){var t=p.Y;f.selectAll(".u").data(w.words).attr("transform",function(e,n){return"translate("+(200*t.get(n,0)*g+v+400)+","+(200*t.get(n,1)*g+m+400)+")"})}function s(){var t=e(".viewport").width(),n=400;f.attr("width",t).attr("height",n)}function l(){var t=n.select(".viewport");f=t.append("svg");var e=f.selectAll(".b").data(w.words).enter().append("g").attr("class","u");e.append("rect").attr("width",function(t){return 8*t.length+10}).attr("height",20).attr("rx",5).attr("ry",5).style("fill",function(t){return i({luminosity:"light",seed:t})}).style("fill-opacity",.8),e.append("text").attr("text-anchor","middle").attr("x",function(t){return 4*t.length+5}).attr("y",10).attr("alignment-baseline","central").attr("fill","#333").text(function(t){return t}),u(f),n.select(window).on("resize",s),s()}function c(){v=n.event.translate[0],m=n.event.translate[1],g=n.event.scale}function d(){p.step();var t=Math.round(p.iter/(o.now()-x)*1e3);e("#cost").html("iteration "+p.iter+", fps: "+t),a(),10===h&&y&&window.console&&window.console.profile&&console.profileEnd(),h++,requestAnimationFrame(d)}var w,f,p=new t.TSNE({theta:.8}),u=n.behavior.zoom().scaleExtent([.05,10]).center([0,0]).on("zoom",c),v=0,m=0,g=1,h=0,x=o.now(),y=!0;e(window).load(function(){e.getJSON("/streaming-tsne-js/data/wordvecs50dtop1000.json",function(t){var o=300;w={words:t.words.slice(0,o),vecs:t.vecs.slice(0,o)},y&&window.console&&window.console.profile&&console.profile("initialization"),console.time("streamingInit"),p.initData(w.vecs),console.timeEnd("streamingInit"),window.console&&window.console.profile&&console.profileEnd(),l(),y&&window.console&&window.console.profile&&console.profile("step"),requestAnimationFrame(d),e("#addPoints").click(function(){for(var e=0;e<10;e++)console.log("adding word",t.words[o]),p.add(t.vecs[o]),o++;w.words=t.words.slice(0,o),n.selectAll(".viewport > svg").remove(),l()})})})}(tsne,$,d3,performance,tsnejs,randomColor);