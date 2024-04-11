import {useState} from "react";

const Button = ({onclick, count})=>{
    return (
        <button onClick={onclick}>{count}</button>
    )
}

export default function ButtonClickerPremium(){
    const [count, setCount] = useState(0);

    function onclickHandle(){
        setCount(count + 1);
    }

    return (
        <>
            <Button onclick={onclickHandle} count={count}/>
            <Button onclick={onclickHandle} count={count}/>
        </>
    )

}