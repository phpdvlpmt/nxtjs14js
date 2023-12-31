import Quizcomp from "@/components/quizcomp"
import { quiz } from "../../../data2"
import Link from "next/link"

const Quiz = () => {
  return (
    <div className="flex flex-col gap-5 text-xl font-bold">
   <Link href="/quiz/q1">Quiz 1</Link>
   <Link href="/quiz/q2">Quiz 2</Link>
   1234
    </div>
  )
}

export default Quiz