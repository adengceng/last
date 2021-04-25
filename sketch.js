let jsonobj
let btns =[]; // 管理所有btn
//預先讀取
function preload(){
  jsonobj= loadJSON('data.json');
  img = loadImage('assets/map.jpeg');
}


function setup() {
  createCanvas(360, 400);
  console.log(jsonobj);
  console.log(jsonobj.metadata.count);
  console.log(jsonobj.features[0].geometry.coordinates);
  
   jsonobj.features.forEach((v)=>{
  let lat =v.geometry.coordinates[0];
  let lang = v.geometry.coordinates[1];
  let mag= v.properties.mag;
    noStroke();
    fill(255,0,0,mag*mag*2);
     //根據每筆資料製作btn物件
     btns.push(new btn((lat+180),180-(lang+90),mag*mag*0.8));
  });
}

function draw() {
  //background(220);
  image(img,0,0,360,180);
  //根據btns袋子中的每物件進行顯示
  btns.forEach((b)=>{
    b.display();
  })
}

//物件導向建立 按鈕
class btn{
  constructor(x,y,size){
    this.x=x;
    this.y=y;
    this.size=size;
  }
  display(){
    if (mouseX>this.x-this.size/2 &&
        mouseX<this.x+this.size/2 &&
        mouseY>this.y-this.size/2 &&  
        mouseY<this.y+this.size/2 
       ){
      fill(0,100,212,this.size*2);
      circle(this.x,this.y,this.size);
        push();
        fill(214,0,153);
      textSize(24);
      text("經度："+this.x,10,250);
      text("緯度："+this.y,10,280);
      text("震度："+this.size/6,10,310);
         fi11(255);
      rect(0,220,360,220);
        pop();
      
      console.log(k);
    }
    else{
      fill(81,0,0,this.size*2);
        circle(this.x,this.y,this.size);
    }
    noStroke();
  }
}
