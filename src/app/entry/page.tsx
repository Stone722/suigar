import DefaultLayout from "@/components/layouts/default-layout";

export const metadata = {
  title: "Suigar",
  description: "Guigar Description",
};

export default function Entry() {
  return (
    <>
      <DefaultLayout>
        <p className="text-white">Entry Page</p>
      </DefaultLayout>
    </>
  );
}
