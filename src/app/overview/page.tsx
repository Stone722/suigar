import DefaultLayout from "@/components/layouts/default-layout";

export const metadata = {
  title: "Suigar",
  description: "Guigar Description",
};

export default function Overveiw() {
  return (
    <>
      <DefaultLayout>
        <p className="text-white">Overview Page</p>
      </DefaultLayout>
    </>
  );
}
