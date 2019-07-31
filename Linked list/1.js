//设置一个类
//实现单向链表的基本功能 :定义链表 ,查找链表,添加链表结点

function Node(el){
    this.el= el;
    this.next=null;
}
function Link(){
    this.head= new Node('head');
}

//display()函数的作用
//返回一个链表的数组形式
Link.prototype.display=function(){
    var currNode = this.head.next;
    var x=0,arrs=[];
    while (currNode) {
        // console.log(currNode.el);
        arrs[x]=currNode.el;
        x++; 
        currNode = currNode.next;
    }
    // console.log(arrs);
    return arrs;
}
//在链表的最后插入一个结点
Link.prototype.attach = function(el){
    var currNode = this.head;
    while(currNode.next != null){
        currNode=currNode.next;
    }
    let newnode = new Node(el);
    currNode.next=newnode;
    newnode.next=null;
}


const num1 = 44;//44+465=509     9->0->5
const num2 = 465;               

//获取数字的个位十位百位
//返回数组
function getnum(number){
    let bit=[];
    let x=1,y=0;
    while(Math.floor(number/x%10)){
        bit[y]=Math.floor(number/x%10);
        x*=10;
        y++;
    }
    return bit;
}


//获取数字的个位十位百位
//返回表示的链表
function getnumlist(number){
    let link =new Link();
    let x=1;
    while(Math.floor(number/x%10)){
        let sum = Math.floor(number/x%10);
        link.attach(sum);
        x*=10;
    }
    // console.log(link);//返回链表
    
    arrs= link.display();//返回链表的数组表示
    // console.log(arrs);

    return link;//返回链表
}


    let List_num1 =  getnumlist(num1);
    let List_num2 =  getnumlist(num2);
    

//最终要实现的函数
//输入2个数字表示的链表
//作用返回一个新的链表来表示他们的和

//方法1 :链表的加减不方便
//可以把链表转换成  数组
function addTwoNumbers(l1,l2){
    let Sumlink =new Link();
    let arr1 = l1.display();
    let arr2 = l2.display();
    let arr3 = [];
    let length = Math.max(arr1.length,arr2.length);
    console.log(arr1);
    console.log(arr2);
    //解决数组不对齐的问题,通过isNaN函数来判断
    for(var j=0;j<length;j++){
        if(isNaN(arr1[j])){
            arr1[j]=0;
        }
        if(isNaN(arr2[j])){
            arr2[j]=0;
        }
    }
    let carry = 0;
    for(var i =0;i<length;i++){
        if((arr1[i]+arr2[i])>9){
            arr3[i]=(arr1[i]+arr2[i])/1%10;
            carry =1;
        }
        else{
            arr3[i]=arr1[i]+arr2[i]+carry;
        }
    }
   
    // console.log(arr3);
    return arr3;
}


    // addTwoNumbers(List_num1.display(),List_num2.display());
    addTwoNumbers(List_num1,List_num2);

    

    