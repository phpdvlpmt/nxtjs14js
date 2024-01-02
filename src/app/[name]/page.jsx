
import Quizcmp from '@/components/Quizcmp';
import { promises as fs } from 'fs';

//import  {quiz as q1}  from '../../../../data';
///import  {quiz as q2}  from '../../../../data2';

const Q = async ({params}) => {
 
  const file = await fs.readFile(process.cwd() + '/files/' + params.name + '.json', 'utf8');
  const data = JSON.parse(file);
    
  //const {quiz2 }= await import ("../../../../data2")
    
  return (
    <>
    <Quizcmp quiz={data}/>
    
    </>

  )
}

export default Q