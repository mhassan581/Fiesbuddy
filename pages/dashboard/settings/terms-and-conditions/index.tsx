import Head from "next/head";
import {
  signIn,
  signOut,
  useSession,
  SessionProvider,
  getSession,
} from "next-auth/react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { IUser } from "@/types";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Term & Conditions | Feis Buddy</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>
        <Link
          href={"/dashboard/settings"}
          aria-label="Back"
          className="backbtn"
        >
          <i className="icon-arrow_back_chevron_direction_left_icon"></i>
          Back
        </Link>

        <div className="privacy_policy">
          <h3 className="heading">Term & Conditions:</h3>
          <h3>AGREEMENT TO TERMS</h3>
          <p>
            {`The Terms of Use Agreement (“Agreement”), created on the effective
            date and last amended on date above, is made between you (“user,”
            “you” or “your”), and:`}
          </p>
          <h3>WEBSITE OWNER.</h3>
          <p>
            <u>Website URL:</u> www.feisbuddy.com
          </p>
          <p>
            <u>Company Name:</u> www.feisbuddy.com
          </p>
          <p>
            <u>Address:</u> 53 State Street, Methuen, Massachusetts, 01844
          </p>
          <p>
            <u>E-Mail:</u> info@feisbuddy.com
          </p>
          <p>
            <u>Phone:</u> 6172651928
          </p>
          <p>
            {`The owner mentioned above includes its affiliated companies,
            websites, applications, software, and tools (the “Company,” “we,”
            “us,” or “our”), and, with this Agreement, outlines the rights and
            obligations that you and all users share, as well as any other media
            form, media channel, mobile website or mobile application related or
            connected thereto (collectively, the “website”), for the purpose of
            making use of any of the content, software, or other tools on the
            website (“services”).`}
          </p>
          <p>
            <b>c.) Free Trials.</b>{" "}
            {`Any free trial, sample, or other abridged
            versions of our services that are offered shall be considered a one
            (1) time use based on the registering of a user’s e-mail. It is
            strictly prohibited for a user to create and register more than one
            (1) e-mail solely to access another free trial on the website.`}
          </p>
          <h3>ACCESS. </h3>
          <p>
            Your access to and use of the website and the services is
            conditional upon your acceptance of and compliance with this
            Agreement, which applies to all the website’s visitors. If for any
            reason, you do not agree with any of the terms of this Agreement,
            you may not access the website or its services.
          </p>
          <p>
            Additionally, your access to and use of the services is also
            conditional upon your acceptance of and compliance with our privacy
            policy which describes our policies and procedures on the
            collection, use, and disclosure of your personal information which
            is initiated by and commences when you use the website. The privacy
            policy discloses details and discloses your privacy rights and
            protections under applicable laws. It is advised to read our privacy
            policy prior to accessing the website or its services.
          </p>
          <h3>a.) Minors (under the age of 18).</h3>
          <p>
            If any user is a minor in the jurisdiction where they reside, the
            minor must obtain permission from their parent or guardian to use
            the website. If a minor accesses the website, it is assumed that
            their parent or guardian has read and agrees to this Agreement and
            has given permission to the minor to use the website.
          </p>
          <h3>b.) Children (under the age of 13).</h3>
          <p>
            If any user is a child under the age of thirteen (13) years and from
            the United States, it is assumed that they have obtained permission
            and verifiable parental consent to use the website. Furthermore,
            this Agreement allows the protections mentioned under the Children’s
            Online Privacy Protection, specifically, 15 U.S. Code § 6502.
          </p>
          <p>
            {`We do not claim that the website's content is appropriate or
            suitable for you or any visitor. No information, data, or
            information provided on the website is intended for distribution or
            use in any location where such usage is prohibited or is contrary to
            any law or regulation which would subject the Company to the legal
            liability of any type. Any such access or use of the website is to
            be utilized on your own initiative, and you are solely responsible
            for any legal compliance.`}
          </p>
          <p>
            Any supplemental amendments or documents posted on the website
            following the effective date of this Agreement are to be considered
            expressly incorporated into this Agreement.
          </p>
          <h3>PROHIBITED ACTIVITIES. </h3>
          <p>
            As a user of our services, whether on the website or mobile app, it
            is prohibited to engage in the following activities to:{" "}
          </p>
          <ul>
            <li>
              Systematically retrieve data or other content from the website or
              services to create or compile, directly or indirectly, a
              collection, compilation, database, or directory without our
              written permission;
            </li>
            <li>
              Trick, defraud, or mislead other users or us, especially in any
              attempt to learn sensitive account information such as user
              passwords;
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related
              features of the website or services, including those that restrict
              the copying of content or protected marks;
            </li>
            <li>
              Disparage, tarnish, or otherwise harm the company, website, mobile
              app, or any other platforms where the services are offered;
            </li>
            <li>
              Use any information obtained from the website or the service to
              harass, abuse, or harm another person or group of people;
            </li>
            <li>
              Make improper use of our support services, specifically, our
              customer service representatives, or make false reports of abuse
              or misconduct;
            </li>
            <li>
              Use the website or services in a manner that is inconsistent with
              its intended use or against any applicable laws;
            </li>
            <li>
              Engage in spamming, linking, or referring to other websites for
              commercial or other purposes;
            </li>
            <li>
              Upload or transmit, or the attempt of such act, viruses, trojan
              horses, or other damaging or improper material, including the
              spamming or continuous posting of repetitive text, that has the
              potential to interfere, modify, impair, disrupt, alter, or
              interfere with another user’s experience with the website or its
              features, functions, operations, or maintenance;
            </li>
            <li>
              Attempting any unauthorized automated use of the website, such as
              using scripts to send comments and messages, or using mining tools
              with the intention of gathering, injecting, or extracting data;
            </li>
            <li>
              Deleting copyrights, trademarks, disclaimers, or any other marks
              from the website or its content;
            </li>
            <li>
              Impersonating another user or person by use of a username, e-mail,
              personal name, or in any other manner;
            </li>
            <li>
              {`Upload or transmit, or the attempt of such act, any material that
              acts as a passive or active information collection or transmission
              mechanism, including without limitation, clear graphics
              interchange formats (“gifs”), 1x1 pixels, web bugs, cookies, or
              other similar devices, also known as “spyware,” “passive
              collection mechanisms” or “pcms;”`}
            </li>
            <li>
              Interfering with, disrupting, or creating an undue burden on the
              website, services, networks, and other connections;
            </li>
            <li>
              Harassing, annoying, intimidating, or threatening any of the other
              users, employees, agents, contractors, or any other individual
              affiliated with the company;
            </li>
            <li>
              Disabling or attempting to disable restrictions implemented by the
              website that prohibits access to certain areas;
            </li>
            <li>
              Copying or adapting the software of the website, including but not
              limited to Flash, PHP, HTML, JavaScript, or other code;
            </li>
            <li>
              Deciphering, decompiling, disassembling, or reverse engineering
              any of the software on the website;
            </li>
            <li>
              Except as may be the result of standard search engine or internet
              browser usage, to use, launch, develop, or distribute any
              automated system, including without limitation, any crawlable
              spider, robot or bots, cheat utility, scraper, or offline reader
              that accessed the website or services, or using or launching any
              unauthorized script or other software;
            </li>
            <li>
              Using a buying or purchasing agent to make purchases on the
              website;
            </li>
            <li>
              Making any unauthorized use of the website or the services, such
              as collecting usernames, e-mail addresses, or personal names of
              users by electronic or other means to send unsolicited e-mails or
              create user accounts by automated means or under false pretenses;
            </li>
            <li>
              Using the website or services as part of any effort to compete
              with us or otherwise using the website, services, marks, content,
              data, or any part thereof for any revenue-generating endeavor,
              commercial purpose, or for personal benefit;
            </li>
            <li>
              Using the website or services to advertise or offer to sell goods
              or other services;
            </li>
            <li>Selling your user profile or account on the website.</li>
          </ul>
          <h3>GUIDELINES FOR REVIEWS. </h3>
          <p>
            We may provide you, either on the website or by a 3rd party, the
            right to leave a review or rating of the services provided. Said
            review or rating requires that you:{" "}
          </p>
          <ul>
            <li>
              Should have firsthand experience with the person/entity being
              reviewed;{" "}
            </li>
            <li>
              Do not contain any offensive, abusive, racist, profanity-laden
              language;
            </li>
            <li>
              Do not reference discriminatory language or references related to
              religion, race, gender, national origin, age, marital status,
              sexual orientation, or disability;
            </li>
            <li>Do not include references to illegal activity;</li>
            <li>
              Do not post negative reviews as part of a scheme working with a
              competitor of ours;
            </li>
            <li>
              Do not make any suggestions or conclusions as to the legality of
              our services, products, or conduct;
            </li>
            <li>
              Do not post any false or misleading comments about your experience
              with the website or our company; and
            </li>
            <li>
              Do not organize a campaign encouraging others to post reviews,
              whether positive or negative.{" "}
            </li>
          </ul>
          <p>
            In our sole discretion, we may decide to accept, reject, or remove
            reviews. Our responsibility is to screen reviews to ensure that any
            postings regarding the website and its services are accurate and
            verifiable. Any reviews made by you or other users of the website do
            not represent our opinions or statements of the services or of our
            affiliates or partners. We do not assume liability, claims, or
            losses resulting from any review made on the website. By posting a
            review, you hereby grant us a perpetual, nonexclusive, worldwide,
            commercial, royalty-free, and assignable license (and sublicense
            ability) to reproduce, modify, translate, transmit by any means,
            display, perform, and/or distribute all content relating to such
            reviews made.
          </p>
          <h3>COPYRIGHT POLICY. </h3>
          <h4>a.) Intellectual Property Infringement. </h4>
          <p>
            It is our duty to respect the intellectual property rights of
            others. Therefore, it is our policy to respond to any claim that
            infringes on any trademark, copyright, or other intellectual
            property protected under law.
          </p>
          <p>
            If you are an owner of any protected intellectual property that you
            feel is being used without your authorization, you must submit
            notice to us by any of the contact details mentioned herein and
            include a detailed description of the alleged infringement.{" "}
          </p>
          <p>
            If any request is made, and it is determined that you are not the
            owner of the intellectual property or do not have the authority to
            act on the owner’s behalf, you may be held accountable for damages
            which may also include costs related to attorneys’ fees for such
            misrepresentation.
          </p>
          <h4>
            b.) DMCA Notice and DMCA Procedure for Copyright Infringement
            Claims.
          </h4>
          <p>
            You may submit a notification pursuant to the Digital Millennium
            Copyright Act (DMCA) by providing our company with the following
            information in writing (see 17 U.S.C 512(c)(3) for further detail):
          </p>
          <ul>
            <li>
              An electronic or physical signature of the copyright owner or a
              person authorized to act on behalf of the owner of the copyrighted
              work;
            </li>
            <li>
              A description of the copyrighted work that you claim has been
              infringed, including the URL(s) where the copyrighted work exists
              or a copy of the copyrighted work;
            </li>
            <li>
              Your contact details including a personal name, address, phone
              number, and an e-mail address;
            </li>
            <li>
              A statement that the copyright infringement is not authorized and
              that the request to remove the copyrighted work is in good faith;
              and
            </li>
            <li>
              A statement by you, with language that includes “under penalty of
              perjury,” that the information included in the infringement
              removal is accurate.
            </li>
          </ul>
          <p>
            Upon receipt of a copyright infringement notification, we will take
            whatever steps are required to remove the copyrighted content from
            the website or the services.
          </p>
          <h3>INTELLECTUAL PROPERTY.</h3>
          <p>
            Except as otherwise indicated, all source coding, databases,
            functionalities, software, graphic designs, and media of any kind
            (e.g. audio, video, text, photos, etc.), content, trademarks,
            service marks, logos, and copyrights are considered to be
            intellectual and proprietary information (“intellectual property”).
            Such intellectual information is under our ownership and protected
            by local, state, national, and international laws and will be
            defended.
          </p>
          <p>
            No intellectual property is permitted to be copied, reproduced,
            aggregated, republished, uploaded, posted, publicly displayed,
            encoded, translated, transmitted, distributed, sold, licensed, or
            otherwise exploited for commercial purposes without our express
            prior written permission.
          </p>
          <h3>USER OBLIGATIONS.</h3>
          <p>
            You, as a user of the website or any of its services, agree to the
            following:
          </p>
          <ul>
            <li>
              Any information used for registration purposes, if required, must
              be submitted in an accurate and completed manner;
            </li>
            <li>
              If any information should change regarding your account, you agree
              to change it in a timely fashion;
            </li>
            <li>
              You have the legal capacity to understand, agree with, and comply
              with this Agreement;
            </li>
            <li>
              That you are not considered a minor in the jurisdiction where you
              reside or are accessing the website or its services;
            </li>
            <li>
              That you will not access the website or its services through the
              use of bots, scripts, or any other use than the traditional manner
              as is intended; and
            </li>
            <li>
              That you will use the website and its services in an authorized
              and legal manner in accordance with this Agreement.
            </li>
          </ul>
          <p>
            In regard to any of the information submitted by you, if it should
            be deemed inaccurate, out of date, or incomplete, we reserve the
            right to terminate your access to the website or account and any
            future intended use.
          </p>
          <h3>USER ACCOUNTS.</h3>
          <p>
            If our website allows the creation of a user account of any type,
            you agree to be responsible for safeguarding its information
            including account data, connected e-mails, passwords, and any other
            personal information located therein. If you are made aware of any
            breach of unauthorized use of the account, to notify us as soon as
            possible. Furthermore, you agree not to disclose any password
            created with any 3rd party other than secured services used to
            assist with saving passwords on your behalf.
          </p>
          <p>
            If the creation of a username is allowed when making an account,
            such username must be appropriate for public viewing and not violate
            any trademark, copyright, or other protected names or marks.
          </p>
          <h3>THIRD (3RD) PARTY WEBSITE AND CONTENT.</h3>
          <p>
            Our website or services may contain links to 3rd party websites or
            services that are not owned or controlled by us. Therefore, we
            assume no responsibility for the content, privacy policies, terms of
            use, practices, services, experiences, activities, or any other acts
            by 3rd parties. You acknowledge that if you are to be re-directed or
            forwarded to such 3rd party website, you hold us harmless and free
            of liability for any action that should occur on such websites,
            which may or may not include damages, losses, or any other claims.
          </p>
          <h3>ADVERTISING.</h3>
          <p>
            In the event that we host, display, recommend, or link to websites
            or services in exchange for a fee (“advertisements”), it shall be
            known that such websites and services are often not known to us and
            are provided via advertisement networks based on user data. We do
            not own or control such advertisements and assume no responsibility
            for the content, privacy policies, terms of use, practices,
            services, experiences, activities, or any other acts. Our only
            affiliation with such advertisements is the payment per display,
            clicks, or any other monetary benefit in accordance with its terms
            and conditions or affiliate terms.
          </p>
          <p>
            Any advertisements used are subject to the Digital Millennium
            Copyright Act (“DMCA”) policies. There will be no refund or
            compensation related to a DMCA takedown of said advertisements. Our
            relationship with advertisers begins and ends with us providing
            space for the placement of such advertisements.
          </p>
          <h3>SITE MANAGEMENT.</h3>
          <p>
            To ensure the best experience for all users of our website and
            services, we reserve the right, in our sole discretion, to do the
            following:
          </p>
          <ul>
            <li>
              To monitor our website, services, and any other content for
              violations by users of this Agreement;
            </li>
            <li>
              To take appropriate actions against our users, including legal
              action, for those who may have violated this Agreement or have
              attempted to defraud or cause harm to other users;
            </li>
            <li>
              To refuse, restrict, limit, disable, or remove any and all files
              and Content which, due to excessive size limits or other
              properties, are burdensome to our systems or other users; and
            </li>
            <li>
              To otherwise manage our website and services in such a way as to
              protect our rights and property and to encourage the optimal
              running of said websites and services.
            </li>
          </ul>
          <h3>PRIVACY POLICY.</h3>
          <p>
            Your access to and use of our website or services is conditional
            upon your acceptance of our privacy policy. Our privacy policy
            describes our rules and procedures on the collection, use, and
            disclosure of your personal information and details your privacy
            rights and how the law protects you and such data. It is recommended
            for all users to read to know their rights. Our privacy policy can
            be found in the footer area of the website.
          </p>
          <p>
            We maintain the right to store certain data that you have
            transmitted by the use of the website or any of our services. You
            are solely responsible for the data you transmit and how it relates
            to any activity you have undertaken when using the website and any
            of its services. Therefore, you agree that we have no liability to
            you for any loss, breach, or corruption of any data and hereby waive
            any right of action against us that may or may not arise from such
            loss, breach, or corruption.
          </p>
          <h3>TERMINATION.</h3>
          <p>
            We may terminate or suspend your account for any reason and at our
            sole discretion. If your account is suspended or terminated, we may
            or may not provide prior notice. Upon termination, your access to
            the website and/or services will cease immediately.
          </p>
          <p>
            If you wish to terminate your relationship with us, such termination
            can be made by simply discontinuing your use of the website and its
            services.
          </p>
          <h3>GOVERNING LAW.</h3>
          <p>
            The laws governing the company’s jurisdiction mentioned herein shall
            govern this Agreement, including your use and access to the website
            and services. Your use of this website, services, and any mobile app
            may be subject to other local, state, national, and international
            laws.
          </p>
          <h3>DISPUTE RESOLUTION.</h3>
          <p>
            If you should raise any dispute about the website, its content, or
            any of the services offered, it is required first to attempt to
            resolve the dispute formally by contacting us.
          </p>
          <p>
            <b>a.) Mediation.</b> If a dispute cannot be agreed upon by the
            parties, it shall be moved to mediation for a period of 30 days with
            at least 10 hours to be committed by each party in accordance with
            the procedures of the United States Arbitration & Mediation. All
            costs related to said mediation shall be shared equally by both
            parties.
          </p>
          <p>
            <b>b.) Arbitration.</b> If the dispute cannot be agreed upon during
            the mediation period, then the dispute will be submitted to binding
            arbitration in the jurisdiction of governing law.
          </p>
          <p>
            We maintain the right to bring proceedings regarding the substance
            of any dispute in the courts of the country where you or we reside.
          </p>
          <h3>{`”AS-IS” DISCLAIMER.`}</h3>
          <p>
            {`It is recognized to you, as a user of the website and any services
            offered, that they are provided on an “as-is,” “where is,” and “as
            available” basis, including faults and defects without warranty.`}
          </p>
          <p>
            To the maximum extent permitted under applicable law, the company,
            on its own behalf and those of its affiliates, licensors, and
            service providers, expressly disclaim all warranties, whether
            express, implied, statutory, or otherwise, with respect to the said
            website and any services offered, including all implied warranties
            of merchantability, fitness for a particular purpose, title and
            non-infringement, and warranties that may arise out of the course of
            dealing, course of performance, usage or trade practice. Without
            limitation to the foregoing, we provide no warranty or undertaking,
            and make no representation of any kind, that the content or any
            services provided will meet your requirements, achieve any intended
            results, be compatible or work with any other software,
            applications, systems, devices, or services, including operating
            without interruption, or meet any performance or reliability
            standards or be error and bug-free from any defects that can or will
            be corrected.
          </p>
          <p>
            Without limiting the foregoing, neither we nor any of our providers
            make any representation or warranty of any kind, express or limited,
            in regard to the following:
          </p>
          <ul>
            <li>
              The operation or availability of the website or any services, or
              the information content, and materials or products included
              herein;
            </li>
            <li>
              The website or any services being uninterrupted or bug-free;
            </li>
            <li>
              The accuracy, reliability, or currency of any information or
              content provided through the website or services; and
            </li>
            <li>
              The website or any services, servers, content, or e-mails sent on
              behalf of our company is free of viruses, scripts, trojan horses,
              worms, malware, timebombs, or any other harmful code.
            </li>
          </ul>
          <p>
            Some jurisdictions do not allow the exclusion of certain types of
            warranties or limitations on the applicable statutory rights of a
            consumer. Therefore, some or all of the above exclusions and
            limitations may not apply to you. The exclusions and limitations
            outlined in this section will be applied to the greatest extent
            under applicable law.
          </p>
          <h3>INDEMNIFICATION.</h3>
          <p>
            {`You agree to defend, indemnify, and hold us harmless, including any
            of our subsidiaries, agents, or affiliates and our respective
            officers, agents, partners, and employees, from and against any
            loss, damage, liability, claim, or demand, including reasonable
            attorneys’ fees and expenses, made by any 3rd party due to or
            arising out of the following:`}
          </p>
          <ul>
            <li>Our content;</li>
            <li>Use of the website or any of our services;</li>
            <li>Not able to use the website or any of our services;</li>
            <li>Any breach of this Agreement;</li>
            <li>
              Any beach of representations and warranties set forth in this
              Agreement;
            </li>
            <li>
              Any violation of the rights of a 3rd party, including but not
              limited to intellectual property rights; and
            </li>
            <li>
              Any overt harmful act toward any other user of the website or its
              services.
            </li>
          </ul>
          <p>
            Notwithstanding the foregoing, we reserve the right, at your
            expense, to assume the exclusive defense and control of any matter
            for which you are required to indemnify us, and you agree to
            cooperate, at your expense, with our defense of such claims. We
            agree to use reasonable efforts to notify you of any such claim,
            action, or proceeding which is subject to this indemnification upon
            becoming aware of it.
          </p>
          <h3>NOTICES.</h3>
          <p>
            Except as explicitly stated otherwise, any notices sent to us must
            be sent to info@feisbuddy.com. Any notices sent to you regarding any
            communication that must be sent in accordance with this Agreement
            will be sent to the e-mail registered to any account created on the
            website.
          </p>
          <p>
            If notice is required to be sent via standard mail for legal or
            other purposes, the mailing address in Section 1 of this Agreement
            should be used.
          </p>
          <h3>ELECTRONIC MEANS.</h3>
          <p>
            When accessing the website or any of its services, sending e-mails,
            online forms, esignatures, or any type or kind of electronic records
            or communication, you consent that all agreements, notices,
            disclosures, and other communications we provide to you in such
            manner satisfies any legal requirement that such communication
            should be in writing. You hereby agree that the use of such
            electronic means will be regarded as sufficient and be viewed as the
            same as its physical counterpart. Furthermore, you hereby waive any
            rights or requirements under any statutes, regulations, rules,
            ordinances, or other laws in any jurisdiction which require an
            original signature or delivery or retention of non-electronic
            records.
          </p>
          <h3>CALIFORNIA USERS.</h3>
          <p>
            If any complaint with us is not satisfactorily resolved, you can
            contact the Complaint Assistance Unit of the Division of Consumer
            Services of the California Department of Consumer Affairs in any of
            the methods below:
          </p>
          <p>
            <b>Mail: </b>1625 North Market Blvd, Suite N 112, Sacramento,
            California 95834
          </p>
          <p>
            <b>Telephone: </b>(800) 952-5210 <b>&</b> (916) 445-1254
          </p>
          <h3>UNITED STATES FEDERAL GOVERNMENT END-USER PROVISIONS.</h3>
          <p>
            If you are a user acting on behalf of the U.S. federal government,
            our website and its services are treated as a “commercial item” as
            defined under 48 C.F.R. § 2.101.
          </p>
          <h3>EUROPEAN UNION (EU) USERS.</h3>
          <p>
            If you are a European Union (EU) resident, consumer, or user, it is
            recognized that you are entitled to specific protections on how your
            personal information is collected. We, in our privacy policy,
            attempt to be in accordance with such rules and regulations.
          </p>
          <h3>MISCELLANEOUS.</h3>
          <p>
            This Agreement and any policies or operating rules posted by us, on
            the website, or through any services or in respect to such
            constitute the entire Agreement and understanding between you, as a
            user, and us, as a company. Our failure to exercise or enforce any
            right or provision of this Agreement will not operate as a waiver of
            such right or provision. This Agreement operates to the fullest
            extent permissible by law in accordance with the jurisdiction where
            we are located and to the protections that you, as a user, are
            entitled to in your jurisdiction. We reserve the right to assign any
            or all of our liabilities, services, and obligations to another
            party at any time. We shall not be responsible or liable for any
            loss, damage, delay, or failure to act caused by an event beyond our
            reasonable control.
          </p>
          <p>
            If any provision, section, clause, or part of this Agreement is
            determined to be unlawful, void, or unenforceable, that said portion
            of this Agreement is determined to be severable and does not affect
            the validity and enforceability of any remaining language.
          </p>
          <p>
            It is understood that this Agreement does not create a joint
            venture, partnership, employment, or agency relationship between you
            and us, the website, or any of its services. You agree that this
            Agreement will not be construed against us by virtue of having
            drafted and published on the website for your review. Therefore, you
            agree to waive any and all defenses that may have been assumed under
            this Agreement and the lack of signing by any party hereto.
          </p>
          <p>
            If this Agreement has been translated, you agree that its original
            English text shall prevail in the case of a dispute.
          </p>
        </div>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  const user = session?.user as IUser;

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session,
    },
  };
}
