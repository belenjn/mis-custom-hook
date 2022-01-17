import { useState } from "react"


export const useForm = (initialState = {}) => {
    //useForm recibe un objeto, en el cual ese objeto tiene 
 
    const [values, setValues] = useState(initialState);
     //que tener ahí las propiedades
    // que quiero manipular. 

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => { 
        // handleInputChange sirve 
        //para leerlo rápidamente

        setValues ({
            ...values,
            [target.name]: target.value
        });
    }


    return [values, handleInputChange, reset]; 
    //el primer valor será el estado de mi formulario
    //y el segundo para cambiar los valores del form

}
