import React from "react";

export default function SurveyForm() {
  return (
    <>
      <div className="mx-auto my-8 max-w-2xl rounded-lg border bg-white px-8 py-6">
        <h2 className="mb-4 text-2xl font-medium">Survey</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg border border-gray-400 p-2 focus:border-blue-400 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="mb-2 block font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="w-full rounded-lg border border-gray-400 p-2 focus:border-blue-400 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="mb-2 block font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full rounded-lg border border-gray-400 p-2 focus:border-blue-400 focus:outline-none"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="mb-2 block font-medium text-gray-700">
              What is your favorite color?
            </label>
            <div className="-mx-2 flex flex-wrap">
              <div className="w-1/3 px-2">
                <label
                  htmlFor="color-red"
                  className="mb-2 block font-medium text-gray-700"
                >
                  <input
                    type="radio"
                    id="color-red"
                    name="color"
                    value="red"
                    className="mr-2"
                  />
                  Red
                </label>
              </div>
              <div className="w-1/3 px-2">
                <label
                  htmlFor="color-blue"
                  className="mb-2 block font-medium text-gray-700"
                >
                  <input
                    type="radio"
                    id="color-blue"
                    name="color"
                    value="blue"
                    className="mr-2"
                  />
                  Blue
                </label>
              </div>
              <div className="w-1/3 px-2">
                <label
                  htmlFor="color-green"
                  className="mb-2 block font-medium text-gray-700"
                >
                  <input
                    type="radio"
                    id="color-green"
                    name="color"
                    value="green"
                    className="mr-2"
                  />
                  Green
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="mb-2 block font-medium text-gray-700">
              What is your favorite animal?
            </label>
            <div className="-mx-2 flex flex-wrap">
              <div className="w-1/3 px-2">
                <label
                  htmlFor="animal-cat"
                  className="mb-2 block font-medium text-gray-700"
                >
                  <input
                    type="checkbox"
                    id="animal-cat"
                    name="animal[]"
                    value="cat"
                    className="mr-2"
                  />
                  Cat
                </label>
              </div>
              <div className="w-1/3 px-2">
                <label
                  htmlFor="animal-dog"
                  className="mb-2 block font-medium text-gray-700"
                >
                  <input
                    type="checkbox"
                    id="animal-dog"
                    name="animal[]"
                    value="dog"
                    className="mr-2"
                  />
                  Dog
                </label>
              </div>
              <div className="w-1/3 px-2">
                <label
                  htmlFor="animal-bird"
                  className="mb-2 block font-medium text-gray-700"
                >
                  <input
                    type="checkbox"
                    id="animal-bird"
                    name="animal[]"
                    value="bird"
                    className="mr-2"
                  />
                  Bird
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded-lg border border-gray-400 p-2 focus:border-blue-400 focus:outline-none"
              rows={5}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
