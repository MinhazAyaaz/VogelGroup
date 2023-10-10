import Image from "next/image";
import "./cardScrolling.css";

export default function cardScrolling() {
  return (
    <main className="h-screen w-screen bg-gray-800">
      <div className='flex flex-col justify-center items-center h-screen w-screen'>
          <img src='https://uploads-ssl.webflow.com/6502dbffcea42974129efb64/650d6bde120a1c387366140e_a7414d285ae5a0391592b46a85a77f1c-p-500.png' alt='vogel'/>
          <p className='w-[50%] text-center pt-10 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem et tortor consequat id porta nibh venenatis. Orci phasellus egestas tellus rutrum. Nisl condimentum id venenatis a. Diam sollicitudin tempor id eu nisl nunc. Pretium fusce id velit ut tortor pretium. Euismod nisi porta lorem mollis aliquam. Aliquet risus feugiat in ante. Tempor orci dapibus ultrices in iaculis. Ridiculus mus mauris vitae ultricies leo integer. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Aliquet lectus proin nibh nisl condimentum id venenatis a.</p>
      </div>
      <div className="px-[200px] m-auto text-center">
        <ul id="cards">
          <li className="card" id="card_1">
            <div className="card__content">
              <div>
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <a href="#top" className="btn btn--accent">
                    Read More
                  </a>
                </p>
              </div>
              <figure>
                <Image
                  src="https://scroll-driven-animations.style/demos/stacking-cards/shared/img-1.jpg"
                  width={1000}
                  height={1000}
                  alt="image"
                />
              </figure>
            </div>
          </li>
          <li className="card" id="card_2">
            <div className="card__content">
              <div>
                <h2>Card Two</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <a href="#top" className="btn btn--accent">
                    Read More
                  </a>
                </p>
              </div>
              <figure>
                <Image
                  src="https://scroll-driven-animations.style/demos/stacking-cards/shared/img-1.jpg"
                  width={1000}
                  height={1000}
                  alt="image"
                />
              </figure>
            </div>
          </li>
          <li className="card" id="card_3">
            <div className="card__content">
              <div>
                <h2>Card Three</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <a href="#top" className="btn btn--accent">
                    Read More
                  </a>
                </p>
              </div>
              <figure>
                <Image
                  src="https://scroll-driven-animations.style/demos/stacking-cards/shared/img-1.jpg"
                  width={1000}
                  height={1000}
                  alt="image"
                />
              </figure>
            </div>
          </li>
          <li className="card" id="card_4">
            <div className="card__content">
              <div>
                <h2>Card Four</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <a href="#top" className="btn btn--accent">
                    Read More
                  </a>
                </p>
              </div>
              <figure>
                <Image
                  src="https://scroll-driven-animations.style/demos/stacking-cards/shared/img-1.jpg"
                  width={1000}
                  height={1000}
                  alt="image"
                />
              </figure>
            </div>
          </li>
        </ul>
      </div>
      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
            <Image src='https://uploads-ssl.webflow.com/6502dbffcea42974129efb64/650d6bde120a1c387366140e_a7414d285ae5a0391592b46a85a77f1c-p-500.png' width={150} height={150} alt='Vogel Logo'/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vogel Group</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Vogel Group™</a>. All Rights Reserved.</span>
    </div>
    </footer>
    </main>
  );
}
