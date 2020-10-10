# InvestmentPortfolio
Please check out this [template spreadsheet](https://docs.google.com/spreadsheets/d/1w3R4SSCoHAxi5tc2f4QI8hnFmzJQpaBJSzW_MJ-WYmI/edit?usp=sharing)
and feel free to make a copy of the file by going to `File` then `Make a Copy` 

Now, let's build your own investment portfolio dashboard on googlesheet !! 

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Detail](#detail)
* [Usage](#usage)
* [Instruction](#instruction)
* [Troubleshooting](#troubleshooting)
* [FAQ](#FAQ)
* [Disclaimer](#disclaimer) 
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

![](figures/overview_screenshot.png)

We build a google sheet which can automatically track all owned assets; stocks(HKEX, NASDAQ, SET, etc.), cryptocurrencies, mutual funds etc. to provide insight into historical dynamic wealth position and real-time dashboard for better financial decision making

<!-- DETAIL -->
## Technical Detail

1. we use GooglefinanceAPI to fetch data of stocks in HKEX, NASDAQ & Cryptocurrencies
2. we use Web scraping to fetch data of stocks in SET & Mutual funds
3. `PortfolioTrending` script is for recording portfolio position (you may need to set this script to run daily at project's trigger)
4. `AutoRefresh` script is for making sure that every data have already download before record (sometimes data we scrape from website take time to download)
5. `CryptoFinance` script is (right now) only for fetching 24 hrs pct change of cryptocurrencies 

<!-- USAGE EXAMPLES -->
## Usage

from the [template spreadsheet](https://docs.google.com/spreadsheets/d/1w3R4SSCoHAxi5tc2f4QI8hnFmzJQpaBJSzW_MJ-WYmI/edit?usp=sharing), we provide an example of portfolio that include stocks(HKEX, NASDAQ, SET), cryptocurrencies, mutual funds.

### How to start

1.
2.
3.
4.
5.



<!-- Troubleshooting -->
## Troubleshooting
if you find any **bug**, please report them at the [open issues](https://github.com/sunncyn/InvestmentPortfolio/issues).
### FAQ

1. Can not scape data from SET - error show that `couldn't fetch the data` : try change from `https` to `http` and vice versa

<!-- Disclaimer -->
## Disclamer
All information provided on this spreadsheet is for informational purposes only and does not constitute professional financial advice. There can be errors with this tool and the sources it pulls from. The creator does not take responsibility for those errors and is not obligated to correct them.

<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - chayanont1997@hotmail.com

Project Link: [https://github.com/sunncyn/InvestmentPortfolio](https://github.com/sunncyn/InvestmentPortfolio)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* []()
* []()
* []()





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.png
