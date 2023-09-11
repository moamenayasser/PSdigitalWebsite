import Link from "next/link";

import Div from "./Div";

export default function WorkItem({ url, src, alt, service, title }) {
  return (
    <Div className="cs-post cs-style1">
      <Link href={url} className="cs-post_thumb">
        <img
          className="!rounded-none !rounded-tr-[40px] !rounded-bl-[40px]"
          src={src}
          alt={alt}
        />
        <Div className="cs-post_overlay" />
      </Link>
      <Div className="cs-post_info">
        <Div className="cs-posted_by capitalize dark:text-white">{service}</Div>
        <h2 className="cs-post_title dark:text-white">
          <Link href="/Portfolio">{title}</Link>
        </h2>
      </Div>
    </Div>
  );
}
