export const getAllExpenses=(setExpenses) =>
{
    fetch('http://localhost:3000/',{method: "GET"})
    .then((res)=> res.json())
    .then((expenses)=>setExpenses(expenses))
    .catch((e)=> console.log(e))
};

export const addExpense= (post_data = {} , callback)=>
{
    fetch('http://localhost:3000/expenses',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(post_data)
    })
    .then(()=> callback && callback())
    .catch((error)=>console.log(error))
}

