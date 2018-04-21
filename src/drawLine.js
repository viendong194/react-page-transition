export default class DrawLine{
    constructor(){
        this.container = document.getElementsByClassName('canvas-container')[0];
        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        this.ctx.rect(0,0,window.innerWidth,window.innerHeight);
        this.ctx.fillStyle = '#000';
        this.ctx.fill();
        this.init();
    }
    init = () =>{
        this.x =0 ;
        this.y =0;
        this.beginX = 0;
        this.beginY = this.canvas.height/2;
        window.addEventListener('resize',this.resizeCanvas,false);
        // this.animation();
    }
    drawLine = () =>{
       this.cal();
       this.ctx.beginPath();
    //    this.ctx.moveTo(this.beginX,this.beginY);
    //    this.ctx.lineTo(this.x,this.beginY+this.y);
    //    this.ctx.strokeStyle = '#ff0'       
    //    this.ctx.stroke();
       this.beginX = this.x;
       this.beginY = this.y;
      
       let check = this.y;
       console.log(check)
    }
    cal = () => {
        if(this.x>this.canvas.width){
          this.x = 0;
          this.y = 0;
          this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
          this.ctx.rect(0,0,window.innerWidth,window.innerHeight);
          this.ctx.fillStyle = '#000';
        }
        this.x +=0.02;
        this.y = -0.5*Math.pow(this.x,5) + 3*Math.pow(this.x,3) + this.x*this.x - 2*this.x - 3;
        // this.y = this.x;
    }
    animation = () => {
        this.drawLine();
        window.requestAnimationFrame(this.animation);
    }
    resizeCanvas = () => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        this.ctx.rect(0,0,window.innerWidth,window.innerHeight);
        this.ctx.fillStyle = '#000';
        this.ctx.fill();
    }
}