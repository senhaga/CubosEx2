{
    let varOutsideScopeBefore = 0;
    console.log(varOutsideScopeBefore);


    {
        let varInsideScope = 1;

        console.log(varOutsideScopeBefore);
        console.log(varInsideScope);
    }
}
let varOutsideScopeAfter = 2;

//console.log(varOutsideScopeBefore);
//console.log(varInsideScope); 
// -> Runnin the code with either above lines will cause "Uncaught ReferenceError: (variable) is not defined"

console.log(varOutsideScopeAfter);
