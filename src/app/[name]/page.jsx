import Qc from "@/components/Qc";
import { promises as fs } from "fs";
import { redirect } from "next/navigation";
import path from "path";

const Q = async ({ params }) => {
  let data;
  try {
    const file = await fs.readFile(
      process.cwd() + "/src/app/" + params.name + ".json",
      "utf8",
    );
    /* const file = await fs.readFileSync(
      path.resolve("/files/" + params.name + ".json"),
      "utf-8",
    ); */
    data = JSON.parse(file);
    /*  const file = await fs.readFile(process.cwd() + "/app/q1.json", "utf8");
    const data = JSON.parse(file);
    console.log(process.cwd()); */
  } catch (error) {
    //redirect("/");
    console.log(data);
  }
  return (
    <>
      {process.cwd()}
      <Qc quiz={data} />
      {/*  {data.map((d, i) => (
        <div key={i}>{d.title}</div>
      ))} */}
    </>
  );
};

export default Q;
