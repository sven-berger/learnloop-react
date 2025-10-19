import Section from "../components/section";
import { useState } from "react";

export default function Zahlenvergleich() {
  function compare() {

  }
  function ZahlenvergleichForm() {
    return (
      <div>
        <form className="mx-auto" onChange={compare}>
          <div className="mb-5">
            <label className="block mb-2 dark:text-white">
              Zahl #1
              <input
                type="number"
                id="number1"
                className="bg-gray-50 mt-4 border border-gray-200 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5"
              />
            </label>
          </div>

          <div className="mb-5">
            <label className="block mb-2 dark:text-white">
              Zahl #2
              <input
                type="number"
                id="number2"
                className="bg-gray-50 mt-4 border border-gray-200 rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5"
              />
            </label>
          </div>
        </form>
      </div>
    );
  }

  return (
    <Section sectionTitle="Zahlenvergleich">
      <ZahlenvergleichForm />
    </Section>
  );
}
