/* eslint-disable react/no-unescaped-entities */
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const Banner = ({ image, title }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[52vh] -mt-10"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg ">
          {title}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-6 drop-shadow-lg font-poppins">
          n'hesitez pas de nous contacter
        </p>
        <button className="font-poppins border-2 p-4 border-slate-500 hover:bg-slate-500 hover:text-white transition duration-300 ">
          <a href="tel:+21672214152">Appelez le + (216) 72 21 41 52</a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
