import {atom} from 'recoil'
export const UserAtom = atom({
    key:'UserAtom',
    default:[{
        username:"",
        dob:"",
        phone:"",
        email:"",
        pass:"",
        cpass:"",
    }],
})