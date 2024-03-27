import DefaultLayout from "@/components/layouts/default-layout";

export const metadata = {
  title: "Suigar",
  description: "Guigar Description",
};

export default function LootBox() {
  return (
    <>
      <DefaultLayout>
        <p className="text-white">LootBox Page</p>
      </DefaultLayout>
    </>
  );
}
