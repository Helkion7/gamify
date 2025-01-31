import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="mt-28 bg-slate-50 dark:bg-black">
        <div class="container mx-auto flex flex-col items-start space-y-12 px-8 pb-8 pt-12 md:flex-row md:space-y-0 md:space-x-12 md:px-12">
          <div class="flex w-full flex-col space-y-4 text-center md:w-2/5 md:text-left">
            <div class="w-full text-lg font-extrabold md:w-fit md:text-left">
              <span class="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Gamify
              </span>
            </div>
            <p class="text-sm text-slate-600">
              A game site, which differantiate itself from the competitors
            </p>
          </div>
          <div class="w-full text-center text-slate-600 md:w-1/5 md:text-left">
            <div class="text-sm font-semibold">Company</div>
            <ul class="text-sm">
              <li class="pt-3">
                <a
                  class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  About
                </a>
              </li>
              <li class="pt-3">
                <a
                  class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Terms of Service
                </a>
              </li>
              <li class="pt-3">
                <a
                  class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
              <li class="pt-3">
                <a
                  class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div class="w-full text-center text-slate-600 md:w-1/5 md:text-left">
            <div class="text-sm font-semibold">Solutions</div>
            <ul class="text-sm">
              <li class="pt-3">
                <a
                  class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Business Line of Credit
                </a>
              </li>
              <li class="pt-3">
                <a
                  class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  SBA Loan
                </a>
              </li>
              <li class="pt-3">
                <a
                  class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Revenue Based Financing
                </a>
              </li>
              <li class="pt-3">
                <a
                  class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Invoice Factoring
                </a>
              </li>
            </ul>
          </div>
          <div class="w-full text-center text-slate-600 md:w-1/5 md:text-left">
            <div class="text-sm font-semibold text-slate-600">Partnership</div>
            <ul class="text-sm">
              <li class="pt-3">
                <a
                  class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Loan Partner
                </a>
              </li>
              <li class="pt-3">
                <a
                  class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Affiliate
                </a>
              </li>
              <li class="pt-3">
                <a
                  class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Brand Guideline
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="container mx-auto border-t border-slate-200 p-8 text-center text-sm text-slate-600 dark:border-slate-900 md:flex-row md:px-12">
          © 2023 UniqueFund. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
