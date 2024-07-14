import Main from "@/components/Main";

import data from "../data/data.json";

export default async function Home() {
  // const response = await fetch(
  //   "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  // );
  // const data: Data = await response.json();
  return <Main data={data} />;
}
