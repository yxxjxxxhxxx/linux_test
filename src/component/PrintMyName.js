import { useState } from "react";


const PrintMyName = () => {
    const [name,setName] = useState("이규리 흐흐흐흐흐");
    return <p>{name}</p>
};

export default PrintMyName;