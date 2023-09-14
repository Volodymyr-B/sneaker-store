import { returnsInfo } from "@/constants/information";

const ReturnsPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <h3>Returns</h3>
      {returnsInfo.info.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      <h5>{returnsInfo.list.title}</h5>
      <ul className="list-disc list-inside">
        {returnsInfo.list.ul.map((text, i) => (
          <li key={i}>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ReturnsPage;
