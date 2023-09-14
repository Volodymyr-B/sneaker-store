import { paymentAndDeliveryInfo } from "@/constants/information";

const PaymentAndDeliveryPage = () => {
  return (
    <section>
      <h3>Payment and delivery</h3>
      {paymentAndDeliveryInfo.map((list) => (
        <div key={list.title}>
          <h5 className="pt-2">{list.title}</h5>
          <ul className="list-disc list-inside">
            {list.ul.map((text, i) => (
              <li key={i} className="ml-5">
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
export default PaymentAndDeliveryPage;
