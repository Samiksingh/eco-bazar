import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  envolopeIcon,
  appleIcon,
  googleplayIcon,
  applePayIcon,
  visaIcon,
  discoverIcon,
  securepaymentIcon,
  mastercardIcon,
} from "../../assets/footerImages";
import Facebook from "../brandlogo/facebook";
import Instagram from "../brandlogo/instagram";
import Twitter from "../brandlogo/twitter";
import Pinterest from "../brandlogo/pinterest";
import { logo } from "../../assets/images";

const Footer = () => {
  return (
    <>
      <section>
        <div className="bg-black  flex px-16 py-20 items-center justify-between">
          <div className="flex items-center">
            <Image src={envolopeIcon} alt="mail" className="mr-2" />
            <span>
              <p className="text-white text-body-xxl font-medium">
                Subcribe to our Newsletter!
              </p>
              <p className="text-gray-600 text-body-small font-regular">
                Pellentesque eu nibh eget mauris congue mattis matti.
              </p>
            </span>
          </div>

          <div className="flex relative mr-6">
            <input
              type="email"
              placeholder="Your email address"
              className=" rounded-3xl bg-grey-800 text-grey-400 h-[3.25rem] w-[28.75rem] px-6 "
            />
            <button className="bg-success text-white text-body-medium font-semibold py-3 px-6 rounded-3xl h-[3.25rem] absolute right-0">
              Subscribe
            </button>
          </div>
          <div className="flex">
            <Facebook />
            <Instagram />
            <Twitter />
            <Pinterest />
          </div>
        </div>
      </section>
      <section className=" p-[3.75rem] grid grid-cols-3 bg-grey-50">
        <div className="mr-14">
          <Image src={logo} alt="Logo" />
          <p className="my-4">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>

          <div className="flex">
            <p className="hover:border-b-2 border-success">
              <a href="tel: +(219) 555-0114">+(219) 555-0114</a>
            </p>
            <span className="mx-4">or</span>
            <p className="hover:border-b-2 border-success">
              <a href="mailto:Proxy@gmail.com">Proxy@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-grey-900 text-body-medium font-medium">
              My Account
            </p>
            <ul className="text-grey-600">
              <li className="text-body-small font-medium mt-4">
                <Link href="/signIn">My Account</Link>
              </li>
              <li className="text-body-small font-medium mt-4">
                <Link href="/">Order History</Link>
              </li>
              <li className="text-body-small font-medium mt-4">
                <Link href="/">Shopping Cart</Link>
              </li>
              <li className="text-body-small font-medium mt-4">
                <Link href="/">Wishlist</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-grey-900 text-body-medium font-medium">Helps</p>
            <ul className="text-grey-600">
              <li className="text-body-small font-medium mt-4">
                <Link href="/">Contact</Link>
              </li>
              <li className="text-body-small font-medium mt-4">
                <Link href="/">FAQs</Link>
              </li>
              <li className="text-body-small font-medium mt-4">
                <Link href="/">Terms & Condition</Link>
              </li>
              <li className="text-body-small font-medium mt-4">
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-grey-900 text-body-medium font-medium">Proxy</p>
            <ul className="text-grey-600">
              <li className="text-body-small font-medium mt-4">
                <Link href="/about-us">About</Link>
              </li>
              <li className="text-body-small font-medium mt-4">
                <Link href="/">Shop</Link>
              </li>
              <li className="text-body-small font-medium mt-4">
                <Link href="/">Product</Link>
              </li>
              <li className="text-body-small font-medium mt-4">
                <Link href="/">Track Order</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="ml-14">
          <h3 className="mb-4">Download Mobile App</h3>
          <div className="flex">
            <div className="flex bg-white mr-2 items-center p-2">
              <Image src={appleIcon} alt="App Store" className=" h-7 w-7" />
              <p className="text-body-tiny font-normal text-grey-700">
                Download on the <br />
                <span className="text-body-medium text-grey-900 font-medium">
                  App Store
                </span>
              </p>
            </div>
            <div className="flex bg-white mr-2 items-center p-2">
              <Image src={googleplayIcon} alt="Google Play" />
              <p className="text-body-tiny font-normal text-grey-700">
                Download on the <br />
                <span className="text-body-medium text-grey-900 font-medium">
                  Google Play
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center mt-3 mb-3">
          <p className="text-grey-500 text-body-small font-normal">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>
          <div className="flex justify-end">
            <Image src={applePayIcon} alt="applepay" className="mr-1" />
            <Image src={visaIcon} alt="visa" className="mr-1" />
            <Image src={discoverIcon} alt="discover" className="mr-1" />
            <Image
              src={securepaymentIcon}
              alt="securepayment"
              className="mr-1"
            />
            <Image src={mastercardIcon} alt="mastercard" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
