let boxxy = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
].join(';');
 let rainbow =  'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)';

 let termsty = 'color: green; background: #222; font-size: 24px;';
 let warnsty = 'color: white; background: red; font-size: 24px;';
 let corpsty = 'color: navy; font-size: 24px; font-family: serif;';
let snoopy = '\n ,-~~-.___.\n/ |  \'     \\\n(  )        0\n\_/-, ,----\'\n   ====           \/\/\n  /  \\-\'~;    \/~~~(O)\n /  __/~|   /       |\n=(  _____| (_________|\'\n';


var applicant = {
    firstName: "Andrew",
    lastName : "Pilcher",
    id       : 42,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
    console.log('%cProfile: %c Developer / Engineer ', termsty, warnsty);

    console.info(`%c ${applicant.fullName()} `, corpsty);

    console.log(`${snoopy} to view my resume, visit \n https://my.indeed.com/p/andrewp-ay3fiwq`);
