import { useState } from "react";


const PrintMyName = () => {
    const [name,setName] = useState("건호 ❤ 정일");
    return <p>{name}</p>
};

export default PrintMyName;
// 아이 야무지다
