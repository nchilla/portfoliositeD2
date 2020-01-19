/*---PHP gets---*/
var proj0='assets/bg1.jpg'
var p0title="NSFP Illustration"
var proj1='assets/bg2.jpg'
var p1title="NYC Photography"
var proj2='assets/bg3.png'
var p2title="NSFP Magazine November 2019"
var wptog='play'

/*---end of PHP gets---*/

/*-----------starting definitions-------------*/
var mode=3;
var root=root = document.documentElement
container=d3.select('#container')
var detectMobile=false
m0Blocks=['name','proj','proj','genre','toggle','proj']
m1Blocks=['name','back','back','toggle','back','theme','genre','back','back']
m2Blocks=['name','toggle','back','back','back','des','ill','back','theme','back','exp','pho','back','back','back']
let vh = 1
var capHeight="30"
var backArr=["B","A","C","D","E","F","G","H"]

/*-----------end of starting definitions-------------*/

/*Static SVGs*/
var arrow='<svg xmlns="http://www.w3.org/2000/svg" class="arrow" viewBox="0 0 102.61 70.2"><polyline points="0.8 69.6 51.3 1.68 101.8 69.6"/></svg>'

/*-----------update display-------------*/
function updateHeight(){
  //credit to Louis Hoebregts at css tricks for responsive height tutorial
  /*css-tricks.com/the-trick-to-viewport-units-on-mobile/*/
  vh = screenheight
  root.style.setProperty('--vh', `${vh}px`)
  container.style('height',vh)
  document.getElementById('container').style.height='var(--vh)'
}

function updateSVG(){
  cardheight=d3.select('.textureborder').node().getBoundingClientRect().height-4
  d3.selectAll('.resvg').style("height",cardheight+'px')
}

function imgCaption(){
  num0=d3.select('.num0').node().getBoundingClientRect()
  if ((num0.height-30)>num0.width){
    capHeight=num0.height-num0.width
    d3.selectAll('.projdesc').style("line-height","19px")
    d3.selectAll('.projdesc').style("padding-top","10px")
  }else{
    capHeight=30
    d3.selectAll('.projdesc').style("line-height","30px")
    d3.selectAll('.projdesc').style("padding-top","0px")
  }
  d3.selectAll('.projdesc').style("height",capHeight+"px")
}

function checkTog(){
  if (wptog=='play'){
    d3.select('.worktog').classed('toghover',true)
    d3.select('.playtog').classed('toghover',false)
    d3.select('.worktog').select('.togsquare').style('display','none')
    d3.select('.playtog').select('.togsquare').style('display','inherit')
  }else{
    d3.select('.worktog').classed('toghover',false)
    d3.select('.playtog').classed('toghover',true)
    d3.select('.worktog').select('.togsquare').style('display','inherit')
    d3.select('.playtog').select('.togsquare').style('display','none')
  }
}

function resetGrid(){
  var blockCounter=0
  var cardCounter=0
  var projCounter=0
  var block;
  var card;
  var backSpread=[...backArr]

  function blockAdder(item,row,counter){
    var identifier="block"+counter
    row.append('div')
    .attr("class","item "+item)
    .attr("id",identifier)
    block=d3.select("#"+identifier)
  }

  function cardAdder(){
    cardNum='num'+cardCounter
    block.append('div')
    .classed("card",true)
    .classed(cardNum,true)
    card=d3.select("."+cardNum)
    cardCounter+=1
  }

  function imgAdder(){
    cardAdder()
    switch (projCounter){
      case 0:
      card.append('img')
      .classed("thumb",true)
      .attr('src',proj0)
      break;
      case 1:
      card.append('img')
      .classed("thumb",true)
      .attr('src',proj1)
      break;
      case 2:
      card.append('img')
      .classed("thumb",true)
      .attr('src',proj2)
      break;
    }

    cardAdder()
    switch (projCounter){
      case 0:
      card.append("div")
      .classed("projdesc",true)
      .html(p0title)
      break;
      case 1:
      card.append("div")
      .classed("projdesc",true)
      .html(p1title)
      break;
      case 2:
      card.append("div")
      .classed("projdesc",true)
      .html(p2title)
      break;
    }
    projCounter+=1
  }

  function svgAdder(){
    cardAdder()
    card.classed('texture',true)
    if (block.attr("id")=="block14"){
      card.append('div').classed('textureborder',true)
    }else{
      switch(backSpread[0]){
        case "A":
        card.append('div').classed('textureborder',true)
        .append('svg').classed('resvg',true)
        svg=d3.select('.'+cardNum).select('.textureborder').select('svg')
        svg
        .append("line")
        .classed('line',true)
        .attr("x1", '0%')
        .attr("x2", '100%')
        .attr("y1", '0%')
        .attr("y2", "100%")
        svg
        .append("line")
        .classed('line',true)
        .attr("x1", '100%')
        .attr("x2", '0%')
        .attr("y1", '0%')
        .attr("y2", "100%")
        break;
        case "B":
        card.append('div').classed('textureborder',true).append('svg').classed('resvg',true)
        svg=d3.select('.'+cardNum).select('.textureborder').select('svg')
        svg.append("line")
        .classed('line',true)
        .attr("x1", '25%')
        .attr("x2", '25%')
        .attr("y1", '25%')
        .attr("y2", "75%")
        svg.append("line")
        .classed('line',true)
        .attr("x1", '50%')
        .attr("x2", '50%')
        .attr("y1", '25%')
        .attr("y2", "75%")

        svg.append("line")
        .classed('line',true)
        .attr("x1", '75%')
        .attr("x2", '75%')
        .attr("y1", '25%')
        .attr("y2", "75%")
        inBox=d3.select('.'+cardNum).select('.textureborder')
        inBox.append('div').classed('arrow1',true).html(arrow)
        inBox.append('div').classed('arrow2',true).html(arrow)
        inBox.append('div').classed('arrow3',true).html(arrow)
        break;
        case "C":
        card.append('div').classed('textureborder',true).append('svg').classed('resvg',true)
        svg=d3.select('.'+cardNum).select('.textureborder').select('svg')
        svg
        .append("line")
        .classed('line',true)
        .attr("x1", '100%')
        .attr("x2", '0%')
        .attr("y1", '0%')
        .attr("y2", "100%")
        svg
        .append("line")
        .classed('line',true)
        .attr("x1", '76%')
        .attr("x2", '0%')
        .attr("y1", '0%')
        .attr("y2", "76%")
        svg
        .append("line")
        .classed('line',true)
        .attr("x1", '25%')
        .attr("x2", '100%')
        .attr("y1", '100%')
        .attr("y2", "25%")
        svg
        .append("line")
        .classed('line',true)
        .attr("x1", '50%')
        .attr("x2", '0%')
        .attr("y1", '0%')
        .attr("y2", "50%")
        svg
        .append("line")
        .classed('line',true)
        .attr("x1", '100%')
        .attr("x2", '50%')
        .attr("y1", '50%')
        .attr("y2", "100%")
        break;
        case "D":
        card.append('div').classed('textureborder',true)
        break;
        case "E":
        card.append('div').classed('textureborder',true)
        break;
        case "F":
        card.append('div').classed('textureborder',true)
        break;
        case "G":
        card.append('div').classed('textureborder',true)
        break;
        case "H":
        card.append('div').classed('textureborder',true)
        break;
      }//end of switch
    }//end of if-statement

    backSpread.splice(0,1)
  }//end of svgAdder

  function genreAdder(genre){
    card.append('div').classed('margincontainer',true)
    .append('div').classed('headbox',true).attr('id',genre+'head')
    holder=d3.select('#'+genre+'head')
    if (genre=='experiments'){
      holder.append('div').classed('genrehead',true).html(genre)
      holder.append('div').classed('arrowholder',true)
      holder.append('div').classed('arrowline',true)
      .append('svg').classed('arrowsvg',true)
      .append('line')
      .classed('wline',true)
      .attr("x1", '0%')
      .attr("x2", '100%')
      .attr("y1", '50%')
      .attr("y2", "50%")
      holder.select('.arrowline')
      .append('div').classed('rsquare',true)


    }else{
      holder.append('div').classed('arrowline',true)
      .append('svg').classed('arrowsvg',true)
      .append('line')
      .classed('wline',true)
      .attr("x1", '0%')
      .attr("x2", '100%')
      .attr("y1", '50%')
      .attr("y2", "50%")
      holder.append('div').classed('arrowholder',true)
      .append('div').classed('square',true)
      holder.append('div').classed('genrehead',true).html(genre)
    }

  }

  rows=d3.selectAll('.row')
  items=d3.selectAll('.item')
  rows.remove();
  items.remove();
  container.append('div').attr("class","row r1")
  container.append('div').attr("class","row r2")
  container.append('div').attr("class","row r3")
  r1=d3.select('.r1')
  r2=d3.select('.r2')
  r3=d3.select('.r3')

  function insert(item,row){
    switch(item){
      case 'name':
      blockAdder(item,row,blockCounter)
      block.append('div').attr('id','nametype')
      .append('p').html('Nico<br>Chilla')
      break;
      case 'proj':
      blockAdder(item,row,blockCounter)
      imgAdder()
      break;
      case 'toggle':
      blockAdder(item,row,blockCounter)
      cardAdder()
      card.append('div').classed('shuffle',true).html('shuffle<br>tiles!').attr("onclick","randomize(m2Blocks);")
      card.append('div').classed('workplay',true)
      .append('div').classed('worktog',true).attr('onclick','toggleDisplay("work");').html('work').append('div').classed('togsquare',true)
      d3.select('.workplay').append('div').attr('onclick','toggleDisplay("play");').classed('playtog',true).html('play')
      .append('div').classed('togsquare',true)
      break;
      case 'back':
      blockAdder(item,row,blockCounter)
      svgAdder()
      break;
      case 'genre':
      blockAdder(item,row,blockCounter)
      break;

      case 'des':
      blockAdder(item,row,blockCounter)
      block.classed("genretype",true)
      cardAdder()
      genreAdder('design')
      break;
      case 'ill':
      blockAdder(item,row,blockCounter)
      block.classed("genretype",true)
      cardAdder()
      genreAdder('illustration')
      break;
      case 'exp':
      blockAdder(item,row,blockCounter)
      block.classed("genretype",true)
      cardAdder()
      genreAdder('experiments')
      break;
      case 'pho':
      blockAdder(item,row,blockCounter)
      block.classed("genretype",true)
      cardAdder()
      genreAdder('photo')
      break;
      case 'theme':
      blockAdder(item,row,blockCounter)
      block.classed("back",true)
      break;
    } //end of switch
    blockCounter+=1
  }

  switch(mode){
    case 0:
    r1Items=m0Blocks.slice(0,2)
    r2Items=m0Blocks.slice(2,4)
    r3Items=m0Blocks.slice(4,6)
    r1Items.forEach(item=>insert(item,r1))
    r2Items.forEach(item=>insert(item,r2))
    r3Items.forEach(item=>insert(item,r3))
    break;

    case 1:
    r1Items=m1Blocks.slice(0,3)
    r2Items=m1Blocks.slice(3,6)
    r3Items=m1Blocks.slice(6,10)
    r1Items.forEach(item=>insert(item,r1))
    r2Items.forEach(item=>insert(item,r2))
    r3Items.forEach(item=>insert(item,r3))
    break;

    case 2:
      r1Items=m2Blocks.slice(0,5)
      r2Items=m2Blocks.slice(5,10)
      r3Items=m2Blocks.slice(10,15)
      r1Items.forEach(item=>insert(item,r1))
      r2Items.forEach(item=>insert(item,r2))
      r3Items.forEach(item=>insert(item,r3))
    break;

  } //end of switch
blockCounter=0
imgCaption()
updateSVG()
checkTog()
} //end of resetGrid
/*-----------end of update display-------------*/

/*-----------mode check-------------*/
var zeroMax=500
var oneMax=900
function checkMode(){
  screenwidth=window.innerWidth;
  screenheight=window.innerHeight;
  updateHeight()
  var newMode
  if(screenwidth<zeroMax){
    newMode=0
    updateHeight()
  }else if(screenwidth<=oneMax || screenheight>=1200){
    newMode=1
  }else if(screenwidth>oneMax){
    newMode=2
  };

  if (newMode==mode){
    return;
  }else{
    mode=newMode
    resetGrid();
  };
} //end of checkMode
function checkModeMobile(){
  detectMobile=true
  screenwidth=window.innerWidth;
  screenheight=window.innerHeight;
  updateHeight()
  var newMode
  if(screenwidth<zeroMax){
    newMode=0
  }else if(screenwidth<=oneMax || screenheight>=1200){
    newMode=1
  }else if(screenwidth>oneMax){
    newMode=2
  };

  if (newMode==mode){
    return;
  }else{
    mode=newMode
    resetGrid();
  };
} //end of checkModeMobile

function accommodate9Block(array){
  m1Blocks=[]
  var lever=true;
  var counter=0
  function arrange(item){
    switch(item){
      case 'name':
      m1Blocks.push('name')
      break;
      case 'proj':
      m1Blocks.push('proj')
      break;
      case 'toggle':
      m1Blocks.push('toggle')
      break;
      case 'back':
      if(lever==true){
        m1Blocks.push('back')
        lever=false
      }else{
        lever=true
      }
      break;
      case 'des':
      if (counter==2){
        m1Blocks.push('genre')
        counter+=1
      }else{
        counter+=1
      }
      break;
      case 'ill':
      if (counter==2){
        m1Blocks.push('genre')
        counter+=1
      }else{
        counter+=1
      }
      break;
      case 'exp':
      if (counter==2){
        m1Blocks.push('genre')
        counter+=1
      }else{
        counter+=1
      }
      break;
      case 'pho':
      if (counter==2){
        m1Blocks.push('genre')
        counter+=1
      }else{
        counter+=1
      }
      break;

      case 'last':
      if(lever==true){
        m1Blocks.push('back')
        lever=false
      }else{
        lever=true
      }
      break;
    } //end of switch
  }//end of arrange
  array.forEach(item=>arrange(item))
}//end of accomodate9
function accommodate6Block(array){
  m0Blocks=[]
  function arrange(item){
    switch(item){
      case 'name':
      m0Blocks.push('name')
      break;
      case 'proj':
      m0Blocks.push('proj')
      break;
      case 'toggle':
      m0Blocks.push('toggle')
      break;
      case 'back':
      break;
      case 'genre':
      m0Blocks.push('genre')
      break;
    } //end of switch
  }//end of arrange
  array.forEach(item=>arrange(item))
}//end of accomodate9
function checkModeMobile2(){
  detectMobile=true
  setTimeout(checkModeMobile, 1);
} //end of checkModeMobile2
function checkMode2(){
if (detectMobile==false){
  setTimeout(checkMode, 1);
}else{
}
}//end of checkMode2

function listenerCall(){
  checkMode()
  imgCaption()
  updateSVG()
  checkTog()
}

function listenerCallMobile(){
  checkModeMobile2()
  imgCaption()
  updateSVG()
  checkTog()
}
/*-----------end of mode check-------------*/

function toggleDisplay(switcher){
  if (switcher=='play'&&wptog=='play'){
  }else if(switcher=='play'&&wptog=='work'){
    wptog='play'
  }else if(switcher=='work'&&wptog=='work'){
  }else if(switcher=='work'&&wptog=='play'){
    wptog='work'
  }
  checkTog()
}//end of toggleDisplay


function randomize(array){
  array.sort(function(a, b){return 0.5 - Math.random()});
  accommodate9Block(m2Blocks)
  accommodate6Block(m1Blocks)
  backArr.sort(function(a, b){return 0.5 - Math.random()});
  resetGrid()
}//end of randomize




listenerCall()
window.addEventListener("deviceorientation", listenerCallMobile, true);
window.addEventListener("orientationchange", listenerCallMobile);
window.onresize=listenerCall;
