import {ItemData} from "../commondata/redux";

const data:any = ItemData;

export default function reducer (state = data, action:any) {
    const{type, payload} = action;

    switch (type) {
        case "ADD_TO_CART":
            console.log(payload);
            state = ItemData.filter((idx:any) => {
                return idx.id == payload
            })
            return state
        
        case "PRODUCT":
            state = ItemData.filter((idx: any) => {
                return idx.id === payload
            })
            return state
            
            default:
        }
}