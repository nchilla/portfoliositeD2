var mode=3;
container=d3.select('#container')
m0Blocks=['name','proj','proj','genre','toggle','proj']
m1Blocks=['name','proj','back','back','genre','toggle','proj','back','proj']
m2Blocks=['name','proj','back','exp','back','back','back','des','proj','pho','proj','ill','back','toggle','last']

//credit to Louis Hoebregts at css tricks for responsive height tutorial
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
/*css-tricks.com/the-trick-to-viewport-units-on-mobile/*/
function updateHeight(){
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  d3.select('#container').style('height',vh)
  console.log('updated')
}






function resetGrid(){
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
      row.append('div').attr("class","item name")
      .append('div').attr('id','name')
      .append('p').html('Nico<br>Chilla')
      break;
      case 'proj':
      row.append('div').attr("class","item proj")
      break;
      case 'toggle':
      row.append('div')
      .attr("class","item toggle")
      .attr("onclick","randomize(m2Blocks);")
      break;
      case 'back':
      row.append('div').attr("class","item back")
      break;
      case 'genre':
      row.append('div').attr("class","item genre")
      break;
      case 'des':
      row.append('div').attr("class","item genretype")
      break;
      case 'ill':
      row.append('div').attr("class","item genretype")
      break;
      case 'exp':
      row.append('div').attr("class","item genretype")
      break;
      case 'pho':
      row.append('div').attr("class","item genretype")
      break;
      case 'last':
      row.append('div').attr("class","item back last")
      break;
    } //end of switch
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

} //end of function

function checkMode(){
  screenwidth=window.innerWidth;
  screenheight=window.innerHeight;
  var newMode
  if(screenwidth<500){
    newMode=0
  }else if(screenwidth<=800 || screenheight>=1200){
    newMode=1
  }else if(screenwidth>800){
    newMode=2
  };

  if (newMode==mode){
    return;
  }else{
    mode=newMode
    resetGrid();
  };
  updateHeight()
  console.log(screenheight)
  console.log(mode)
  console.log(vh)
} //end of function


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
  console.log(m0Blocks)
}//end of accomodate9

function randomize(array){
  array.sort(function(a, b){return 0.5 - Math.random()});
  accommodate9Block(m2Blocks)
  accommodate6Block(m1Blocks)
  resetGrid()
}//end of randomize



checkMode()
window.addEventListener("devicemotion", checkMode, true);
window.onresize=checkMode;
