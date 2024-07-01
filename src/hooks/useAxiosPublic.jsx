import axios from 'axios'
import React from 'react'


const axiosPublic =  axios.create({
    baseURL: 'https://foodi-backend-nine.vercel.app',
  })

const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic;
