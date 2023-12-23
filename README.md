# xbogus

A Node.js package for generating an X-bogus parameter required for TikTok requests.

## Installation

```bash
npm install xbogus
```

## Usage

```javascript
const xbogus = require('xbogus');

const url = "https://www.tiktok.com/api/user/detail/?aid=..."; // The TikTok URL
const userAgent = 'Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.1'; // User-Agent header

const xbogus_parameter = xbogus(url, userAgent);

console.log(xbogus_parameter);
```

## Example

```javascript
const xbogus = require('xbogus');

const url = "https://www.tiktok.com/api/challenge/item_list/?WebIdLastTime=1696678658&aid=1988&app_language=en&app_name=tiktok_web&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=MacIntel&browser_version=5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_7%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&challengeID=6134815&channel=tiktok_web&cookie_enabled=true&count=30&coverFormat=2&cursor=0&device_id=7287179289455281670&device_platform=web_pc&focus_state=true&from_page=hashtag&history_len=2&is_fullscreen=false&is_page_visible=true&language=en&os=mac&priority_region=&referer=&region=EG&screen_height=900&screen_width=1440&tz_name=Africa%2FCairo&webcast_language=en&msToken=gfuGvwLLf9LVyiTYx2N8IjiaSgmdd81OstDAD8Pg_fZW7tg_5BN0-KRT5ToBDIRchGYkuyE97LfgP2BGhwgST4bM8hTf4U9TolbkopB3NTw4tDuL89GLiSiI20vubJjvEoWhyI4="; // The TikTok URL
const userAgent = 'Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.1'; // User-Agent header

const tiktok_xbogus = xbogus(url, userAgent);

console.log(tiktok_xbogus);
```
 