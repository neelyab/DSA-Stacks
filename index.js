class _Node{
 constructor(data, next){
     this.data = data;
     this.next = next;
 }   
}

class Stack{
    constructor(){
        this.top = null;
    }
    push(data){
        if (this.top === null){
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop () {
        // remove top node from stack and change pointer to
        // the next item;
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

const starTrek = new Stack;
const characters = ['Kirk', 'Spock', 'McCoy', 'Scotty']
characters.forEach(char => starTrek.push(char))

console.log(starTrek)

function peek(list){
    return list.top;
}

function isEmpty(stack){
    if (stack){
        return 'stack is full';
    }
    else{
        return 'stack is empty';
    }
}

console.log(isEmpty(starTrek))

function display(stack){
    if(!stack.next){
        return stack.data;
    }
    return `${stack.data}` + display(stack.next)
}
console.log(display(starTrek.top))

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    const palindromeStack = new Stack;
    s.split('').map(letter => palindromeStack.push(letter))
    // for (i = 0; i < s.length; i++){
    //     console.log(stack.push(s[i]))
    // }
    console.log(palindromeStack)
    console.log(display(palindromeStack.top))
    const palindromeTest = display(palindromeStack.top)
    if (palindromeTest === s){
        console.log('this is a palindrome')
    }
    
}

is_palindrome('dad')

// function sortStack(stack){
//     let currNode = stack
//     console.log(currNode)
//     let nextNode = currNode.next;
//     console.log(nextNode)
//     let min = findMin(currNode)
//     console.log(min)
//     let newStack = new Stack;
//     function sortNewStack(stack){
//         let curr = stack
//         console.log(curr)
//         if(!curr || !curr.next){
//             console.log(newStack)
//         }
//         if(curr.data > min && curr.data > curr.next.data){
//             newStack.push(curr.data)
//             stack.pop(curr.data)
        
//         }
//         sortNewStack(stack.next)

//     }
//     sortNewStack(stack)
//     //compare the two nodes

// }
// //keep track of max
// // keep track of min

// function findMin(stack, min = stack.data){
//     let currNode = stack
//     if(!currNode){
//         return min;
//     }
//     else {
//         if(currNode.data < min){
//         min = currNode.data;
//         }
//         findMin(currNode.next, min)
//     }

// }


// const unsortedStack = new Stack;
// const numbers = [2, 5, 7, 3, 5]
// numbers.map(number => unsortedStack.push(number))
// console.log(unsortedStack)
// console.log(sortStack(unsortedStack.top))


function sortStack(stack){
    let temp = new Stack;
    // if temp stack is empty, push the top of the stack to it/ pop value off of stack
    if(stack === null){
        return stack;
    }
    if(temp === null){
        temp.push(stack.pop())
    }
    // while the original stack is not empty
    while(stack){
        //pop off the first number on the stack to make a temp number
        tempNumber = stack.pop();
        // compare temp number to first value of temp stack
        while(temp && tempNumber > temp.peek()){
            // if the temp number is bigger, then top of the temp stack, pop it off and push it back in the stack
            stack.push(temp.pop())
        }
        // push the number into the temp stack
       temp.push(tempNumber)
    }
    return temp;
}


function squareDance(stack){
    // if waiting == empty && if F and M || M and F
        //pair
    // else
    //push to waiting array []

    // while (waiting && stack)
    //waiting[0] and stack.top
    //if they can be paired, pair
    //else push waiting the stack.top

    //if stack is empty
    //return pairs and waiting
}


function OrphideanBank(queue){
    // if paperwork is done (true) pop off and serve customer

    // if paperwork is not done (false) push to back of queue
    //this.last = node
}