import { useRouter } from "next/router";

const MedicineUpdComp = () => {
  const router = useRouter();
  console.log(router.query.itemSeq);
  return (
    <>
      <div>dd</div>
    </>
  );
};

export default MedicineUpdComp;
