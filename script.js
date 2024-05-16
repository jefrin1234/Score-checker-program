function calculateMark(){
  let name = document.getElementById('name').value;
  let mark = document.getElementById('mark').value;
  let result = '';

  if(name === ''){
    result = 'enter your name'
  }

   else if(mark===''){
    result= 'enter your mark'
  }
  
  else if(mark >100 ){
      result = 'Please enter a valid mark between 0 and 100'
  }

  else if(mark <100 && mark >=50){
    result  = ` 
    You won`
  }

  else{
    result = 'you lose'
  }

  let final = document.getElementById('final').value;
  document.getElementById('final').innerHTML = result
  
 }