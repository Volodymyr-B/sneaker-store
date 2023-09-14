import { orderingInfo } from "@/constants/information";

const OrderingPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <h3>Ordering</h3>
      {orderingInfo.map((text, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
      ))}
    </section>
  );
};
export default OrderingPage;
