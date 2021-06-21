// 纯CSS计划告吹
let login_opt =document.getElementsByName('change-form');
let form_bar = document.getElementById('form-bar')


function check(){
  if (login_opt[0].checked){
    form_bar.style.transform = 'translateX(0)';
    console.log('1');
  }
  if (login_opt[1].checked){
    form_bar.style.transform = 'translateX(-348px)';
    console.log('2');
  }
  if (login_opt[2].checked){
    form_bar.style.transform = 'translateX(-692px)';
    console.log('3');
  }
}
