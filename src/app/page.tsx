import DefaultLayout from "@/components/layouts/default-layout";

export const metadata = {
  title: "Suigar",
  description: "Guigar Description",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <p>HomePage</p>
      </DefaultLayout>
    </>
  );
}
