import { Component,createElement } from "./framework"

class Carousel extends Component{
    constructor(){
        super();
        this.attributes = Object.create(null);
    }
    setAttribute(name,value){
        this.attributes[name]=value;
    }
    render(){
        this.root = document.createElement("div");
        this.root.classList.add("carousel")
        for(let record of this.attributes.src){
            let child = document.createElement("div")
            child.style.backgroundImage=`url('${record}')`
            this.root.appendChild(child)
        }

        let position = 0;

        this.root.addEventListener("mousedown",event=>{
            let children = this.root.children;
            let startX = event.clientX;

            let move = event=>{
                let x = event.clientX-startX

                let current = position - ((x-x%668)/668)

                for(let offest of [-1,0,1]){
                    let pos = position + offest;
                    pos = (pos + children.length)%children.length;

                    children[pos].style.transition = 'none'
                    children[pos].style.transform = `translateX(${-pos*668+offest*668+x%668}px)`
                }

                
            }
            let up = event=>{
                let x = event.clientX-startX
                position = position - Math.round(x/668)
                for(let offest of [0,-Math.sign(Math.round(x/668)-x + 334*Math.sign(x))]){
                    let pos = position + offest;
                    pos = (pos + children.length)%children.length;

                    children[pos].style.transition = 'none'
                    children[pos].style.transform = `translateX(${-pos*668+offest*668}px)`
                }
                document.removeEventListener("mousemove",move);
                document.removeEventListener("mouseup",up);
            }
            document.addEventListener("mousemove",move)
            document.addEventListener("mouseup",up)
                 
        })
  


        /*let currentIndex = 0;
        setInterval(()=>{
            let children = this.root.children;
            let nextIndex = (currentIndex+1) % children.length;
            
            let current = children[currentIndex];
            let next = children[nextIndex];

            next.style.transition = "none"
            next.style.transform = `translateX(${100-nextIndex*100}%)`
  
            setTimeout(()=>{
                next.style.transition = ""
                current.style.transform = `translateX(${-100-currentIndex*100}%)`
                next.style.transform = `translateX(${-nextIndex*100}%)`

                currentIndex = nextIndex;
            },16)
        },2000)*/

        return this.root;
    }
    mountTo(parent){
        parent.appendChild(this.render())
    }
}

let d=[
    'https://zt-fd.zol-img.com.cn/t_s668x376c/g6/M00/01/07/ChMkKV9YsLWIKNdDAACGybDd94wAACFbABShPcAAIbh163.jpg',
    'https://zt-fd.zol-img.com.cn/t_s668x376c/g6/M00/01/07/ChMkKV9YsIeIatQDAACRfOFohEcAACFawMwJTwAAJGU127.jpg',
    'https://zt-fd.zol-img.com.cn/t_s668x376c/g6/M00/01/06/ChMkKV9YsFWIPk_UAACONiaJcI0AACFZwP-wuoAAI5O935.jpg',
    'https://zt-fd.zol-img.com.cn/t_s668x376c/g6/M00/01/06/ChMkKV9YsEiICA6oAACn1N7v0joAACFZgPihHIAAKfs339.jpg'
]

let a = <Carousel src={d} />
a.mountTo(document.body)
