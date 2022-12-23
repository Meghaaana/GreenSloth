// this
let someObj = {
    msg: "Hi",
    id: 1,
    greet : function () {
        console.log("inside function",this);
        console.log(this.msg);
    },
};

someObj.greet();
console.log("outside object",this);