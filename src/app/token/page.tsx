import DefaultLayout from "@/components/layouts/default-layout";

export const metadata = {
  title: "Suigar",
  description: "Guigar Description",
};

export default function Token() {
  return (
    <>
      <DefaultLayout>
        <p className="text-white">Token Page</p>
      </DefaultLayout>
    </>
  );
}
