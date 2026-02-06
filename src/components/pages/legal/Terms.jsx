const Terms = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="container">
        <article className="prose prose-md max-w-none *:leading-snug *:font-normal">
          <h1>Terms and Conditions</h1>
          <p className="updated">Last updated: January 1, 2026</p>

          <p>
            Welcome to <strong>Your Store Name</strong>. By accessing or using
            our website, you agree to comply with and be bound by the following
            terms and conditions.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            These terms apply to all visitors and users of our website. If you
            do not agree with any part of these terms, you must not use our
            site.
          </p>

          <h2>2. Products and Orders</h2>
          <ul>
            <li>
              All products are subject to availability and may be withdrawn at
              any time.
            </li>
            <li>
              We reserve the right to refuse or cancel any order for any reason.
            </li>
            <li>
              Pricing and product information are subject to change without
              notice.
            </li>
          </ul>

          <h2>3. Shipping and Delivery</h2>
          <p>
            Shipping times are estimates and may vary. We are not responsible
            for delays caused by shipping carriers or customs.
          </p>

          <h2>4. Returns and Refunds</h2>
          <p>
            Please refer to our <a href="/return-policy">Return Policy</a>
            for detailed information on returns and refunds.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and
            images, is the property of Your Store Name and is protected by
            copyright laws.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Your Store Name shall not be liable for any direct, indirect,
            incidental, or consequential damages arising from the use of our
            website or products.
          </p>

          <h2>7. Governing Law</h2>
          <p>These terms are governed by the laws of [Your Country/State].</p>

          <h2>8. Contact Us</h2>
          <p>For questions about these terms, contact us:</p>
          <ul>
            <li>Email: [EMAIL_ADDRESS]</li>
            <li>Address: Your Company Address, City, Country</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Terms;
