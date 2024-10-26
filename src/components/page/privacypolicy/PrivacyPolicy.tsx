import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="box-container py-[64px]">

      <div className='flex flex-col gap-10 max-w-[800px]'>
        <section className='flex flex-col gap-1'>
          <h1 className="text-3xl font-semibold text-left text-theme">Privacy Policy</h1>
          <p className="text-sm text-left">
            {"This website is operated by the Company, and users of this website are required to read the following privacy policy carefully. By using the content of this website, you are deemed to agree to the following terms."}
          </p>
        </section>
        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">Management of Personal Information</h2>
          <p className="text-sm text-left">
            The Company will keep customer personal information accurate and up-to-date, and take necessary measures such as maintaining security systems, establishing management systems, and conducting employee training to prevent unauthorized access, loss, damage, alteration, and leakage of personal information. We will implement safety measures to ensure strict management of personal information.
          </p>
        </section>

        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">Purpose of Use of Personal Information</h2>
          <p className="text-sm text-left">
            On this website, we may request personal information such as your name, email address, and phone number when you make inquiries. This personal information will not be used for purposes other than those provided at the time of collection.
          </p>
          <p className="text-sm text-left mt-2">
            The personal information entrusted to us will be used for communication from the Company, business guidance, and responses to inquiries, including sending emails and documents.
          </p>
        </section>

        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">Prohibition of Disclosure and Provision of Personal Information to Third Parties</h2>
          <p className="text-sm text-left">
            The Company will appropriately manage the personal information entrusted to us and will not disclose personal information to third parties except in the following cases:
          </p>
          <ul className="list-disc ml-4 mt-2 text-sm">
            <li>When the customer has given consent.</li>
            <li>When disclosure is necessary for the Company to commission services requested by the customer.</li>
            <li>When disclosure is required by law.</li>
          </ul>
        </section>

        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">Safety Measures for Personal Information</h2>
          <p className="text-sm text-left">
            The Company has taken comprehensive measures to ensure the accuracy and safety of personal information.
          </p>
        </section>

        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">Inquiry by the Person</h2>
          <p className="text-sm text-left">
            If a customer wishes to inquire, correct, or delete their personal information, we will respond after confirming the identity of the person making the request.
          </p>
        </section>

        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">Compliance with Laws and Regulations and Review</h2>
          <p className="text-sm text-left">
            The Company will comply with applicable Japanese laws and regulations regarding personal information held and will periodically review and improve this policy.
          </p>
        </section>

        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">Contact Us</h2>
          <p className="text-sm text-left">
            For inquiries regarding the handling of personal information, please contact us at the following:
          </p>
          <p className='text-sm text-left'>
            GLOBAL PAY Co., Ltd.
          </p>
          <p className='text-sm text-left'>
            101 Hoshino Building, 1-20-17 Hyakunincho, Shinjuku-ku, Tokyo 169-0073
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
