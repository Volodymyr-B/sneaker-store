import Link from "next/link";
import { linksNav } from "@/constants/navigation";

const ContactsPage = () => {
  return (
    <section>
      <h3>Contact with us</h3>
      <ul className="flex flex-col gap-2 mb-6">
        {linksNav.map((nav) => (
          <li key={nav.title}>
            <span>{nav.title.toUpperCase()}: </span>
            <Link href={nav.link}>{nav.cover}</Link>
          </li>
        ))}
      </ul>
      <p>Address: Kharkiv</p>
      <p>Working hours: Mon-Fri: 10:00 - 18:00, Sat-Sun: Closed</p>
    </section>
  );
};

export default ContactsPage;
