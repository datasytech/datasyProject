import React, {useState, useEffect} from 'react';
import firebase from 'firebase';

const ListQuery = ()=>{
    const [ID, setID] = useState();
return (
    <div>
        <span>Input HKID:</span>
        <input type = "text" value={ID} onChange={e=>setID(e.currentTarget.value)}/>
        <button >Search by HKID</button>
    </div>
)
}
export default ListQuery;

 