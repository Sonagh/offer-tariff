import { getTariffs } from "@/services/tariffs.service"
import TariffPage from "./tariffPage";

export default async function Page() {
  const tariffs = await getTariffs()

  return <TariffPage tariffs={tariffs} />
}