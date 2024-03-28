import { FOOTER_LINKS } from '../utils/constants'

function Footer() {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to shop:{' '}
            <span className="text-blue underline">Find an Apple Store</span>
            {' or '}
            <span className="text-blue underline">other retailer</span> near
            you.
          </p>

          <p className="text-xs font-semibold text-gray">
            Or call 000800-040-1966.
          </p>
        </div>

        <div className="my-5 h-px w-full bg-neutral-700" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">
            Copyright © 2024 Apple Inc. All rights reserved.
          </p>

          <div className="flex">
            {FOOTER_LINKS.map((link, index) => {
              const lastLink = FOOTER_LINKS.length - 1

              return (
                <p key={link} className="text-xs font-semibold text-gray">
                  {link}
                  {index !== lastLink && <span className="mx-2"> | </span>}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
