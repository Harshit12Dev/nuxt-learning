import { defineStore } from 'pinia'
import type{User,Customer, Login} from '../types'

const baseurl = 'http://localhost:5000/'
export const useUserStore = defineStore('user',()=>{
  const user = ref();
  const token = useCookie('My_Cookie',{
    maxAge : 60*60
  })
  const setToken = (data ?: string) => (token.value =data);
  const setUser = (data?:any ) => (user.value = data)

  const signIn = async (data : Login) => {
    console.log(data);
    
    try {
      const res = await $fetch<User>('https://dummyjson.com/auth/login',{
        method :'POST',
        body:data
      })
      console.log("api response",res);
      
      setToken(res.token)
      await fetchCustomer()
    }catch(e){
      setToken()
      setUser()
      console.log(e);
      
    }
  }
  const fetchCustomer = async () =>{
    if(token.value){
      try { 
        const res = await $fetch<Customer>("https://dummyjson.com/users/1")
      }catch(error) {
        setUser()
        console.log(error)
      }
    }
  }

  const logOut = ()=>{
    setToken();
    setUser();

   
  }
  return {user,token,signIn,logOut,fetchCustomer,setUser,setToken}
})