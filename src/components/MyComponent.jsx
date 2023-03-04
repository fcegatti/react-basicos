import React from "react";

const MyComponent = (props) => <h2>{props.msg}</h2>;



/* Esta estructura, de una función expresada, es equivalente a las dos siguientes comentadas :

La primera es una estructura de función declarada y la segunda una estructura de componente creada con clase (se van usando menos con la llegada de los Hooks)  


function MyComponent(props) {
  return <h2>{props.msg}</h2>;
 }


class MyComponent extends Component {
   render() {
     return <h2>{this.props.msg}</h2>;
   }

 }

*/

export default MyComponent;