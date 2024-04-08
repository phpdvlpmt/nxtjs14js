import Qc from "@/components/Qc";
import { promises as fs } from "fs";
import { redirect } from "next/navigation";
import path from "path";

const Q = async ({ params }, data) => {
  try {
    const file = await fs.readFile(
      path.resolve(process.cwd(), "files/" + params.name + ".json"),
      "utf8",
    );

    data = JSON.parse(file);
  } catch (error) {
    redirect("/");
  }
  return (
    <>
      <Qc quiz={data} />
    </>
  );
};

export default Q;
