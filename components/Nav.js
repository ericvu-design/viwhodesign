import Link from "next/link";

export default function Nav(props) {
  return (
    <ul className="auxNav" {...props}>
      <li>
        <Link href="/about">
          <a>about <i>về dự án</i></a>
        </Link>
      </li>
      <li>
        <Link href="/nominate">
          <a> nominate <i>đề cử</i></a>
        </Link>
      </li>

      <style jsx>{`
        ul {
          padding: 0;
          margin: 0;
          display: flex;
          font-size: 1.5rem;
        }

        ul li {
          list-style: none;
          margin-right: 2.2rem;
        }

        ul li a {
          color: #fff;
          text-decoration: none;
          transition: color 150ms ease;
        }

        ul li a:hover {
          color: #757575;
        }
      `}</style>
    </ul>
  );
}
