import DefaultLayout from "@/components/layouts/default-layout";

export const metadata = {
  title: "Suigar",
  description: "Guigar Description",
};

export default function Provably() {
  return (
    <>
      <DefaultLayout>
        <p className="text-white">Provably Fair Page</p>
      </DefaultLayout>
    </>
  );
}
