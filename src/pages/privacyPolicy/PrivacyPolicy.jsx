import styles from "../styles/style.module.css";
import IconLogo from "../../assets/IconLogo.svg";

const PrivacyPolicy = () => {
  return (
    <div>
      <h1 className={"mt-12 text-center text-3xl text-bold"}>Privacy Policy</h1>

      <div className={`${styles.contentContainer} ${styles.termsContent} h-full`}>
        <p className={styles.effectiveDate}>Effective Date: Jan 1, 2025</p>
        <p className={styles.effectiveDate}>Last Updated: Jan 1, 2025</p>

        <p>
          WhatAgent and Starfish Apps, Inc. respects your privacy and is
          committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you use our Large Language Model (LLM)-based services,
          applications, websites, or other platforms (collectively, the
          services.)
        </p>

        <p>
          By using the Services, you agree to the collection and use of
          information in accordance with this Privacy Policy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect different types of information to provide and improve our
          Services, including:
        </p>

        <h3>1.1 Information You Provide</h3>
        <ul>
          <li>
            <strong>User Input:</strong> Any text, files, or other content you
            submit when using the Services.
          </li>
          <li>
            <strong>Account Information (if applicable):</strong> If you create
            an account, we may collect your name, email address, username, and
            other registration details.
          </li>
          <li>
            <strong>Communications:</strong> If you contact us (e.g., support
            requests), we may collect and store communications.
          </li>
        </ul>

        <h3>1.2 Automatically Collected Information</h3>
        <ul>
          <li>
            <strong>Usage Data:</strong> Information on how you interact with
            the Services, such as session duration, input frequency, and feature
            usage.
          </li>
          <li>
            <strong>Device Information:</strong> Device type, operating system,
            browser type, and IP address.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies,
            log files, and similar tracking mechanisms to enhance user
            experience and analyze Service performance.
          </li>
        </ul>

        <h3>1.3 Third-Party Data</h3>
        <p>
          We may receive information from third-party integrations or platforms
          if you access our Services through external applications.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use collected data to:</p>
        <ul>
          <li>Provide and improve the Services.</li>
          <li>Personalize user experiences and enhance AI responses.</li>
          <li>Ensure security, fraud prevention, and compliance.</li>
          <li>Respond to inquiries and customer support requests.</li>
          <li>Analyze trends and usage patterns for Service optimization.</li>
          <li>Develop new features and improve AI models.</li>
        </ul>
        <p>
          We do not use your content to train models for third-party services
          unless explicitly disclosed.
        </p>

        <h2>3. Data Sharing and Disclosure</h2>
        <p>
          We do not sell or rent personal data. However, we may share
          information in the following circumstances:
        </p>

        <h3>3.1 Service Providers</h3>
        <p>
          We may share data with third-party vendors that assist in operating
          the Services (e.g., cloud hosting, analytics, and security services).
        </p>

        <h3>3.2 Legal and Compliance Requirements</h3>
        <p>
          We may disclose data if required by law, regulation, or legal process,
          or to protect against fraud, security threats, or legal claims.
        </p>

        <h3>3.3 Business Transfers</h3>
        <p>
          If we undergo a merger, acquisition, or sale of assets, your data may
          be transferred as part of the business transaction.
        </p>

        <h2>4. Data Retention and Deletion</h2>
        <ul>
          <li>
            We retain user data only as long as necessary for the purposes
            outlined in this Privacy Policy.
          </li>
          <li>
            Certain log data may be stored for security, fraud prevention, and
            compliance purposes.
          </li>
          <li>
            Users may request data deletion by contacting data@whatagent.net.
          </li>
        </ul>

        <h2>5. Security Measures</h2>
        <p>
          We implement industry-standard security practices to protect your
          information, including:
        </p>
        <ul>
          <li>
            <strong>Encryption:</strong> Data is encrypted in transit and at
            rest where applicable.
          </li>
          <li>
            <strong>Access Controls:</strong> Only authorized personnel can
            access sensitive information.
          </li>
          <li>
            <strong>Regular Audits:</strong> We conduct periodic security
            assessments.
          </li>
        </ul>
        <p>
          However, no system is 100% secure. Users should take necessary
          precautions, such as using strong passwords and avoiding sharing
          sensitive information in queries.
        </p>

        <h2>6. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar technologies to enhance user experience,
          including:
        </p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Required for basic
            functionality.
          </li>
          <li>
            <strong>Performance Cookies:</strong> Help us analyze usage and
            improve Services.
          </li>
          <li>
            <strong>Marketing Cookies:</strong> Used for targeted advertising
            (if applicable).
          </li>
        </ul>
        <p>Users can manage cookie preferences through browser settings.</p>

        <h2>7. User Rights and Choices</h2>
        <p>
          Depending on your location, you may have the following rights
          regarding your data:
        </p>
        <ul>
          <li>
            <strong>Access & Portability:</strong> Request a copy of your stored
            data.
          </li>
          <li>
            <strong>Correction:</strong> Update or correct inaccuracies in your
            data.
          </li>
          <li>
            <strong>Deletion:</strong> Request deletion of your data.
          </li>
          <li>
            <strong>Opt-Out:</strong> Restrict or object to data processing for
            certain purposes.
          </li>
        </ul>
        <p>To exercise these rights, contact: data@whatagent.net</p>

        <h2>8. Children's Privacy</h2>
        <p>
          Our Services are not intended for children under 13 (or the age of
          majority in your jurisdiction). We do not knowingly collect personal
          data from children. If we learn that a child has provided information,
          we will take steps to delete it.
        </p>

        <h2>9. Third-Party Links and Services</h2>
        <p>
          Our Services may contain links to third-party websites or services. We
          are not responsible for the privacy practices of third-party entities.
          We encourage users to review third-party privacy policies before
          interacting with their services.
        </p>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. Significant
          changes may be communicated through additional notifications (e.g.,
          email or banners).
        </p>
        <p>
          Continued use of the Services after changes indicates acceptance of
          the updated Privacy Policy.
        </p>

        <h2>11. Contact Information</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us:
        </p>
        <p>Email: privacy@whatagent.net</p>
        <p>
          Website:{" "}
          <a
            href="https://sharebrain.whatagent.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://sharebrain.whatagent.net
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
