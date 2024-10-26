import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="box-container py-[64px]">


      <div className='flex flex-col gap-10 max-w-[800px]'>


        <section className='flex flex-col gap-1'>
          <h2 className="text-3xl font-semibold text-left text-theme">Disclaimer</h2>
          <p className="text-sm text-left">
            {"This site is operated by GLOBAL PAY Co., Ltd. (here in after referred to as 'the Company'). Users of this site are required to read the following disclaimer carefully. By utilizing the content of this site, you are deemed to agree to the following terms."}
          </p>
          <ul className="list-disc mt-2 text-sm ml-">
            <li>The Company strives to ensure the accuracy of the content provided; however, we do not guarantee the accuracy of any information. The Company shall not be held liable for any damages that may arise from the use of this site. Users are encouraged to use this site at their own risk</li>
            <li>The content and addresses on this site are subject to change or deletion without prior notice.</li>
            <li>The disclaimer posted on this page may be changed without prior notice.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
