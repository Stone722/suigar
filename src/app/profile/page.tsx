import DefaultLayout from "@/components/layouts/default-layout";

export const metadata = {
  title: "Suigar",
  description: "Guigar Description",
};

export default function Profile() {
  return (
    <>
      <DefaultLayout>
        <p className="text-white">Profile Page</p>
      </DefaultLayout>
    </>
  );
}
