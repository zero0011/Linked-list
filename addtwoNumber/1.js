/*给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/ 

//target = nums[i]+nums[j]


//哈希查找
//俩遍哈希表
var twoSum  = function(nums,target){
    let map = {};
    for(let i = 0;i<nums.length;i++){
        map[nums[i]]=i;
    }
    console.log(map);
    for(let i=0;i<nums.length;i++){
        var num1= nums[i];
        var num2 = target-num1;
        if(map[num2]!==undefined&&map[num2]!==i){
            return [i,map[num2]];
        }
    }
}
    

//一遍哈希表
var twoSumplus = function (nums,target){
    let map={};
    for(let i = 0;i<nums.length;i++){
        map[nums[i]]=i;
        var num2= target-nums[i];
        if(map[num2]!==undefined&&map[num2]!==i){
            return [i,map[num2]];
        }
    }
}

    var arrs=[0,2,7,11];
    var target = 9;
    var sum =    twoSumplus(arrs,target);
    console.log(sum);

   