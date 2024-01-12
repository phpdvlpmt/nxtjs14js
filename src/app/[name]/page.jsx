import Quizcomp from "@/components/Quizcomp";
import { promises as fs } from "fs";
import { redirect } from "next/navigation";

const Q = async ({ params }, data) => {
  try {
    const file = await fs.readFile(
      process.cwd() + "/files/" + params.name + ".json",
      "utf8"
    );
    data = JSON.parse(file);
  } catch (error) {
    redirect("/");
  }
  return (
    <>
      <Quizcomp quiz={data} />
    </>
  );
};

export default Q;
