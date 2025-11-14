import dotenv from "dotenv";
import { add } from "../utils/example";

dotenv.config();

function main() {
  const result = add(5, 7);
  console.log("Node Result:", result);

  console.log("Environment PORT:", process.env.PORT ?? "Not set");
}

main();
