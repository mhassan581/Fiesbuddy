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
            Claims.{" "}
          </h4>
          <p>
            You may submit a notification pursuant to the Digital Millennium
            Copyright Act (DMCA) by providing our company with the following
            information in writing (see 17 U.S.C 512(c)(3) for further detail):{" "}
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
