import Fade from "~/components/FadeContainer";
import { footer } from "~/data";
import SocialHandles from "~/components/SocialHandles";

export default function Profile() {
  return (
    <Fade>
      <section className="pb-20 pt-20 leading-[1.1] md:pl-20 md:pr-20">
        <h1 className="text-4xl font-semibold">{footer.title}</h1>
        <div className="flex justify-between">
          <div className="mt-5 flex flex-col gap-2">
            <p className="text-xl font-normal uppercase">{footer.subtitle}</p>
            <p className="text-xl">
              <svg
                viewBox="-0.5 -2 20 19"
                version="1.1"
                width="22"
                height="16"
                aria-hidden="true"
                stroke="currentColor"
                className="mb-1 mr-1 inline-block"
              >
                <path
                  fillRule="evenodd"
                  d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                ></path>
              </svg>
              <span>{footer.location}</span>
            </p>
            <SocialHandles />
            <p className="text-xl">
              Open to opportunities:{" "}
              <span className="text-blue-400">
                {footer.openToOpportunities}
              </span>
            </p>
          </div>
          <div className="ml-10 max-[768px]:hidden">
            <img
              src="/assets/images/profile-picture.png"
              alt="Contact"
              className="w-80 rounded-full border-8 border-blue-400"
            />
          </div>
        </div>
      </section>
    </Fade>
  );
}
