

function Greetings(props){
   let lang = ''
   if(props.lang==='en'){
     lang = 'Hello'
   };
   if(props.lang==='de'){
    lang = 'Hallo'
  };
  if(props.lang==='es'){
    lang = 'Hola'
  };
  if(props.lang==='fr'){
    lang = 'Bonjour'
  };
   
  
    return (
      <div>
      <p className="greet">{lang} {props.children}</p>
      </div>
      );
}

export default Greetings;

