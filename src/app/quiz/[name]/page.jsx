
import Quizcomp from "@/components/quizcomp"
import { promises as fs } from 'fs';

//import  {quiz as q1}  from '../../../../data';
///import  {quiz as q2}  from '../../../../data2';

const Q = async ({params}) => {
 
  const file = await fs.readFile(process.cwd() + '/' + params.name + '.json', 'utf8');
  const data = JSON.parse(file);
    
  //const {quiz2 }= await import ("../../../../data2")
    
  return (
    <>
    <Quizcomp quiz={data}/>
    
    </>

  )
}

export default Q