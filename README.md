<!-- Website of jayantkageri, NextJS Site for jayantkageri.in
Copyright (C) 2021 - 2022 Jayant Hegde Kageri <https://github.com/jayantkageri>

This file is part of Website of jayantkageri.

Website of jayantkageri is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Website of jayantkageri is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with Website of jayantkageri.  If not, see <https://www.gnu.org/licenses/>. -->

# [Jayant Hegde Kageri](https://jayantkageri.in)

_This repository contains the Source Code of the Website [jayantkageri.in](https://jayantkageri.in)_

## Environment Variables

To run this website, you will need to add the following environment variables to your .env file or your environment variables

* `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` **optional** - hCaptcha Site Key

* `HCAPTCHA_SECRET` **optional** - hCaptcha Secret for verifying the response

* `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` **optional** - Google Analytics Tracking ID

* Enviorment variables for notifing contact request from [Telegram Bot](https://telegram.me/BotFather):
  * `BOT_TOKEN` **required** - Telegram Bot token obtained in [@BotFather](https://telegram.me/BotFather)
  * `CHAT_ID` **required** - Telegram Chat ID to send the contact requests

* Environemt variables for notifing contact request from e-Mail:
  * `EMAIL_SMTP` **required** - SMTP Server to send the e-Mail
  * `EMAIL_ID` **required** - Email ID which from which the contact requests will be notified
  * `EMAIL_PASSWORD` **required** - Password for the above Email ID
  * `EMAIL_SEND_TO` **required** - Email ID to send the contact requests
  * `EMAIL_SECURE` **optional** - Whether to use TLS or not (defaults to false)

## Tech Stack

**Client:** NextJS, TailwindCSS, React Toastify

**Server:** NextJS, request-ip, nodemailer

## Copyright

* Copyright (C) 2021-2022 Jayant Hegde Kageri

* Licensed under the terms and conditions of [GNU Affero General Public License v3 or later (AGPL-3.0-or-later)](https://www.gnu.org/licenses/agpl-3.0.en.html)

[![GNU AGPL-3.0-or-later](https://www.gnu.org/graphics/agplv3-with-text-162x68.png)](https://www.gnu.org/licenses/agpl-3.0.en.html)
