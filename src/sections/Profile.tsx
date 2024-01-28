import { Fade } from "~/components/ReactReveal";
import SocialHandles from "~/components/SocialHandles";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import { footer } from "~/data";

export default function Profile() {
  return (
    <section className="pb-20 pt-20 leading-[1.1]" id="contact">
      <Fade duration={1000} triggerOnce>
        <h1 className="text-4xl font-semibold">{footer.title}</h1>
        <div className="flex flex-col justify-between">
          <div className="order-2 mt-5 flex flex-col gap-2">
            <p className="text-2xl font-normal uppercase">{footer.subtitle}</p>
            <span className="my-5">
              <span className="text-xl">
                <IoLocationOutline className="mb-1 mr-2 inline-block" />
                <span>{footer.location}</span>
              </span>
              <span className="ml-4 text-xl">
                <FaPhoneAlt className="mb-1 mr-2 inline-block" />
                <span>{footer.phone}</span>
              </span>
            </span>
            <SocialHandles />
            <p className="my-8 text-xl">
              Open to opportunities:{" "}
              <span className="text-blue-400">
                {footer.openToOpportunities}
              </span>
            </p>
          </div>
          <div className="order-1 max-[768px]:my-10 md:ml-10">
            <img
              src="/assets/images/profile-picture.png"
              alt="Contact"
              className="w-80 rounded-full border-8 border-blue-400"
            />
          </div>
        </div>
      </Fade>
    </section>
  );
}
