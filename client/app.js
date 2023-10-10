const handler = async () => {
  const input = document.querySelector('.radius').value;
  console.log(input);

  const output = {
    arg:input ,
  }
  
  const respo = await fetch('http://localhost:5006/index.html' , { 
    method: 'POST',
    headers: {
    'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(output)});

  console.log(respo) ;
}


const btn = document.querySelector('.btn') ;


btn.addEventListener('click' , async ()=>{
  await handler() ;
})