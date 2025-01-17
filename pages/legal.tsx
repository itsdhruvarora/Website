// Website of jayantkageri, NextJS Site for jayantkageri.in
// Copyright (C) 2021 - 2022 Jayant Hegde Kageri <https://github.com/jayantkageri>

// This file is part of Website of jayantkageri.

// Website of jayantkageri is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Website of jayantkageri is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with Website of jayantkageri.  If not, see <https://www.gnu.org/licenses/>.

import React from "react";
import Heading from "../components/Heading";

export default function Legal() {
  return (
    <>
      <section id="legal" className="bg-gray-900 min-h-screen">
        <div className="container px-6 py-10 mx-auto">
          <Heading title={"Legal"} />
          <h4 className="text-lg italic text-gray-300 pt-2 select-none">
            The PDF Version of this page can be found{" "}
            <a
              className="text-blue-500"
              href="/legal.pdf"
              target={"_blank"}
              rel="noreferrer"
            >
              here.
            </a>
          </h4>
        </div>

        <div className="flex flex-col justify-start px-5 text-white">
          <p className="text-gray-300 italic">
            This document is an electronic record in terms of the Information
            Technology Act, 2000 (“IT ACT”) and rules thereunder and published
            under the provisions of Rule 3 (1) of the Information Technology
            (Intermediaries Guidelines) Rule 2011, which mandates for publishing
            of Privacy Policy and Terms and Conditions for access or usage of
            the resource provided herein. This electronic record is generated by
            a computer system and does not require any physical or digital
            signatures
          </p>

          <section id="terms-and-conditions">
            <h2 className="py-5 text-4xl font-semibold text-start">
              Terms and Conditions
            </h2>
            <ul className="list-decimal px-6 space-y-8 text-slate-100">
              <li>
                <h3 className="text-2xl font-medium">Services</h3>
                <ul className="list-disc px-10 space-y-2">
                  <li>
                    <p>
                      Right to Use. We grant you the right to access and use the
                      Services by this Agreement to design, develop to make them
                      available for your Service Provided by us, and you may not
                      use the Services for production/patent/commercial use.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg">Manner of Use, You may not:</h3>
                    <ul className="list-[lower-roman] pl-8 space-y-2 text-gray-200">
                      <li>
                        Reverse engineer, Decompile, Disassemble or work around
                        technical limitations in the Services, except to the
                        extent that applicable law permits it despite these
                        limitations;
                      </li>
                      <li>
                        Disable, tamper with or otherwise attempt to circumvent
                        any mechanism that limits your use of the Services;
                      </li>
                      <li>
                        Rent, Lease, Lend, Resell, Transfer, or Sublicense any
                        Services or portion thereof to or for third parties,
                        except as explicitly permitted herein or in license
                        terms that accompany any Services component;
                      </li>
                      <li>
                        Use the Services for any purpose that is unlawful or
                        prohibited by this Agreement;
                      </li>
                      <li>
                        Use the Services in any manner that could damage,
                        disable, overburden, or impair any of our services, or
                        the network(s) connected to any of our services, or
                        interfere with any other party’s use and enjoyment of
                        any Services.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      Updates. We may make changes to the Services from time to
                      time, including the availability of features; how long,
                      how much, or how often any given feature may be used; and
                      feature dependencies upon other services or software.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-2xl font-medium">Software</h3>
                <ul className="list-disc px-10 space-y-4">
                  <li>
                    <p>
                      a. Using Our Software outside the Service. We may provide
                      you with Our Software through or as a part of the
                      Developer Services. Termination of use of or access to the
                      Developer Services or the termination of this Agreement
                      terminates your right to possess or use any such Our
                      Software; and the suspension or termination of a User Plan
                      terminates that user’s right to possess or use any such
                      Our Software that was acquired through, is attached to, or
                      otherwise requires that User Plan. You must delete all
                      copies of such Software licensed under this Agreement and
                      destroy any associated media upon the termination of the
                      associated possession or usage rights. We may provide you
                      with Our Software for use outside the Developer Services
                      and with (1) the Developer Services or (2) programs you
                      develop using the Developer Services. If Our Software is
                      provided with its own license terms, those license terms
                      control provided that they are modified by the preceding
                      portion of this Section 2(a) in case of conflict. If the
                      Our Software does not have its own license terms, then you
                      may install and use any number of copies of the Our
                      Software to design and develop your applications. This
                      subsection does not apply to Our Software addressed in
                      subsection (b) below.
                    </p>
                  </li>
                  <li>
                    <p>
                      b. Software on Documentation Portal. Software accessible
                      on the Documentation Portal is made available by the
                      designated publisher under the associated license terms.
                      If Our Software is accessible on the Documentation Portal
                      without license terms, then subject to subsection (c)
                      below you may use it to design and develop your
                      applications. If any such Our Software without license
                      terms are marked as “sample” or “example,” then you may
                      use it under the terms of the GNU General Public License
                      3.0 or GNU Affero General Public License 3.0 only.
                    </p>
                  </li>
                  <li>
                    <p>
                      c. Scope of rights. All Our Software is copyrighted works.
                      All Our Software are licensed not sold and may not be
                      transferred unless specified otherwise in any license
                      terms provided with the Our Software. Rights to access Our
                      Software on any device and/or platform do not give you any
                      right to implement Our patents or other Our intellectual
                      property in software or devices that access that device.
                    </p>
                  </li>
                  <li>
                    <p>
                      d. Third-party software. You are solely responsible for
                      any third-party software/plugin/add-on that you install,
                      connect, or use with any Service. We will not run or make
                      any copies of such third-party software outside of our
                      relationship with you. You may only install or use any
                      third-party software with any Service in a way that does
                      not subject our intellectual property or technology to any
                      terms governing such software. We are not a party to and
                      are not bound by any terms governing your use of any
                      third-party software. We do not grant any licenses or
                      rights, express or implied, to such third-party software.
                    </p>
                  </li>
                  <li>
                    <p>
                      e. Open-source software as part of the Service. If the
                      Service uses or distributes any third-party software with
                      open-source software license terms (“Open Source”), then
                      such Open Source is licensed to you by Our solely to allow
                      you to interact with the Service under the terms of this
                      Agreement. Copies of those applicable Open-Source licenses
                      and any other notices, if any, are included for your
                      information only.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-2xl font-medium">Our Content</h3>
                <ul className="list-disc px-10 space-y-4">
                  <li>
                    <p>
                      All of Our Content is copyrighted work and is governed by
                      the terms of the license agreement that accompanies or is
                      included with Our Content. If Our Content is made
                      available to you on the Documentation Portal without a
                      license agreement, then you may make a reasonable number
                      of copies of Our Content for your internal use in
                      designing and developing your applications. You must
                      preserve the copyright notice in all copies of Our Content
                      and ensure that both the copyright notice and this
                      permission notice appear in those copies. Accredited
                      educational institutions, such as K-12 schools,
                      universities, and private or public colleges may download
                      and reproduce Our Content for distribution in the
                      classroom for educational purposes.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-2xl font-medium">
                  Disclaimer of Warranties
                </h3>
                <ul className="list-disc px-10 space-y-4">
                  <li>
                    <p>
                      EXCEPT AS WARRANTED IN A SEPARATE AGREEMENT, We AND OUR
                      ITS RESPECTIVE SUPPLIERS PROVIDE THE SERVICES (INCLUDING
                      THE CONTENT AND APIS) “AS IS,” “WITH ALL FAULTS” AND “AS
                      AVAILABLE.” YOU BEAR THE RISK OF USING IT. WE PROVIDE NO
                      WARRANTIES, GUARANTEES, OR CONDITIONS, WHETHER EXPRESS,
                      IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WARRANTIES OF
                      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                      NONINFRINGEMENT. YOU MAY HAVE ADDITIONAL RIGHTS UNDER YOUR
                      LOCAL LAWS WHICH THIS AGREEMENT CANNOT CHANGE. THESE
                      DISCLAIMERS WILL APPLY TO THE FULLEST EXTENT PERMITTED
                      UNDER APPLICABLE LAW, INCLUDING APPLICATION TO THE IMPLIED
                      WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                      PURPOSE, AND NON-INFRINGEMENT.
                    </p>
                  </li>
                  <li>
                    a. Third-party content and materials. WE DO NOT CONTROL,
                    REVIEW, REVISE, ENDORSE, OR ACCEPT RESPONSIBILITY FOR ANY
                    THIRD-PARTY CONTENT, INFORMATION, MESSAGES, MATERIALS,
                    PROJECTS ACCESSIBLE FROM OR LINKED THROUGH THE SERVICES,
                    AND, EXCEPT AS WARRANTED IN A SEPARATE AGREEMENT, MICROSOFT
                    MAKES NO REPRESENTATIONS OR WARRANTIES WHATSOEVER ABOUT AND
                    SHALL NOT BE RESPONSIBLE FOR ANY OF THE FOREGOING. ANY
                    DEALINGS YOU MAY HAVE WITH SUCH THIRD PARTIES ARE AT YOUR
                    OWN RISK.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-2xl font-medium">Updating</h3>
                <ul className="list-disc px-10 space-y-4">
                  <li>
                    <p>
                      We may change and/or update Terms and Conditions and/or
                      Privacy Policy from time to time. Continued use of Our
                      Software/Services means that you agree with the new Terms
                      and Conditions and/or Privacy Policy.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="privacy-policy" className="py-10">
            <h2 className="py-5 text-4xl font-semibold text-start">
              Privacy Policy
            </h2>
            <p className="italic -mt-3">
              This Privacy Policy describes how We collect, use, share, and
              protect the personal information that we collect from you, the
              end-user of the Our website, apps, and services.
            </p>

            <ul className="list-decimal px-8 py-3 space-y-4 text-slate-100">
              <li>
                We do not sell or rent anonymized personal information to
                third-party entities, we collect Some Public Information about
                you which is Specified in the Websites and/or the Services to
                analyze the Interest of users in the Website and/or the
                Services, and no other data is stored on Our servers and/or
                Databases.
              </li>

              <li>
                No personally identifiable data is collected, except where
                otherwise noted.
              </li>

              <li>
                The website and/or our Services use a small tracking code called
                “Analytics”. This information is used to inter-alia deliver our
                web pages and/or services to you upon request, tailor our
                services to the interests of our users, measure traffic within
                our services, improve the quality, functionality, and
                interactivity, and let us know the geographic locations from
                where our users or visitors come.
              </li>

              <li>
                The information provided by you may be shared with our other
                entities and affiliates to help in detecting and preventing
                identity theft, frauds, and other illegal activities to prevent
                misuse of our products and services and to provide you, our
                services.
              </li>

              <li>
                The privacy policy may be updated from time to time, and
                continued use of the resources provided by us means the
                agreement of this privacy policy.
              </li>

              <li>
                Information We Collect, We Collect Some of your Public
                Information like First Name, Last Name (if any), your User ID,
                User Name (if any), and your e-Mail Address (if the Service
                uses), and we are Solemnly Responsible for any Misuse or Illegal
                Actions which were Done with the Collecting the Information
                about you.
              </li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
