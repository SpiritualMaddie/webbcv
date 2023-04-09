import React, {useState, useEffect} from 'react';
import swal from 'sweetalert';


const Popup = () => {
    const keyCode = '1337';
    let keyPress = '';

    document.addEventListener('keydown', (key) => {
        keyPress += key.key;
        
        if(keyPress === keyCode) {
             swal("Good job!", "You found the easter egg!", "success")
            }
        })

    return(
        <>
        </>
    );
}

export default Popup;