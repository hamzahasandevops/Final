import React, { useState } from "react";
import "../Styles/Questions.css";

export default function Questions({ title }) {
  return (
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Is {title} Drop safe to take with other medicines ?
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            {title} are fast, safe and effective. There are no side effects and
            no known reactions with other drugs. In addition they are non-habit
            forming and have no contraindications.
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How long do I need to use {title} before I see improvement of my
              conditions ?
            </button>
          </h5>
        </div>

        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            It depends on the severity, duration of the symptoms and also how
            your body is responding to the medicine. Maximum use it for 8 weeks
            and you should see the positive effect.
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              After my symptoms have passed, should I continue to take the
              medicine ?
            </button>
          </h5>
        </div>

        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            It is wise to continue a lighter dose after the symptoms have
            passed. Generally, the longer you had the problem, the longer you
            should take this product after symptoms have passed. This will help
            assure a more complete recovery. This continued dosage can vary from
            2 times a day to 2 times a week for a week to perhaps several months
            depending on the length and severity of the problem.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              I have never taken homeopathic medicine before. Would it be safe
              to take {title} ?
            </button>
          </h5>
        </div>

        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            Homeopathic medicines are 100% natural and are absolutely safe to
            consume. These does not have any side effect.
          </div>
        </div>
      </div>
    </div>
  );
}
