class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
        return this
    }
    
    push(value){
        const newNode = new Node(value)
        if(this.length===0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    
    pop(){
        if(this.length===0){
            return undefined
        }
        else if(this.length===1){
            this.head = null
            this.tail = null
            this.length--
        }
        else{
            let temp = this.head
            while(temp.next.next){
                temp = temp.next
            }
            this.tail = temp
            this.tail.next = null
            this.length--
        }
    }
    
    shift(value){
        const newNode = new Node(value)
        if(this.length===0){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    
    unshift(){
        if(this.length===0){
            return undefiend
        }
        else if(this.length===1){
            this.head = null
            this.tail = null
            this.length--
            return this
        }else{
            let temp = this.head
            this.head = temp.next
            temp.next = null
            this.length--
            return this
        }
    }
    
    
    insert(value, pos){
        const newNode = new Node(value)
        let temp = this.head
        
        while(pos-1){
            temp = temp.next
            pos--
        }
        let newN = temp.next
        temp.next = newNode
        newNode.next = newN
        this.length++
        return this
    }
    
    reverse(){
        let temp = this.head
        let prev = null
        let after = temp.next
        this.head = this.tail
        this.tail = temp
        while(temp){
            after = temp.next
            temp.next = prev
            prev = temp
            temp = after
        }
        return this
    }
    
    remove(ind){
        let temp = this.head
        for(let i=0; i<ind-1; i++){
            temp = temp.next
        }
        temp.next = temp.next.next
    this.length --
    return this
    }

    // set(value, pos){
    //     for(let )
    // }
}


const newLL = new LinkedList(5)
newLL.push(10)
newLL.push(20)
newLL.pop()
newLL.shift(55)
newLL.unshift()
// newLL.reverse()
newLL.insert(1999,1)
newLL.remove(1)

console.log(newLL)