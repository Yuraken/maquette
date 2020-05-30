import moment from'moment'
import './style.css';
import Icon from './icon.png'

moment.locale('fr')
const message = document.createElement('p');

document.querySelector(".champWarn").appendChild(message);


const email = 'hello@lp.wd'
const password = 'qwerty'

        const onLoginFormSubmit = e => {
            
            e.preventDefault(); // Annule l'action par défaut
          // TODO Activer l'état de transition  
            setTimeout(() => {
              // TODO Stopper l'état de transition

              // TODO Traiter les données du formulaire     
            }, 1000) // 1 seconde
            const data = new FormData(e.target)
            const response = processDataForm(data)
        }
        document.querySelector('#loginForm').addEventListener('submit',onLoginFormSubmit)

        const processDataForm = data => {

          var path = window.location.pathname;
          var page = path.split("/").pop();
          console.log(page)
          if(page === "connexion.html"){
           if(data.get('password').length < 6){
              message.innerHTML = "Mot de passe trop court ! Minimum 6 caractères !"
           }
           else{
             if(data.get('email').length === 0){
              message.innerHTML = "Veuillez renseigné un nom d'utilisateur !"
             }
             else{
              var today = new Date();
              var dd = String(today.getDate()).padStart(2, '0');
              var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              var yyyy = today.getFullYear();
              
              today = yyyy + '-' + mm + '-' + dd;
              var date = data.get('date');

               console.log(date)
               console.log(today)

               if(date>today){
                message.innerHTML = "Date incorrecte !"
               }
               else{
                
                message.innerHTML = "Compte créer avec succès !"

               }
               
             }
           }

          }else{
            console.log(data.get('password')); 
            if (data.get('password') !== password || data.get('email') !== email ){
                message.innerHTML = "Nom de compte ou mot de passe incorrect !"  
            } else {
                message.innerHTML = "Bienvenue "+email+ "!"
            }
          }
            
        }

      
   const myIcon = new Image();
   const image = document.querySelector('#labelpass');
   myIcon.id = "Eye";
   myIcon.src = Icon;
   console.log(image);
  
   image.appendChild(myIcon);

  

  const showpassword = e =>{
    var pass = document.querySelector('[name="password"]');

    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
  

    
    document.querySelector('#Eye').addEventListener('mouseenter',showpassword)
    document.querySelector('#Eye').addEventListener('mouseout',showpassword)
