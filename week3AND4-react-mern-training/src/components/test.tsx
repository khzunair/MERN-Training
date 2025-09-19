import { useEffect } from "react";

const Test = () =>{

    useEffect(() => {
        console.log("start");
    
        Promise.resolve().then(() => {
            console.log("B- This is mee");
        });
    
        setTimeout(() => {
            console.log("A- This is me..");
        }, 0);
    
        console.log("end");
    }, []);
    

    return(
        <>
        
        <div>
            <h1>Test UI </h1>

        </div>
        </>
    )
}
export default Test;