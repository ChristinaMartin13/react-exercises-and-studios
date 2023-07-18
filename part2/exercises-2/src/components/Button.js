import './styles.css';

function Button() {

   function onLearnMore() {
      alert("Splish Splash I was taking a bath!");
   };

   return ( 
         <button onClick = {onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;