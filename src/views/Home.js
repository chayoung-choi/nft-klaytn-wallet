import React, {useEffect, useState} from "react";
import {blockNumber} from "../kas/Kas";

const Home = () => {

    const [blockNum, setBlockNum] = useState()

    useEffect(() => {
        const init = async () => {
            const data = await blockNumber()
            setBlockNum(data)
        }
        init()
    }, [])

    return (
        <>
            {blockNum}
        </>
    )
}
export default Home
