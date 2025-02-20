import React from "react";

function AboutDetails() {
  return (
    <div className=" flex flex-col gap-10 pt-15">
      <div className=" flex flex-col gap-3">
        <h2 className="text-3xl font-normal tracking-wider">
          I'm a <span className="text-purple-400">Junior Web Developer</span>.|
        </h2>
        <p className="text-l">
          I've recently completed the{" "}
          <span>
            <a href="https://goit.global/ph/" className="text-orange-600">
              GoIT bootcamp
            </a>
          </span>
          .
        </p>
      </div>
      <div>
        <p className="max-w-200 text-l">
          A recent Fullstack Developer GoIT bootcamp graduate, eager to start my
          journey in the industry. I strive to create meaningful and
          user-friendly digital products that balance user needs with business
          goals.
        </p>
      </div>
    </div>
  );
}

export default AboutDetails;
