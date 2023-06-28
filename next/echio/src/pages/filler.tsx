import { Context } from "@/types";
import { fillDatabase } from "../../prisma/filler";

export async function getServerSideProps(ctx: Context) {

  await fillDatabase();
  return {props: {}}
}

export default function Page() {
  return <div>Filling Database</div>;
}
