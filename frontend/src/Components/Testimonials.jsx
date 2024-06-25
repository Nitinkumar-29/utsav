import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="pb-20 flex justify-center items-center bg-gradient-to-bl from-blue-100 to-red-100 h-fit">
        <div className="mt-28 flex flex-col items-center justify-center">
          <span
            className="mb-10 font-semibold text-5xl underline underline-offset-[4.5px] decoration-red-600"
            style={{ fontFamily: "sans-serif" }}
          >
            Testimonials
          </span>

          <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-8 w-[80%]">
            <div className="flex flex-col border-[1px] rounded-md border-black shadow-xl shadow-red-200 p-4 space-y-5 justify-start">
              <p
                className="font-medium text-lg "
                style={{ fontFamily: "sans-serif" }}
              >
                "Utsav made our wedding day absolutely magical! Their attention
                to detail and unwavering support throughout the planning process
                exceeded our expectations. Our dream wedding became a reality,
                thanks to their expertise."
              </p>
              <span className="font-semibold text-lg">
                Samantha T. - Wedding Client
              </span>
            </div>

            <div className="flex flex-col border-[1px] rounded-md border-black shadow-xl shadow-red-200 p-4 space-y-5 justify-start">
              <p
                className="font-medium text-lg "
                style={{ fontFamily: "sans-serif" }}
              >
                "Working with Utsav for our company's annual conference was a
                game-changer. Their flexibility, creativity, and flawless
                execution truly stood out. We received rave reviews from
                attendees, and it wouldn't have been possible without Utsav!"
              </p>
              <span className="font-semibold text-lg">
                John M. - Corporate Event Organizer
              </span>
            </div>

            <div className="flex flex-col border-[1px] rounded-md border-black shadow-xl shadow-red-200 p-4 space-y-5 justify-start">
              <p
                className="font-medium text-lg "
                style={{ fontFamily: "sans-serif" }}
              >
                "I hired Utsav for my daughter's sweet sixteen party, and they
                delivered beyond imagination. Their commitment to creating a
                unique experience was evident in every detail. It was a day
                we'll cherish forever."
              </p>
              <span className="font-semibold text-lg">
                Priya R. - Private Celebration
              </span>
            </div>

            <div className="flex flex-col border-[1px] rounded-md border-black shadow-xl shadow-red-200 p-4 space-y-5 justify-start">
              <p
                className="font-medium text-lg "
                style={{ fontFamily: "sans-serif" }}
              >
                "As a vendor partnering with Utsav, I've seen firsthand their
                professionalism and dedication to excellence. They consistently
                go above and beyond to ensure that events run smoothly. It's a
                pleasure working with them."
              </p>
              <span className="font-semibold text-lg">
                Michael S. - Event Vendor
              </span>
            </div>

            <div className="flex flex-col border-[1px] rounded-md border-black shadow-xl shadow-red-200 p-4 space-y-5 justify-start">
              <p
                className="font-medium text-lg "
                style={{ fontFamily: "sans-serif" }}
              >
                "Utsav orchestrated our dream destination wedding flawlessly.
                Their team's expertise in handling the logistics of a remote
                location was remarkable. They turned our vision into a reality,
                and our guests were left in awe."
              </p>
              <span className="font-semibold text-lg">
                Robert L. - Destination Wedding
              </span>
            </div>

            <div className="flex flex-col border-[1px] rounded-md border-black shadow-xl shadow-red-200 p-4 space-y-5 justify-start">
              <p
                className="font-medium text-lg "
                style={{ fontFamily: "sans-serif" }}
              >
                "I reached out to Utsav in a panic for a last-minute event, and
                they came to the rescue! Their availability, quick
                decision-making, and ability to pull off an incredible event on
                short notice were nothing short of amazing. I can't thank them
                enough."
              </p>
              <span className="font-semibold text-lg">
                Linda G. - Last-Minute Event
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
