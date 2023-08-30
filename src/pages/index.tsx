import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "../components/Icon"
import Button from "../components/Button"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="p-5 md:py-12 md:px-9 max-w-6xl w-full mx-auto">
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <Button className="md:hidden" icon="icon-back-chevron">
          Back to supervisor map
        </Button>
        <div className="w-full flex justify-center md:w-auto">
          <StaticImage src="../images/joel.png" alt="Joel's Image" width={247} height={329} className="w-[200px] h-[266px] md:w-[247px] md:h-[329px]" />
        </div>
        <div className="flex flex-col gap-4">
          <Button className="hidden md:flex" icon="icon-back-chevron">
            Back to supervisor map
          </Button>
          <div className="grid justify-items-center md:grid-cols-2 gap-1 md:gap-4 md:justify-items-stretch">
            <p className="text-xss md:text-xs text-green/4 font-bold uppercase md:order-3 md:text-right">
              <span className="tracking-wider">Endorsed <span className="md:hidden">By Growsf</span></span>
              <Icon name="icon-accent" width={15} height={15} className="inline -ml-2 -mt-3" />
            </p>
            <h1 className="text-blue/5 font-bold text-2xl md:font-black md:text-5xl md:order-1 md:col-span-2">Joel Engardio</h1>
            <p className="text-grey/5 font-bold text-xss md:text-xs uppercase tracking-wider md:order-2">District 4 Supervisor</p>
          </div>
          <hr className="border-grey/2" />
          <div className="flex flex-row gap-4">
            <div>
              <StaticImage src="../images/map.png" alt="Map Image" width={150} height={134} className="rounded-sm w-[75px] h-[67px] md:w-[150px] md:h-[134px]" />
            </div>
            <p className="text-grey/4 text-xs md:text-sm">District 4 includes the Sunset, the Outer Sunset, Parkside, part of Merced Manor south of Sloat and West of 19th, and includes the Great Highway and Sunset Boulevard.</p>
          </div>
          <hr className="border-grey/2" />
          <div className="w-full flex">
            <div className="w-1/2 space-y-1">
              <h2 className="uppercase text-grey/5 text-xss md:text-xs font-bold tracking-wider">Took Office</h2>
              <p className="text-grey/4 text-xs md:text-sm font-light">
                November 2016.<br />
                Won by <span className="font-bold">3,732 votes</span>
              </p>
            </div>
            <div className="w-1/2 space-y-1">
              <h2 className="uppercase text-grey/5 text-xss md:text-xs font-bold tracking-wider">Up For Re-Election</h2>
              <p className="text-grey/4 text-xs md:text-sm font-light">
                N/A - termed out
              </p>
            </div>
          </div>
          <hr className="border-grey/2" />
          <div className="w-full flex flex-col items-center gap-3 md:items-start">
            <a href="mailto:engardiostaff@sfgov.org" className="flex items-center font-bold text-xs md:text-sm text-blue/4 gap-2">
              <Icon name="icon-mail" width={16} height={12} />
              <span>engardiostaff@sfgov.org</span>
            </a>
            <a href="tel:+4155547460" className="flex items-center font-bold text-xs md:text-sm text-blue/4 gap-2">
              <Icon name="icon-phone" width={16} height={12} />
              <span>(415) 554-7460</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
