import React from "react";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const init = async () => {
      try {
        await document.fonts.ready;
      } catch (error) {
        console.log("Error occurred -", error);
      }
    };
    init();

    const titleSplit = SplitText.create("#contact h2", {
      type: "words",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inout",
    });

    timeline
      .from(titleSplit.words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        yPercent: 100,
        opacity: 0,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: -50,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: -50,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p className="md:w-lg">
            1st floor, Barons Club, Main Gate, opposite Jogger's Park, Pluto
            Society, Kalyani Nagar, Pune, Maharashtra 411006, India
          </p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map(({ day, time }) => (
            <p key={day}>{`${day} : ${time}`}</p>
          ))}
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>
            <a href="tel:+919325875685">(+91) 9325875685</a>
          </p>
          <p>
            <a href="mailto:marketing@cobblerandcrew.com?subject=Inquiry&body=Hi%20cobbler%20and%20crew,">
              marketing@cobblerandcrew.com
            </a>
          </p>
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <img src={icon} className="size-6 md:size-8" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-4 flex-col md:flex-row items-center w-3/4 pt-4">
          <div>
            <a
              href="https://cobblerandcrew.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cobbler & Crew"
              className="hover:text-yellow"
            >
              © {new Date().getFullYear()} Cobbler & Crew | Cocktails &
              Mocktails
            </a>
          </div>
          <div>
            <a
              href="https://ranjeettechsolutions.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Developed by RanjeetTechSolutions™"
              className="hover:text-yellow"
            >
              Developed by RanjeetTechSolutions™.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
