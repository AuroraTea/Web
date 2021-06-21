// 纯CSS计划告吹
let login_opt =document.getElementsByName('change-form');
let form_bar = document.getElementById('form-bar')


function check(){
  if (login_opt[0].checked){
    form_bar.style.transform = 'translateX(-100px)';
  }
  else if (login_opt[1].checked){
    form_bar.style.transform = 'translateX(-448px)';
  }
  else{
    form_bar.style.transform = 'translateX(-792px)';
  }
}
