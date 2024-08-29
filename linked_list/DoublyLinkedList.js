class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if(!this.length){
            this.head = newNode;
            this.tail = newNode;
            this.length = 1
        }
       else{
        this.tail.next = newNode;
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
       }    
       return this
    }
    
    pop(){
        if(!this.head){
            return undefined
        }
        let temp = this.tail
        if(this.length ===1){
            this.head = null;
            this.tail = null;
            this.length--
        }
        else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null // we are using temp because we want to sever all pointers for removed node
            this.length--
        }
        return temp
    }

    unshift(value){
        const newNode = new Node(value)
        if(!this.length){
            this.head = newNode;
            this.tail = newNode;
            this.length = 1
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode 
            this.length++
        }
    }

    shift(){
        if(!this.head){
            return undefined
        }
        let temp = this.head
        if(this.length ===1){
            this.head = null;
            this.tail = null;
            this.length--
        }
        else{
            this.head = this.head.next;
            this.head.prev = null
            temp.next = null // we are using temp because we want to sever all pointers for removed node
            this.length--
        }
        return temp
    }

    get(index){
        if(index<0 || index >=this.length){
            return false
        }
        if(index < this.length/2){
            let temp = this.head
            for(let i = 0; i< index; i++){ // running loops from front and back so as to reduce the time taken
                temp = temp.next
            }
            return temp
        }
        else{
            let temp = this.tail
            for(let i = this.length -1; i>index; i--){
                temp = temp.prev
            }
            return temp
        }
       
    }

    set(index, value){
        let temp = this.get(index);
        temp.value = value;
        return this
    }

    insert(index, value){
        const newNode = new Node(value)
        if(index<0 || index >this.length){
            return false
        }
        if(index===0){
            this.unshift(value)
            return this
        }
        if(index===this.length){
            this.push(value)
            return this
        }
        if(index < this.length/2){
            let temp = this.head
            for(let i = 0; i< index-1; i++){ // running loops from front and back so as to reduce the time taken
                temp = temp.next
            }
            let after = temp.next
            newNode.prev = temp
            newNode.next = after
            temp.next = newNode;
            after.prev = newNode
            this.length++

            
        }
        else{
            let temp = this.tail
            for(let i = this.length -1; i>index -1; i--){
                temp = temp.prev
                
            }
            // let after = temp.next
            // newNode.prev = temp
            // newNode.next = after
            // temp.next = newNode;
            // after.prev = newNode
            newNode.next = temp.next // alternate method
            newNode.prev = temp
            temp.next.prev = newNode
            temp.next = newNode
            this.length++

            
        }
        return this

    }

    remove(index){
        let temp = this.get(index) 
        temp.next.prev = temp.prev
        temp.prev.next = temp.next
        temp.next = null
        temp.prev = null

        return temp
    }

}

const DoublyLinkedObj = new DoublyLinkedList(2);
DoublyLinkedObj.push(3)
// DoublyLinkedObj.pop()
// DoublyLinkedObj.push(4)
// DoublyLinkedObj.shift()
DoublyLinkedObj.insert(1,55)


console.log(DoublyLinkedObj)

