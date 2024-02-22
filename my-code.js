let userName = '';
let age = 0;
let colorEyes = '';

const howLucky = (userName, age, colorEyes) => {
    let weekOutcomes18Plus = [' do not fret, this week is going to be normal', " you should play the lottery, you're luck is out of this world", ' might want to call in sick this week, your luck does not look too good homie'];
    let weekOutcomes18PlusBlue = [' before starting the week, wear some sun-glasses. You are scaring the kids with your eyes', ' your crush has been looking at you quite a lot, why not ask them out this week?', " don't worry, this week is going to be like just like last week..which could be good or bad."];
    let goToSchool = [" shouldn't you be in school?", ' no like for real, you got homework to do or something, let the adults use me', ' I recommend putting on a fragrance for tomorrow, your crush is going to ask you out!'];
  
    if (!userName) {
      return 'please make sure you entered all the data needed.';
    } else if (!colorEyes) {
      return 'please make sure you entered all the data needed.'
    } else if (!age) {
      return 'please make sure you entered all the data needed.'
    };
  
    if (userName && age > 18 && colorEyes !== 'blue') {
      return userName + weekOutcomes18Plus[Math.floor(Math.random() * 3)];
    } else if (userName && age > 18 && colorEyes === 'blue') {
      return userName + weekOutcomes18PlusBlue[Math.floor(Math.random() * 3)];
    } else if (userName && age <= 18) {
      return userName + goToSchool[Math.floor(Math.random() * 3)];
    };
  };

  const pressButton = () => {
    console.log(howLucky(userName, age, colorEyes));
  }

  pressButton();
