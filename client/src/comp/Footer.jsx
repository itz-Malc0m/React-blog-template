import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";


export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-600">
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                    <Link to='/' className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                        <span>M4lc0m</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 ">
                   <div>
                   <Footer.Title title="About" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                            M4lc0m
                        </Footer.Link>
                        <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                            About
                        </Footer.Link>
                        <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                            Contact Us
                        </Footer.Link>
                    </Footer.LinkGroup>
                   </div>
                   <div>
                   <Footer.Title title="Projects" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                            M4lc0m web
                        </Footer.Link>
                        <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                            Farm Web
                        </Footer.Link>
                        <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                            Content Web
                        </Footer.Link>
                    </Footer.LinkGroup>
                   </div>
                </div>
            </div>
            <Footer.Divider />
            <div className="inline"> 
                <Footer.Copyright by="m4lcom's blog" href="#" year={new Date().getFullYear()} />
            </div>
        </div>
    </Footer>
  )
}
