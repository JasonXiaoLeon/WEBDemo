let shoppingList = ["牛奶","鸡蛋","面包"]
        const btn = document.querySelector("button")
        const ipt = document.querySelector("input")
        btn.addEventListener('click',function(){
            const userInput = ipt.value.trim() 
            if(trolleyIsfull(shoppingList)){
                alert("The trolly is full, you can't add items")
            }else{             
                shoppingList.push(userInput)
                ipt.value = '' 
                traverse(shoppingList)
            }
        })
        console.log("牛奶在购物车为" +isItemInlist(shoppingList,"牛奶"));
        const apple = new ShoppingItem("苹果",12,2)
        console.log(apple)
        function trolleyIsfull(arr){
            return arr.length>=5
        }
        function traverse(arr){
            for(let i=0;i<arr.length;i++){
                console.log((i+1)+'.'+arr[i]); 
            }
        }
        function isItemInlist(arr,item){
            for(let i =0;i<arr.length;i++){
                if(arr[i] === item){
                    return true
                }
            }
            return false
        }
        function ShoppingItem(name, price, quantity) {
            this.name = name;         // 品名
            this.price = price;       // 价格
            this.quantity = quantity; // 数量
        }
