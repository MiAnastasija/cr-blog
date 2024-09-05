import Image from "next/image";
import TradingViewWidget from "./components/TradingViewWidget";
import Smalcard from "./components/Smalcard";
import { Navbar } from "./components/Navbar";
import Paketi from "./components/Paketi";
import phoneimg from "@/public/phoneimg.png";
import NewsBreakLogo from "@/public/NewsBreakLogo.png";
import DigitalJournal from "@/public/DigitalJournal.png";
import katman from "@/public/katman.png";
import ContactForm from "@/app/components/ContactForm";
import trustpilotlogo from "@/app/images/trustpilot-logo.png";
import CustomerCard from "./components/CustomerCard";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Post } from "@/app/utilitis/interface";
import CompareAccountsButton from "./components/CompareAccountsButton";
import slikakartica from "@/public/slikakartica.png";
import strelica from "@/public/strelica.png";
import Getintouch from "@/public/Getintouch.png";
import { PostComponent } from "./components/PostComponent";
import { Paket } from "@/app/utilitis/interface";

async function getPosts() {
  const query = `*[_type == 'post'] {
  title,
    excerpt
}`;
  const data = await client.fetch(query);
  return data;
}

async function getPaketi() {
  const query = `*[_type == 'paketi'] {
  title,
    description,
    listItems
 
}`;
  const datap = await client.fetch(query);
  return datap;
}

export const revalidate = 3600;

export default async function Home() {
  const posts: Post[] = await getPosts();
  const customers = posts.map((post) => ({
    name: post.title,

    comment: post.excerpt,
  }));
  const paketi: Paket[] = await getPaketi();

  return (
    <div className=" mx-auto ">
      <Navbar />

      <div className="pozadina  ">
        <div className="pt-10 sm:pt-14 z-10">
          <TradingViewWidget />
        </div>
        <div className=" max-w-sirina mx-auto ">
          <div className=" mx-auto flex flex-col lg:flex-row ">
            <div className=" max-w-screen-xl mx-auto flex flex-col justify-between px-4 lg:px-20 h-full ">
              <h1 className="pt-20 pb-10 text-center text-4xl text-white font-bold md:text-5xl lg:mt-10  lg:text-left lg:w-[500px] xl:w-[700px]  lg:pb-5  ">
                Empower Your Trading Journey with CapitalRevo
              </h1>
              <p className="text-white text-center  text-sm lg:mt-2 lg:mb- lg:text-left ">
                Start trading with as little as $200 and leverage our expert
                tools and resources.
              </p>
              <div className="flex flex-col justify-center  items-center md:flex md:justify-center md:items-center lg:flex lg:flex-row lg:justify-start  lg:items-start lg:gap-4 pb-10 pt-10 ">
                <Link
                  className="flex justify-center items-center px-4 py-3 gap-2  w-48 h-12 bg-transparent rounded-md shadow-xs text-white border border-white border-1"
                  href="https://platform.capitalrevo.com/login"
                >
                  Get Started Now
                </Link>
                <div className="flex justify-center items-center mt-4 sm:mt-2 lg:-mt-2">
                  <Image
                    src={trustpilotlogo}
                    alt="slika"
                    className="max-h-screen object-contain"
                  />
                </div>
              </div>
            </div>
            <div className=" flex justify-center lg:justify-end xl:mr-20 xl:mt-10">
              <Image src={phoneimg} alt="slika" className="object-contain " />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-start gap-4 lg:gap-20 pb-20 mt-8 lg:mt-0 lg:pl-20 xl:pl-32 md:pl-28">
            <p className="text-white flex justify-center lg:justify-start">
              As featured in
            </p>
            <div className="flex  justify-center lg:justify-start gap-10 lg:gap-20 ">
              <Image
                src={NewsBreakLogo}
                alt="slika"
                className=" w-[75px] h-[autopx] lg:w-[200px] lg:h-[31px]"
              />
              <Image
                src={DigitalJournal}
                alt="slika"
                className=" w-[75px] h-[autopx] lg:w-[200px] lg:h-[27px]"
              />
              <Image
                src={katman}
                alt="slika"
                className=" w-[75px] h-[autopx] lg:w-[117px] lg:h-[43px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className=" pl-10 lg:pl-0 pt-10 lg:flex lg:justify-evenly"
        id="AboutUs"
      >
        <div className="max-w-sirina md:flex">
          <div className="my-10">
            <h1 className="text-3xl p-4 font-bold ">About Us</h1>
            <p className="p-4  lg:w-[400px] ">
              With over 15 years in the industry, CapitalRevo is dedicated to
              providing traders with the best-in-class tools and support.
            </p>

            <p className="p-4">
              Our mission is to enable access to world-class trading <br />
              opportunities for everyone.
            </p>
          </div>
          <div className="my-10">
            <Smalcard
              imageSrc1="/oblacici.png"
              title="Our Mission"
              text="To empower traders with cutting-edge tools, unparalleled support,and
            the knowledge to succeed in the competitive world of online trading."
            />
            <div className="mt-2">
              <Smalcard
                imageSrc1="/gromicon.png"
                title="Our History"
                text="CapitalRevo has been at the forefront of the trading industry for over 
              15 years,helping thousands of traders achieve their financial goals."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="crafy " id="Accounts">
        <div className=" mx-auto flex items-center justify-center ">
          <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
            <h1 className="text-4xl py-4 text-white font-bold mb-6 mt-0 lg:mt-6 text-center lg:text-4xl ">
              Choose the Right Account for You
            </h1>
            <p className=" mb-4 text-center text-sm  text-white">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-between items-center ">
        <div className=" lg:flex  lg:gap-10 lg:justify-center lg:-mt-20 lg:p-0 ">
          <div className="-mt-36 lg:mt-0 ">
            <Paketi
              title={paketi[0]?.title}
              imageSrc="\Dot.png"
              description={paketi[0]?.description}
              listItems={paketi[0]?.listItems}
            />
          </div>
          <Paketi
            title={paketi[4]?.title}
            imageSrc="\Dot.png"
            description={paketi[4]?.description}
            listItems={paketi[4]?.listItems}
          />
          <Paketi
            title={paketi[1]?.title}
            imageSrc="\Dot.png"
            description={paketi[1]?.description}
            listItems={paketi[1]?.listItems}
          />
        </div>
        <div className="  lg:flex lg:justify-center lg:gap-5 lg:m-10 lg:p-0">
          <Paketi
            title={paketi[2]?.title}
            imageSrc="\Dot.png"
            description={paketi[2]?.description}
            listItems={paketi[2]?.listItems}
          />
          <Paketi
            title={paketi[3]?.title}
            imageSrc="\Dot.png"
            description={paketi[3]?.description}
            listItems={paketi[3]?.listItems}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mb-20">
        <div className=" flex justify-center items-center">
          <CompareAccountsButton>Compare Accounts</CompareAccountsButton>
        </div>
      </div>
      <div className=" pt-10 " id="TradingPlatform">
        <div className=" lg:flex lg:justify-evenly lg:text-left">
          <div className=" md:pl-10">
            <h2 className=" text-center text-4xl  font-bold p-4 md:text-left">
              Innovative Trading Platform
            </h2>
            <p className=" text-sm  p-4 tetx-center text-gray-700">
              Experience the power of integrated trading tools with real-time
              data, customizable <br /> charts, and mobile trading.
            </p>
          </div>
        </div>

        <div className="mx-5 mt-20 lg:flex lg:justify-evenly ">
          <div className="max-w-sirina md:flex">
            <div className=" md:pl-0 md:pr-40">
              <div className="  p-10 lg:p-0 lg:border-l-[4px] lg: border-gray-300">
                <div className="flex text-sm gap-2 md:flex md:flex-col md:gap-0">
                  <div className=" -ml-1 border-l-4 border-gray-300 hover:border-blue-500">
                    <p className="mx-2 my-4 mb-10 text-xs md:text-lg">
                      Real-time data
                    </p>
                  </div>
                  <div className="-ml-1 border-l-4 border-gray-300 hover:border-blue-500">
                    <p className="mx-2 my-4 mb-10 text-xs md:text-lg ">
                      Customizable charts
                    </p>
                  </div>
                </div>
                <div className="flex text-sm gap-2 mt-4  md:flex md:flex-col md:gap-0 md:mt-0">
                  <div className="-ml-1 border-l-4  border-gray-300 hover:border-blue-500">
                    <p className="mx-2 my-4 mb-10 text-xs md:text-lg">
                      Mobile trading
                    </p>
                  </div>
                  <div className="-ml-1 border-l-4 border-gray-300 hover:border-blue-500">
                    <p className="mx-2 my-4 mb-10 text-xs md:text-lg">
                      Secure transactions
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-10 flex justify-center items-center lg:p-0 lg:py-10">
                <Link href="https://platform.capitalrevo.com/login">
                  <button className=" px-4 py-3 gap-2 w-48 h-14 bg-[#1200FF] rounded-xl shadow-xs text-white">
                    Explore the Platform
                  </button>
                </Link>
              </div>
            </div>
            <div className="">
              <Image
                src="/monitor.png"
                alt="trade"
                width={600}
                height={600}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div
          className=" pt-10 mx-auto flex items-center justify-center "
          id="Education"
        >
          <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
            <h1 className="text-2xl py-4 text-black font-bold mb-6 mt-6 text-center lg:text-4xl ">
              Learn to Trade with Confidence
            </h1>
            <p className=" mb-4 text-center text-sm text-gray-700">
              Access webinars, eBooks, market analysis, and trading strategies
              to enhance your <br /> trading knowledge and skills.
            </p>
          </div>
        </div>
      </div>
      <div className="m-10  lg:flex lg:justify-evenly lg:items-center">
        <div className="max-w-sirina flex flex-col gap-10  sm:flex sm:flex-row">
          <span className="flex flex-col items-center text-center ">
            <Image src="/oblacic.png" alt="webinars8" width={48} height={48} />
            <p className="text-center font-bold px-6 ">Webinars</p>
          </span>
          <span className="flex flex-col items-center text-center">
            <Image src="/gormic.png" alt="webinars9" width={48} height={48} />
            <p className="text-center font-bold px-6">eBooks</p>
          </span>
          <span className="flex flex-col items-center text-center">
            <Image src="/gormic.png" alt="webinars10" width={48} height={48} />
            <p className="text-center font-bold px-6">Market Analysis</p>
          </span>
          <span className="flex flex-col items-center text-center">
            <Image
              src="/strategy.png"
              alt="webinars11"
              width={48}
              height={48}
            />
            <p className="text-center font-bold px-6 ">Trading Strategies</p>
          </span>
        </div>
      </div>

      <div
        className="pt-10 pl-4 mx-auto mt-20 md:pl-20 lg:flex lg:justify-between lg:pl-28  lg:items-center max-w-sirina"
        id="News"
      >
        <div className=" ">
          <h1 className="text-2xl py-4 text-black font-bold mb-6 mt-6  lg:text-4xl  ">
            Stay Informed
          </h1>
          <p className=" mb-4  text-sm ">
            Keep up with the latest market news and updates, integrated directly
            into the platform <br /> for real-time insights.
          </p>
        </div>
        <Link href="#whatourclientssay">
          <button className="flex justify-center items-center px-4 py-3 gap-2 w-48 h-12 bg-[#1200FF] rounded-xl shadow-xs text-white lg:mr-20">
            Read More News
          </button>
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center mt-20 mb-10 lg:flex lg:flex-row lg:justify-center lg:items-center lg:pl-10 xl:gap-10">
        <div className="w-[335px] h-[440px] lg:w-[398px] lg:h-[440px] rounded-xl overflow-hidden ">
          <div className="bg-cover bg-center rounded-t-xl ">
            <Image
              src={slikakartica}
              alt="webinars1234"
              className=" w-[335px] h-[200px] lg:w-[300px] lg:h-[200px] xl:w-[398px] xl:h-[240px]"
            />
          </div>
          <p className="text-sm py-4 text-blue-800 font-bold">Product</p>
          <div className="flex justify-between w-[335px] lg:w-[300px]  xl:w-[398px]  ">
            <h1 className="text-2xl font-bold">Product review</h1>
            <Image
              src={strelica}
              alt="webinars347"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <p className="text-sm text-gray-700 pt-2 pb-5 w-[335px] lg:w-[300px]  xl:w-[398px] ">
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and managing them.
          </p>
          <Image
            src="/Avatar label group.png"
            alt="webinars987"
            width={120}
            height={44}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="w-[335px] h-[440px] lg:w-[398px] lg:h-[440px] rounded-xl overflow-hidden ">
          <div className="bg-cover bg-center rounded-t-xl ">
            <Image
              src={slikakartica}
              alt="webinars122"
              className=" w-[335px] h-[200px] lg:w-[300px] lg:h-[200px] xl:w-[398px] xl:h-[240px]"
            />
          </div>
          <p className="text-sm py-4 text-blue-800 font-bold">Product</p>
          <div className="flex justify-between w-[335px] lg:w-[300px]  xl:w-[398px]  ">
            <h1 className="text-2xl font-bold">Product review</h1>
            <Image
              src={strelica}
              alt="webinars2233"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <p className="text-sm text-gray-700 pt-2 pb-5 w-[335px] lg:w-[300px]  xl:w-[398px] ">
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and managing them.
          </p>
          <Image
            src="/Avatar label group.png"
            alt="webinars1235"
            width={120}
            height={44}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="w-[335px] h-[440px] lg:w-[398px] lg:h-[440px] rounded-xl overflow-hidden ">
          <div className="bg-cover bg-center rounded-t-xl ">
            <Image
              src={slikakartica}
              alt="webinars3235"
              className=" w-[335px] h-[200px] lg:w-[300px] lg:h-[200px] xl:w-[398px] xl:h-[240px]"
            />
          </div>
          <p className="text-sm py-4 text-blue-800 font-bold">Product</p>
          <div className="flex justify-between w-[335px] lg:w-[300px]  xl:w-[398px]  ">
            <h1 className="text-2xl font-bold">Product review</h1>
            <Image
              src={strelica}
              alt="webinars32325"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <p className="text-sm text-gray-700 pt-2 pb-5 w-[335px] lg:w-[300px]  xl:w-[398px] ">
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and managing them.
          </p>
          <Image
            src="/Avatar label group.png"
            alt="webinars3431"
            width={120}
            height={44}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div
        className="mx-auto flex flex-col justify-center items-center mt-20 max-w-sirina lg:px-20 lg:flex lg:flex-row lg:justify-between"
        id="whatourclientssay"
      >
        <div className=" ">
          <h1 className=" text-3xl py-4 text-black font-bold mb-6 mt-6  lg:text-4xl lg:pl-5 ">
            What Our Clients Say
          </h1>
        </div>
        <div className="flex-col justify-center items-center ">
          <h2 className=" text-xl lg:p-0 lg:text-3xl ">
            CapitalRevo transformed my <br /> trading experience! The platform
            is <br /> intuitive and the support is <br /> excellent.
          </h2>
          <div className=" mb-10 lg:p-0 mt-10 text-sm  ">
            <CustomerCard customers={customers} />
          </div>
        </div>
      </div>
      <div className="sivkasta ">
        <div className="pt-10 max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
          <h1 className="text-2xl py-4 text-black font-bold pb-6 pt-6 text-center lg:text-4xl ">
            Calculate Your Potential Earnings
          </h1>
        </div>
        <div className="lg:flex lg:justify-center ">
          <div className=" flex flex-col justify-center items-center  ">
            <p className=" p-10 mb-5">
              Use our trading calculator to see <br />
              your potential profits based on your <br /> trading activities.
            </p>
            <Link href="#ContactUs">
              <button className="flex justify-center items-center px-4 py-3 gap-2 w-48 h-12 bg-[#1200FF] rounded-xl shadow-xs text-white">
                Try It Now
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center ">
            <Image
              src="/iphone13mini.png"
              alt="webinars"
              width={425}
              height={425}
              className=" object-contain "
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F4] hidden sm:hidden md:block lg:flex lg:justify-center lg:items-center">
        <Image
          src={Getintouch}
          alt="webinars1"
          width={1440}
          height={400}
          className=" object-contain "
        />
      </div>
      <div className="bg-[#F4F4F4] flex justify-center items-center md:hidden lg:hidden">
        <Image
          src="/Getintouchmob.png"
          alt="webinars"
          width={380}
          height={672}
          className=" object-contain "
        />
      </div>

      <div className="sivkasta flex-col justify-center ">
        <h1 className="text-2xl   py-4 text-black font-bold pb-20 pt-20 text-center lg:text-4xl ">
          Secure Payment Options
        </h1>
      </div>
      <div className="sivkasta">
        <div className="flex justify-center items-center pb-20">
          <div className="w-full max-w-[1440px] flex justify-between items-center space-x-8 sm:mx-auto sm:px-20 px-10 lg:px-52">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <Image
                src="/visa.png"
                alt="visa"
                fill
                sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <Image
                src="/master2.png"
                alt="master2"
                fill
                sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <Image
                src="/master.png"
                alt="master"
                fill
                sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <Image
                src="/apay.png"
                alt="applepay"
                fill
                sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-20">
              <Image
                src="/gpay.png"
                alt="gpay"
                fill
                sizes="(max-width: 768px) 10vw, (min-width: 1024px) 16px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 mb-20" id="ContactUs">
        <h2 className="text-2xl py-4 text-black font-bold mb-0 mt-20 text-center lg:text-4xl">
          Get in Touch
        </h2>
        <div className="flex justify-center">
          <div className="max-w-sirina">
            <div className="text-center mt-10 mb-10 lg:flex lg:justify-evenly lg:items-center lg:gap-10 ">
              <div className="flex flex-col items-center text-center">
                <Image src="/coverta.png" alt="mail" width={43} height={43} />
                <h3 className="font-bold pb-2 pt-5">Email</h3>
                <p>Our friendly team is here to help.</p>
                <p className="text-dugmeplava pt-2">
                  <br />
                  hi@untitledui.com
                  <br />
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/location.png"
                  alt="location"
                  width={43}
                  height={43}
                />
                <h3 className="font-bold pb-2 pt-5">Office</h3>
                <p>Come say hello at our office HQ.</p>
                <p className="text-dugmeplava pt-2">
                  100 Smith Street <br />
                  Collingwood VIC 3066 AU
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/phonecall.png"
                  alt="phone"
                  width={43}
                  height={43}
                />
                <h3 className="font-bold pb-2 pt-5">Phone</h3>
                <p>Mon-Fri from 8am to 5pm.</p>
                <p className="text-dugmeplava pt-2">
                  <br />
                  +1 (555) 000-0000
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden">
        {posts?.length > 0 &&
          posts?.map((post, index) => (
            <PostComponent key={index} post={post} />
          ))}
      </div>

      <div className="mt-10 mb-10">
        <ContactForm />
      </div>
    </div>
  );
}
