import moment from'moment'
import './style.css';

moment.locale('fr')
const message = document.createElement('p');

document.body.appendChild(message);


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
            console.log(data.get('password')); 
            if (data.get('password') !== password || data.get('email') !== email ){
                message.innerHTML = "Mot de passe incorrect !"  
            } else {
                
                message.innerHTML = "Bon mot de passe !"
            }
        }
