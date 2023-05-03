const bodyParser = require('body-parser');
const express =require('express');
const cors=require('cors')

const app =new express();
app.use(bodyParser.json());
app.use(cors());
const espenses=[{
    id:1,
    title:'food',
    amount:1000,
    desc:'Ghee roast,Naan,Paneer Butter masala'
},
{
    id:2,
    title:'Series',
    amount:300,
    desc:'FRIENDS'
},
// {
//     id:3,
//     title:'Cosmetics',
//     amount:10000,
//     desc:'eyeliner,primer,toner,blush'
// }
]

app.get('/expenses/:id',(req,res)=>{
    const index=req.params.id;
    let result;
    for(let i=0;i<espenses.length;i++){
        console.log(index);
        if(espenses[i].id==index){
            result=espenses[i];
            console.log('worked');
            break;
        }
    }
        console.log(result);
        if(result){
            return res.send(result);   
        }
        else{
             return res.send('404 erRRRRRRRRR found');
        }
    
})
const max=(espenses)=>{
            let newid;
            let newtitle;
            let newAmount;
            let newdesc;
    for(let index=0;index<espenses.length;index++){
        newid=espenses[index].id;
        newtitle=espenses[index].title;
        newAmount=espenses[index].amount;
        newdesc=espenses[index].desc;
    if((espenses[index].amount)>500){
          return newtitle+ " "+newAmount+" "+ newdesc;
    }
}}
app.post('/expenses/max',(req,res)=>{
    res.send(max(espenses));
})
app.post('/expenses',(req,res)=>{
    let newId=espenses[espenses.length-1].id+1;
    let newExpense=req.body;
    newExpense.id=newId;
    espenses.push(newExpense);
    res.send('new expenses added');
})

app.delete('/expenses/:id',(req,res)=>{
    let id=req.params.id;
    for(let index=0;index <espenses.length;index++){
        if(espenses[index].id==id){
            espenses.splice(index,1)
            res.send('isfound');
            }
        }
       res.send('id is not found');
    })
app.put('/expenses/:id',(req,res)=>{
        let id=req.params.id;
        for(let index=0;index<espenses.length;index++){
            if(espenses[index].id==id){
                if(req.body.title){
                    espenses[index].title=req.body.title;
                }
                if(req.body.amount){
                    espenses[index].amount=req.body.amount;
                }
                if(req.body.desc){
                    espenses[index].desc=req.body.desc;
                }
            }
        }
        res.send('Updated');
    })

app.get('/',(req,res)=>{// request,response
    res.send(espenses)
})

app.get('/expenses',function (req, res) {
    res.send(espenses);
})
app.post('/expenses',(req, res)=>{
    res.send('Hello Kanishka ');
})
app.listen(3000,()=>{
    console.log('Server is running...');
})

