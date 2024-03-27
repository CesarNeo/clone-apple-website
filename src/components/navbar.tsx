import { Children } from 'react'

import { NAV_LISTS } from '../utils/constants'

function Navbar() {
  return (
    <header className="flex w-full items-center justify-between px-5 py-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <img
          src="/assets/images/apple.svg"
          alt="Apple logo"
          width={14}
          height={18}
          className="h-[1.125rem] w-3.5"
        />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {Children.toArray(
            NAV_LISTS.map((item) => (
              <div className="px-5">
                <span className="text-sm text-gray transition-colors hover:text-white">
                  {item}
                </span>
              </div>
            )),
          )}
        </div>

        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img
            src="/assets/images/search.svg"
            alt="Search"
            width={18}
            height={18}
            className="size-[1.125rem]"
          />
          <img
            src="/assets/images/bag.svg"
            alt="Bag"
            width={18}
            height={18}
            className="size-[1.125rem]"
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
