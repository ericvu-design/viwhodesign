import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "../components/Title.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

const item = {
  hidden: { opacity: 0, y: "15%" },
  show: { opacity: 1, y: "0%" },
  transition: {
    easing: "easeInOut",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home({ designers }) {
  return (
    <div className="container">
      <Head>
        <title>Vietnameses Who Design | About</title>
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </Head>

      <Link href="/" shallow={true}>
        <a className="auxNav arrowback">←</a>
      </Link>

      <Title
        className="title m0 p0"
        text="Vietnameses*who&nbsp;design&nbsp;is&nbsp;a"
        noAnimation
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="f1 extend">
          <motion.span variants={item}>place to showcase</motion.span>{" "}
          <motion.span variants={item}>the work of talented</motion.span>{" "}
          <motion.span variants={item}>Vietnameses designers</motion.span>{" "}
          <motion.span variants={item}>to the world.</motion.span>{" "}
          <motion.span variants={item}>The goal is to inspire</motion.span>{" "}
          <motion.span variants={item}>new designers to diversify</motion.span>{" "}
          <motion.span variants={item}>
            their references, experienced designers
          </motion.span>{" "}
          <motion.span variants={item}>
            to diversity their network, and companies to diversify their teams.
          </motion.span>
        </p>
      </motion.div>

      <div className="moreabout">
        <div className="col-left">
          <h3>How can I nominate someone?</h3>
          <p>
            If you know a Vietnamese designer whose work or voice is valuable to
            the design industry, please{" "}
            <Link href="/nominate">
              <a className="link">fill out this form</a>
            </Link>{" "}
            with their information and a few words about why you're nominating
            them. You can choose to link to their portfolio, to their LinkedIn,
            or to other social profiles — any link that you feel best represents
            how that person is making a difference in the industry. We decided
            not to collect or display the designer’s photo because we wanted the
            repository to be less about what someone looks like and more about
            how they’re making an impact in the industry.
          </p>
          <h3>How did you come up with this idea?</h3>
          <p>
            We didn’t. This project is inspired by our fantastic sibling sites:
          </p>
          <ul>
            <li>
              <a className="link" href="https://womenwho.design/">
                Women Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.womenwhodraw.com/">
                Women Who Draw
              </a>
            </li>
            <li>
              <a className="link" href="http://www.28blacks.com/">
                28 Black Designers
              </a>
            </li>
            <li>
              <a className="link" href="https://www.latinxswhodesign.com/">
                Latinx Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://queerdesign.club/">
                Queer Design Club
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://filipinos-who-design.webflow.io/">
                Filipinos Who Design
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://filipinos-who-design.webflow.io/">
                People Of Craft
              </a>
            </li>
            <li>
              <a className="link" href="https://indianswhodesign.in/">
                Indians Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.apiwho.design/">
                Asian & Pacific Islanders Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.brazillianswho.design/">
                Brazil Who Design
              </a>
            </li>
          </ul>

          <h3>How did you build this?</h3>
          <p>
            We didn't. The site is forked on the open-sourced Brazilians Who Design website&nbsp;
            <a className="link" href="https://github.com/zehfernandes/brazilianswhodesign">available here</a> for you to create your own showcase.
          </p>

          <h3>Who’s behind this?</h3>
          <ul>
            <li>
              <a className="link" href="https://odap.vn">
                Ố ĐÁP
              </a>
            </li>
          </ul>
        </div>
        <div className="col-right">
          <h3>How can I remove my name?</h3>
          <p>
            If you’ve been added to the directory and would like to opt-out or
            make an edit to your profile, please send us a message at
            xinchao@vietnameseswho.design.
          </p>
          <h3>Why is my nomination taking so long to show?</h3>
          <p>
            We update this website once a week to include new names. To ensure a
            healthy gender balance on this website, some nominations might take
            longer to appear. In the meantime, try nominating a designer who
            identifies as a woman or non-binary.
          </p>
        </div>

        <Analytics />
      </div>

      <style jsx>{`
        .extend {
          margin: 0;
          max-width: 17ch;
        }

        .moreabout {
          font-weight: normal;
          font-size: 1.5rem;
          line-height: 140%;
          letter-spacing: 0.01em;
          display: flex;
          margin-top: 8rem;
        }

        .moreabout > div {
          width: 50%;
          max-width: 50ch;
        }

        .col-right {
          padding-left: 3rem;
        }
        .col-left {
          padding-right: 3rem;
        }

        .moreabout p {
          margin: 0;
          padding: 0;
        }

        .moreabout h3 {
          padding: 0;
          margin: 0;
          font-size: 1.5rem;
        }

        .moreabout h3 {
          margin: 4rem 0 0 0;
        }

        ul,
        li {
          padding: 0;
          margin: 0;
          list-style: none;
          margin-top: 0.3rem;
        }

        @media (max-width: 480px) {
          .moreabout {
            display: block;
          }

          .moreabout > div {
            width: 100%;
            max-width: 100%;
            display: block;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
