import Qc from "@/components/Qc";
import { promises as fs } from "fs";
import { redirect } from "next/navigation";

const Q = async ({ params }, data) => {
  try {
    const file = await fs.readFile(
      process.cwd() + "/files/" + params.name + ".json",
      "utf8",
    );
    data = JSON.parse(file);
    console.log(data);
  } catch (error) {
    //redirect("/");
    console.log(data);
  }
  return <>{/* <Qc quiz={data} /> */}1</>;
};

export default Q;
