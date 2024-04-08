import Qc from "@/components/Qc";
import { promises as fs } from "fs";
import { redirect } from "next/navigation";
import path from "path";

const Q = async ({ params }, data, file) => {
  try {
    const file = await fs.readFile(
      /* process.cwd() + "/src/app/" + params.name + ".json", */
      path.resolve(process.cwd(), "files/" + params.name + ".json"),
      "utf8",
    );
    //console.log(file);
    data = JSON.parse(file);
  } catch (error) {
    //redirect("/");
  }
  return (
    <>
      {/*  <Qc quiz={data} /> */}
      {console.log(data)}
      {console.log(path.resolve(process.cwd(), "app"))}
    </>
  );
};

export default Q;
