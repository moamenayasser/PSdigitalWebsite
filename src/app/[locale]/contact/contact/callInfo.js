"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactInfoWidget({ withIcon, title }) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <span className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
        Alexandria
      </span>
      <motion.ul
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="cs-menu_widget cs-style1 cs-mp0"
      >
        <li className="flex mb-5 gap-3 mt-5">
          {withIcon ? (
            <span className="cs-accent_color">
              <svg
                width="30"
                height="30"
                x="0"
                y="0"
                viewBox="0 0 473.806 473.806"
                className="dark:fill-[#001d35]  fill-white"
              >
                <g>
                  <path
                    d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zM256.056 112.706c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zM473.256 209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"
                    data-original="#000000"
                    opacity="1"
                  ></path>
                </g>
              </svg>
            </span>
          ) : (
            ""
          )}
          +2034870696
        </li>
        <li className="flex mb-5 gap-3">
          {withIcon ? (
            <span className="cs-accent_color">
              <svg
                width="30"
                height="30"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                className="dark:fill-[#001d35]  fill-white"
              >
                <g>
                  <path
                    fill-rule="evenodd"
                    d="M462.88 337.781c0 43.236-35.17 78.351-78.351 78.351H127.472c-43.181 0-78.352-35.116-78.352-78.351V174.219a77.802 77.802 0 0 1 10.809-39.615l125.428 125.428c18.765 18.82 43.894 29.19 70.67 29.19 26.721 0 51.85-10.37 70.615-29.19L452.07 134.604a77.79 77.79 0 0 1 10.809 39.615v163.562zM384.528 95.868H127.472c-17.832 0-34.293 6.035-47.461 16.076l126.69 126.745c13.114 13.058 30.616 20.301 49.326 20.301 18.655 0 36.158-7.243 49.271-20.301l126.69-126.745c-13.167-10.041-29.627-16.076-47.46-16.076zm0-30.232H127.472c-59.861 0-108.584 48.723-108.584 108.584v163.562c0 59.916 48.723 108.584 108.584 108.584h257.056c59.861 0 108.584-48.668 108.584-108.584V174.219c0-59.861-48.723-108.583-108.584-108.583z"
                    clip-rule="evenodd"
                    data-original="#000000"
                    opacity="1"
                  ></path>
                </g>
              </svg>
            </span>
          ) : (
            ""
          )}
          Info@Psdigital.Me
        </li>
        <li className="flex mb-5 gap-3">
          {withIcon ? (
            <span className="cs-accent_color">
              <svg
                width="30"
                height="30"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                className="dark:fill-[#001d35]  fill-white"
              >
                <g>
                  <path
                    d="M256 310.227a95.8 95.8 0 1 0-95.8-95.8 95.907 95.907 0 0 0 95.8 95.8zm0-167.6a71.8 71.8 0 1 1-71.8 71.8 71.88 71.88 0 0 1 71.8-71.798zm-23.734 357.7a29.966 29.966 0 0 0 47.468 0l120.4-156.211c33.648-43.658 52.908-95.143 54.23-144.97 1.435-54.073-17.67-102.517-55.249-140.1a202.951 202.951 0 0 0-286.228 0c-37.58 37.583-56.687 86.027-55.25 140.1 1.322 49.827 20.581 101.312 54.23 144.971zM129.857 76.02a178.6 178.6 0 0 1 252.286 0c64.613 64.613 64.194 168.833-1.019 253.446l-120.4 156.21a5.967 5.967 0 0 1-9.452 0l-120.4-156.21c-65.209-84.613-65.628-188.833-1.015-253.446z"
                    data-original="#000000"
                    opacity="1"
                  ></path>
                </g>
              </svg>
            </span>
          ) : (
            ""
          )}
          15 Saad Zaghloul Square, 4th Floor, El-Raml Station.
        </li>
        <li className="flex mb-5 gap-3">
          <Link href="/" className="cs-text_btn flex gap-4 ">
            <span className="text-[#fa9f1c] !flex">
              Get Direction{" "}
              <svg
                width="30"
                height="30"
                x="0"
                y="0"
                viewBox="0 0 512.009 512.009"
                className="pt-1"
              >
                <g>
                  <path
                    d="M508.625 247.801 392.262 131.437c-4.18-4.881-11.526-5.45-16.407-1.269-4.881 4.18-5.45 11.526-1.269 16.407.39.455.814.88 1.269 1.269l96.465 96.582H11.636C5.21 244.426 0 249.636 0 256.063s5.21 11.636 11.636 11.636H472.32l-96.465 96.465c-4.881 4.18-5.45 11.526-1.269 16.407s11.526 5.45 16.407 1.269c.455-.39.88-.814 1.269-1.269l116.364-116.364c4.511-4.537 4.511-11.867-.001-16.406z"
                    fill="#fa9f1c"
                    data-original="#000000"
                    opacity="1"
                  ></path>
                </g>
              </svg>
            </span>
          </Link>
        </li>
      </motion.ul>
      <span className="text-xl font-semibold tracking-wide text-[#fa9f1c] block !mb-5">
        Dubai
      </span>
      <motion.ul
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="cs-menu_widget cs-style1 cs-mp0"
      >
        {/* <li className="flex mb-5 gap-3 mt-5">
          {withIcon ? (
            <span className="cs-accent_color">
              <svg
                width="30"
                height="30"
                x="0"
                y="0"
                viewBox="0 0 473.806 473.806"
                 className="dark:fill-[#001d35]  fill-white"
              >
                <g>
                  <path
                    d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zM256.056 112.706c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zM473.256 209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"
                    data-original="#000000"
                    opacity="1"
                  ></path>
                </g>
              </svg>
            </span>
          ) : (
            ""
          )}
          +44 454 7800 112
        </li> */}
        <li className="flex mb-5 gap-3">
          {withIcon ? (
            <span className="cs-accent_color">
              <svg
                width="30"
                height="30"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                className="dark:fill-[#001d35]  fill-white"
              >
                <g>
                  <path
                    fill-rule="evenodd"
                    d="M462.88 337.781c0 43.236-35.17 78.351-78.351 78.351H127.472c-43.181 0-78.352-35.116-78.352-78.351V174.219a77.802 77.802 0 0 1 10.809-39.615l125.428 125.428c18.765 18.82 43.894 29.19 70.67 29.19 26.721 0 51.85-10.37 70.615-29.19L452.07 134.604a77.79 77.79 0 0 1 10.809 39.615v163.562zM384.528 95.868H127.472c-17.832 0-34.293 6.035-47.461 16.076l126.69 126.745c13.114 13.058 30.616 20.301 49.326 20.301 18.655 0 36.158-7.243 49.271-20.301l126.69-126.745c-13.167-10.041-29.627-16.076-47.46-16.076zm0-30.232H127.472c-59.861 0-108.584 48.723-108.584 108.584v163.562c0 59.916 48.723 108.584 108.584 108.584h257.056c59.861 0 108.584-48.668 108.584-108.584V174.219c0-59.861-48.723-108.583-108.584-108.583z"
                    clip-rule="evenodd"
                    data-original="#000000"
                    opacity="1"
                  ></path>
                </g>
              </svg>
            </span>
          ) : (
            ""
          )}
          Info@Psdigital.Me
        </li>
        <li className="flex mb-5 gap-3">
          {withIcon ? (
            <span className="cs-accent_color">
              <svg
                width="30"
                height="30"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                className="dark:fill-[#001d35]  fill-white"
              >
                <g>
                  <path
                    d="M256 310.227a95.8 95.8 0 1 0-95.8-95.8 95.907 95.907 0 0 0 95.8 95.8zm0-167.6a71.8 71.8 0 1 1-71.8 71.8 71.88 71.88 0 0 1 71.8-71.798zm-23.734 357.7a29.966 29.966 0 0 0 47.468 0l120.4-156.211c33.648-43.658 52.908-95.143 54.23-144.97 1.435-54.073-17.67-102.517-55.249-140.1a202.951 202.951 0 0 0-286.228 0c-37.58 37.583-56.687 86.027-55.25 140.1 1.322 49.827 20.581 101.312 54.23 144.971zM129.857 76.02a178.6 178.6 0 0 1 252.286 0c64.613 64.613 64.194 168.833-1.019 253.446l-120.4 156.21a5.967 5.967 0 0 1-9.452 0l-120.4-156.21c-65.209-84.613-65.628-188.833-1.015-253.446z"
                    data-original="#000000"
                    opacity="1"
                  ></path>
                </g>
              </svg>
            </span>
          ) : (
            ""
          )}
          Dubai Design District, Building 3, Dubai, UAE
        </li>
        <li className="flex mb-5 gap-3">
          <Link href="/" className="cs-text_btn flex gap-4 ">
            <span className="text-[#fa9f1c] !flex">
              Get Direction{" "}
              <svg
                width="30"
                height="30"
                x="0"
                y="0"
                viewBox="0 0 512.009 512.009"
                className="pt-1"
              >
                <g>
                  <path
                    d="M508.625 247.801 392.262 131.437c-4.18-4.881-11.526-5.45-16.407-1.269-4.881 4.18-5.45 11.526-1.269 16.407.39.455.814.88 1.269 1.269l96.465 96.582H11.636C5.21 244.426 0 249.636 0 256.063s5.21 11.636 11.636 11.636H472.32l-96.465 96.465c-4.881 4.18-5.45 11.526-1.269 16.407s11.526 5.45 16.407 1.269c.455-.39.88-.814 1.269-1.269l116.364-116.364c4.511-4.537 4.511-11.867-.001-16.406z"
                    fill="#fa9f1c"
                    data-original="#000000"
                    opacity="1"
                  ></path>
                </g>
              </svg>
            </span>
          </Link>
        </li>
      </motion.ul>
    </>
  );
}