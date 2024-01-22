import Qc2 from "@/components/Qc2";
import { promises as fs } from "fs";
import { redirect } from "next/navigation";

const Q = async ({ params }, data) => {
  try {
    const file = await fs.readFile(
      process.cwd() + "/files/" + params.name + ".json",
      "utf8",
    );
    data = JSON.parse(file);
  } catch (error) {
    redirect("/");
  }
  return (
    <>
      <Qc2 quiz={data} />
    </>
  );
};

export default Q;
