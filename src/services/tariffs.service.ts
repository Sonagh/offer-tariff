import { ITariff } from "@/types/tariff";

export async function getTariffs(): Promise<ITariff[]> {
    const res = await fetch(
        "https://t-core.fit-hub.pro/Test/GetTariffs",
        { cache: "no-store" }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch tariffs")
    }

    return res.json()
}
