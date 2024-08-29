class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
        return this
    }

    push(value){
        const newNode = new Node(value)
        if (this.length==0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this
    }

    pop(){
        if(this.length===0) return undefined
        if(this.length===1){
            this.head = null;
            this.tail = null;
            this.length--
        }

        else{
            let temp = this.head
            while(temp.next.next){
                temp = temp.next;
                
            }
            this.tail = temp;
            this.tail.next = null;
            this.length --
        }
    }
    shift(value){
        const newNode = new Node(value)
        
        if(this.length ===0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            let temp= this.head
            this.head = newNode;
            this.head.next = temp
        }
        this.length++

        return this
        
    }
    unshift(){
        if(!this.length) { return undefined}
        if(this.length ==1){
            this.head = null
            this.tail = null
        }
        else{
            let temp = this.head
            this.head = temp.next;
            temp.next = null;
        }
        this.length--
        return this
    }

    reverse(){
        let temp = this.head
        let prev = null
        let after = this.head.next
        this.head = this.tail
        this.tail = temp;
        let check = this.length
        
        while(check){
            after = temp.next;
            temp.next = prev
            prev = temp
            temp = after;
            check--
            
        }
        return this
    }

    insert(value, index){
        const newNode = new Node(value)
        if(this.length===0){
            this.head = newNode
            this.tail = newNode
        }
        if(index===0){
            this.shift(value)
        }
        if(index === this.length-1){
            this.push(value)}
        
        else{
            let temp = this.head
            while(index){
                temp = temp.next
                index--
            }
            newNode.next = temp.next
            temp.next = newNode;
            
            this.length++
            return this
            
        }

    }

    partitionList(x){
        let less = new Node(null);
        let more = new Node(null);
        let temp = this.head;
        let less_temp = less;
        let more_temp = more;
        while(temp){

            if(temp.value<x){
                if(less.value=== null){
                    less_temp= temp

                }
                else{
                    less_temp.next = temp
                    
                }
                less_temp = temp
            }
            else{
                if(more_temp.value=== null){
                    more_temp.next = temp
                    more_temp = temp
    
                }
                else{
                    more_temp.next = temp
                    
                }
                more_temp = temp
            }
            temp = temp.next
        }

        return less
    }

}

const LinkedObj = new LinkedList(2);
LinkedObj.push(3)
LinkedObj.push(4)
LinkedObj.push(5)
// LinkedObj.pop()
LinkedObj.shift(1)
// LinkedObj.unshift()
// LinkedObj.unshift()
// LinkedObj.reverse()
// LinkedObj.insert(1,1)
// LinkedObj.partitionList(20)
LinkedObj.reverseBetween(1,3)


// console.log(LinkedObj)
