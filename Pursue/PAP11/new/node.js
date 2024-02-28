// arr=[5,2,-7,3,-2,-1];
// b=[];
// for(i=0;i<=arr.length;i++)
// {
//     if(arr[i]<0){
//         b.push(arr[i])
//     }
// }
// console.log(b)

// a=[5, 10, 15, 20, 22, 23];
// b=[];
// for(i=0;i<=a.length-1;i++)
// {
//     b.push(a[i])
//     if(a[i]%2==0){
//         b.splice(i,1)
//         b.push(0)
        
//     }
// }
// console.log(b)

// a=[5, 10, 15, 20, 0, 22, 23];
// b=0;
// for(i=0;i<=a.length-1;i++)
// {
//     if(a[i]==0)
//     {
//         break
//     }
//     else
//     {
//         b=b+a[i]
//     }
// }
// console.log(b)

// a=17

// if(a<16)
// {

//     console.log("You can't drive.")

// }
// else if(a==16,17)
// {

//     console.log("You can drive but not vote.")
// }

// else if(a>=18 && a<=24)
// {

//     console.log("You can vote but not rent a car")
// }
// else
// {
    
//     console.log("You can do pretty much anything")
// }


// previous_value=0;
// for(i=0; i<=10; i++)
// {
//     sum=i+previous_value
   
//     console.log(previous_value,i,sum)
//     previous_value=sum
// }

// even=0;
// odd=0;

// for(i=10;i<=55;i++)
// {
//     if(i%2==0)
//     {
//         even=even+1
//     }
//     else
//     {
//         odd=odd+1
//     }
// }

// console.log("Occurance of even number is: ", even)
// console.log("Occurance of odd number is: ", odd)

// a=4
// b=2
// c=a*b
// if(c>500)
// {
//     console.log(a+b)
// }
// else
// {
//     console.log(c)
// }

// a=56;
// b=35;
// c=22;

// if(a<b)
// {
//     console.log("b is greatest")
// }

// else if(b<c)
// {
//     console.log("c is greatest")

// }
// else
// {
//     console.log("a is greatest")

// }


a=[53,65,78,53,65,88,98,88];
b=[];
for(i=0;i<=a.length-1;i++)
{
    duplicate=false
    for(j=0;j<=b.length-1;j++)
{
    if(a[i]==b[j])
    {
        duplicate=true
    }
}
        if(duplicate==false)
        {
            b.push(a[i])
        }
    }
console.log(b)


// num = 234;
// while (num >= 10) {
//     sum = 0;
//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     num = sum;
// }
// console.log(num);



// var months = [1, 2, 3, 4];
// var unitsConsumed = [100, 150, 300, 400];
// var billAmounts = [200, 300, 1500, 2000];
// var dictionaryView = [];
// for (var i = 0; i < months.length; i++) {
//     var data = {
//         'month': months[i],
//         'units_consumed': unitsConsumed[i],
//         'billAmount': billAmounts[i]
//     };

//     dictionaryView.push(data);
// }
// console.log("Dictionary_View:", dictionaryView);



// const consumerData = {
//     "consumer_name": "user",
//     "eb_reading": [1100, 1200, 1350, 1650, 2050]
// };
// const unitsConsumed = consumerData.eb_reading.map((reading, index) => {
//     if (index === 0) {
//         return 0;
//     } else {
//         return Math.max(0, reading - consumerData.eb_reading[index - 1]);
//     }
// });
// const billAmounts = unitsConsumed.map(units => {
//     if (units < 100) {
//         return 0;
//     } else if (units <= 200) {
//         return units * 2;
//     } else if (units <= 500) {
//         return units * 5;
//     } else if (units <= 1000) {
//         return units * 10;
//     } else {
//         return units * 14;
//     }
// });
// const totalBillAmount = billAmounts.reduce((total, amount) => total + amount, 0);
// const result = {
//     consumer_name: consumerData.consumer_name,
//     bill_amount_per_month: billAmounts,
//     total_bill_amount: totalBillAmount
// };
// console.log(result);



// a=[5, 10, 15, 20, 22, 23];
// b=[];
// for(i=0;i<=a.length-1;i++)
// {
//     b.push(a[i])
//     if(a[i]%2==1)
//         {
//             b.splice(i,1,0)
//         }
// }
// console.log(b)

// a = [3,2,2,3];
// b = 3;
// c = [];
// for(i=0;i<=a.length-1;i++)
// {
//     if(a[i]!=b)
//     {
//         c.push(a[i])
//     }
// }
// d=a.length-c.length;
// for(i=0;i<d;i++)
// {
//     c.push('_')
// }
// console.log(c)
















var a = [3,2,2,3];
var b = 3;
var c = [];

for(i=0;i<=a.length-1;i++)
{
    if(a[i]!=b)
    {
        c.push(a[i])
    }
}
d=a.length-c.length
for(i=0;i<d;i++)
{
    c.push('_')
}
console.log("Output =", d)
console.log(c)

