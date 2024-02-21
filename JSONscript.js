let obj1 = {name:"Person 1", age:5}
let obj2 = {age:5, name:"Person 1"}
console.log(obj1)
console.log(obj2)
const obj1Keys = Object.keys(obj1)
const obj2Keys = Object.keys(obj2)
console.log('Object 1 Keys:',obj1Keys)
console.log('Object 2 Keys:',obj2Keys)

// Checking length of object keys from obj1Keys and obj2Keys, It should be equal value and type
if(obj1Keys.length !== obj2Keys.length)
{
    console.log('Length of object 1 keys and object 2 keys are not equal')
}
else
{
    console.log('Length of object 1 keys and object 2 keys are equal')

    for(let i = 0; i < obj1Keys.length; i++)
    {   
        // Storing the key names of the object1 in a varible.
        let keyNames = obj1Keys[i]
        // Comparing values from both objects - obj1 and obj2 by using the object keys.
        if(obj1[keyNames] !== obj2[keyNames]) 
        {
            console.log(keyNames,'key Values are not same in both objects')
        }
        else
        {
            console.log(keyNames,'key Values are same in both objects')
        }

    }
}

