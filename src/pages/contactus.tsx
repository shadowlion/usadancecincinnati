import Link from "next/link";

const ContactUsPage = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center pb-5">Contact Us</h1>
      <ul>
        <li>
          Email us at{" "}
          <Link href="mailto:usadance2006@gmail.com" passHref>
            <a target="_blank" rel="noreferrer">
              usadance2006@gmail.com
            </a>
          </Link>
        </li>
        <li>
          Message us on our{" "}
          <Link href="https://www.facebook.com/usadance2006">
            <a target="_blank" rel="noreferrer">
              Facebook page
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContactUsPage;
