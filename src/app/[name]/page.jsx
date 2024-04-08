import Qc from "@/components/Qc";
import { promises as fs } from "fs";
import { redirect } from "next/navigation";

const Q = async ({ params }, data, file) => {
  try {
    const file = await fs.readFile(
      process.cwd() + "/src/app/" + params.name + ".json",
      "utf8",
    );
    data = JSON.parse(file);
  } catch (error) {
    //redirect("/");
  }
  return (
    <>
      {/*  <Qc quiz={data} /> */}
      {console.log(data)}
    </>
  );
};

export default Q;
