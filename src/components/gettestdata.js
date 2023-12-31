import dynamic from 'next/dynamic';

export const getData = async () => {
  
 const data = await import('../../data')
  
 return data
  
  
}

export default  getData().quiz