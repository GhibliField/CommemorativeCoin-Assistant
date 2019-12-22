



# CommemorativeCoin-Assistant
![](https://img.shields.io/badge/language-javascript-international.svg?style=plastic)

### Description

CommemorativeCoin-Assistant is a repository of some assistants helping subscribe commemorative coins through :bank:banks' websites. Those scripts can help speed up the subscribing process, especially can automatically fill up some necessary information, including name, phone number, and ID card number.


### Files 


├── BankofChina.js: script for **Bank of China** (AKA: BOC)  
├── ChinaConstructionBank.js: script for **China Construction Bank** (AKA: CCB)  
└── README.md: specialization  



### Environment

- **Google Chrome** or **Firefox**
- :speak_no_evil:　**TamperMonkey** (for running on CCB's website)

### HOW-TO

#### CCB

1. Edit `ChinaConstructionBank.js`, replace example info to subscribers' information and modify the exchange date.  
2. Create a script in TamperMonkey and paste the edited copy to it.  
3. Browse the CCB's subscription website and the script will run .  
4. You can click the name on the right and his/her credential number and mobile number will be inserted to the corresponding widgets automatically.  

#### BOC

1. Edit `BankofChina.js`, replace example info to subscribers' information, and then arrange all the codes in one line only.  
2. Open Chrome or Firefox, create a bookmark(page) on the bookmarks bar, place the one-lined script to `URL`(Chrome) or `Location`(Firefox) and save.  
3. Browse the BOC's subscription website and click the bookmark button on the bookmarks bar. And ...  
4. You can click the name on the right and his/her credential number and mobile number will be inserted to the corresponding widgets automatically.

**Attention: According to the risk control rules, you'd better not to use ONE phone number for subscriptions more than 5 times.**
**See [here](https://kn0wh0.github.io/2019/12/21/%E7%BA%AA%E5%BF%B5%E5%B8%81%E9%A2%84%E7%BA%A6%E8%BE%85%E5%8A%A9%E8%84%9A%E6%9C%AC/) for more operation detail and effect.**

### Contribution
- If you like this repo, :sparkling_heart:　please star:star2: it.
- If you have any problem, you may create an issue, and I'll check it out ASAP.
- If you'd love to create another script for other banks, or the xpath of those widgets changed, you're welcome to:
  - 1. fork the repository
  - 2. create Feat_xxx branch
  - 3.  commit your code
  - 4.  create Pull Request





