/*---PHP gets---*/
var proj0='assets/bg1.jpg'
var p0title="NSFP Illustration"
var proj1='assets/bg2.jpg'
var p1title="NYC Photography"
var proj2='assets/bg3.png'
var p2title="NSFP Magazine November 2019"

/*---end of PHP gets---*/

/*-----------starting definitions-------------*/
var mode=3;
var root=root = document.documentElement
container=d3.select('#container')
var detectMobile=false
m0Blocks=['name','proj','proj','genre','toggle','proj']
m1Blocks=['name','proj','back','back','genre','toggle','proj','back','proj']
m2Blocks=['name','proj','back','exp','back','back','back','des','proj','pho','proj','ill','back','toggle','back']
let vh = 1
var capHeight="30"

/*-----------end of definitions-------------*/

/*-----------update display-------------*/
function updateHeight(){
  //credit to Louis Hoebregts at css tricks for responsive height tutorial
  /*css-tricks.com/the-trick-to-viewport-units-on-mobile/*/
  vh = screenheight
  root.style.setProperty('--vh', `${vh}px`)
  container.style('height',vh)
  document.getElementById('container').style.height='var(--vh)'
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

function resetGrid(){
  var blockCounter=0
  var cardCounter=0
  var projCounter=0
  var block;
  var card;

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
      block.attr("onclick","randomize(m2Blocks);")
      break;
      case 'back':
      blockAdder(item,row,blockCounter)
      break;
      case 'genre':
      blockAdder(item,row,blockCounter)
      break;
      case 'des':
      blockAdder(item,row,blockCounter)
      block.classed("genretype",true)
      cardAdder()
      card.append('span').html('design').attr("class","genrehead")
      break;
      case 'ill':
      blockAdder(item,row,blockCounter)
      block.classed("genretype",true)
      cardAdder()
      card.append('span').html('illustration').attr("class","genrehead")
      break;
      case 'exp':
      blockAdder(item,row,blockCounter)
      block.classed("genretype",true)
      cardAdder()
      card.append('span').html('experiments').attr("class","genrehead")
      break;
      case 'pho':
      blockAdder(item,row,blockCounter)
      block.classed("genretype",true)
      cardAdder()
      card.append('span').html('photo').attr("class","genrehead")
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
} //end of function
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
}

function listenerCallMobile(){
  checkModeMobile2()
  console.log('fired')
  imgCaption()
}
/*-----------end of mode check-------------*/

function randomize(array){
  array.sort(function(a, b){return 0.5 - Math.random()});
  accommodate9Block(m2Blocks)
  accommodate6Block(m1Blocks)
  resetGrid()
}//end of randomize

listenerCall()
window.addEventListener("deviceorientation", listenerCallMobile, true);
window.addEventListener("orientationchange", listenerCallMobile);
window.onresize=listenerCall;
