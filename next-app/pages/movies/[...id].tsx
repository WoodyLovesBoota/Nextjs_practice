import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const [title, id] = router.query.id || [];

  return (
    <div>
      <h2>{title || "Loading..."}</h2>
      <h2>{id || "Loading..."}</h2>
    </div>
  );
};

export default Detail;
