import { useState } from "react";

export default function useForm(initialForm = {}) {
    
    const [state, setState] = useState(initialForm)

    const handleFormChange = ({target}) => {
  
        setState({
            ...state,
            [target.name] : target.value
        });
    }

    const handleResetForm = () => {
        setState(initialForm);
    }


    return [ state, handleFormChange, handleResetForm ];


}
