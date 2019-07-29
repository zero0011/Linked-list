/*给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

*/


//定义链表
    function Node(el){
        this.el=el;
        this.next=null;
    }

//  1.构造函数
    function Link(){
        this.head = new Node('head');
    }

//  2.find  查找链表中的元素
    Link.prototype.find = function(el) {
    let currNode = this.head;
    while(currNode&&currNode.el != el){
        currNode = currNode.next;
    }
    return currNode;
    }

//  3.insert    添加一个节点
    Link.prototype.insert = function(newnode,prenode){
        let currNode = this.find (prenode);
        let insertNode = new Node(newnode);
        if(currNode){
            insertNode.next = currNode.next;
        currNode.next = insertNode;
        }else{
            return currNode;
        } 
    }

//4.display     显示节点链表元素
    // 展示链表中的元素
Link.prototype.display = function () {
    var currNode = this.head.next;
    while (currNode) {
        console.log(currNode.el);
        currNode = currNode.next;
    }
}


//5.append      创建一个节点
    Link.prototype.append = function(){

    }





//测试函数实用性
// var link = new Link();
// link.insert(1,'head');
// link.insert(3,1);
// link.display();






//设置链表中要存储的数字
    let number1 = 342;
    let number2 = 465;
    const number1_one = Math.floor(number1/1%10);
    const number1_ten = Math.floor(number1/10%10);
    const number1_thousand = Math.floor(number1/100%10);
    const number2_one = Math.floor(number2/1%10);
    const number2_ten = Math.floor(number2/10%10);
    const number2_thousand = Math.floor(number2/100%10);
    l1 = new Link();
    l2 = new Link();
    l1.insert(number1_one,'head');
    l1.insert(number1_ten,number1_one);
    l1.insert(number1_thousand,number1_ten);
    l2.insert(number2_one,'head');
    l2.insert(number2_ten,number2_one);
    l2.insert(number2_thousand,number2_ten);

    //定义函数
    var addTwoNumbers = function(l1,l2){
        var out_l3 = new Link();
        
        out_l3.insert((l1.find(number1_one).el)+(l2.find(number2_one).el),'head')
        l1.display();
        l2.display();
        out_l3.display();
    }

    addTwoNumbers(l1,l2);
