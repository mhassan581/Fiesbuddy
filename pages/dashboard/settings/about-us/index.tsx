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
        <title>About Us | Feis Buddy</title>
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

        <div className="aboutus">
          <h3 className="heading">About Us:</h3>
          <p>
            Feis Buddy was created by a group of professionals that are
            passionate about Irish dance and committed to making every Irish
            Dance Competition the best experience it can be for dancers,
            parents, organizers and guests!
          </p>
          <p>
            As enthusiasts of all things Irish Dance, Feis Buddy not only
            appreciates the culture and history of the artform, but also the
            strong benefits that each Irish dancer gains from being part of such
            a disciplined and beautiful activity. To fully enjoy the competitive
            side of Irish Dance, we believe that all dancers and parents must
            have efficient, accurate and time sensitive information at their
            fingertips to provide them with all that is needed for decision
            making. This includes everything from entry deadlines and schedules
            to announcements for results and stages changes, to competitor
            lists, to venue information like parking, and so much more.
          </p>
          <p>
            We believe that time is a precious and valuable commodity. We also
            believe that if data is analyzed and delivered in the most efficient
            way possible, that the result is not only a more comprehensive
            transaction, but a more enjoyable one!
          </p>
          <p>
            Feis Buddy offers feis organizers a full suite of services that are
            needed to run a feis. Likewise, Feis Buddy looks forward to creating
            ways for the dancers to become more engaged during days of
            competition, with the hope that they will leave the event not only
            have gained experience as a competitor, but with positive memories
            of the competition itself!
          </p>
          <p>Feis Buddy…we hope to be your new Best Feis Friend!</p>
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
