export const addTocart = (payload)=>({
    type:"ADD",
    payload
});
export const Incaction = (id)=>({
    type:"INC",
    payload:id
});
export const DECaction = (id)=>({
    type:"DEC",
    payload:id
});
export const REMOVEaction = (id)=>({
    type:"REMOVE",
    payload:id
});
