const formulari =  document.forms[0];
const [Iname,Ilasn,Iemail,Ipass,Posbtn] = formulari;
console
formulari.addEventListener('submit',(e)=>{
     e.preventDefault();
     let name,lasn,email,pass;
     if(Iname.value.length>=4){
       name = Iname.value;
       Iname.classList.remove('err');
       document.getElementById('name').classList.remove('errorA');  
     }else{
        Iname.classList.add('err')
        document.getElementById('name').classList.add('errorA')
        return false
 
     };
     
     if(Ilasn.value.length>4){
        lasn = Ilasn.value;
        Ilasn.classList.remove('err');
        document.getElementById('last').classList.remove('errorA')
        
      }else{
        Ilasn.classList.add('err');
        document.getElementById('last').classList.add('errorA')
        return false
      }
      
      if(Iemail.value.length>4){
        email = Iemail.value;
        Iemail.classList.remove('err');
        document.getElementById('emai').classList.remove('errorA')
        
        
      }else{
         Iemail.classList.add('err')
         document.getElementById('emai').classList.add('errorA')
         return false
      }
      
      if(Ipass.value.length>=8){
        pass = Ipass.value;
        Ipass.classList.remove('err')
        document.getElementById('pas').classList.remove('errorA')
      }else{
         Ipass.classList.add('err')
         document.getElementById('pas').classList.add('errorA')
         return false
         
      
      }
      
      
      datos = {
        name :name,
        last: lasn,
        email:email,
        passwd:pass  
      }   
      
     
    
    
    
    
    


})

