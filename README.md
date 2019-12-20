



# CommemorativeCoin-Assistant


### Description

Some Assistants helping commemorative coins subscription through banks' websites.


### Files 


├── BankofChina.js: script for **Bank of China** (AKA: BOC)  
├── ChinaConstructionBank.js: script for **China Construction Bank** (AKA: CCB)  
└── README.md: specialization  



### Environment

- **Google Chrome** or **Firefox**
- **TamperMonkey** (for running on CCB's website)

### HOW-TO

#### CCB

1. Edit `ChinaConstructionBank.js`, replace people info to subscribers' info, and modify the exchange date.  
2. Create a script in TamperMonkey and paste the edited copy to it.  
3. Browse the CCB's subscription website and the script will run and ...     
4. You can click the name on the right and his/her credential number and mobile number will be insert to corresponding widget automatically.  

#### BOC

1. Edit `BankofChina.js`, replace people info to subscribers' info, and then arrange all the codes in one line only.  
2. Open Chrome or Firefox, create a bookmark(page) on the bookmarks bar, place the one-lined script to `URL`(Chrome) or `Location`(Firefox) and save.  
3. Browse the BOC's subscription website and click the bookmark button on the bookmarks bar and ...  
4. You can click the name on the right and his/her credential number and mobile number will be insert to corresponding widget automatically.

**See [here]() for more operation detail and effect.**

### Contribution
- If you like this repo, please star it.
- If you have any problem, you may create an issue, and I'll check it out ASAP.
- If you'd love to create another script for other banks, or the xpath of those widgets changed, you're welcome to:
  - 1. fork the repository
  - 2. create Feat_xxx branch
  - 3.  commit your code
  - 4.  create Pull Request





