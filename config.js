// The details that appear in more than one place on the site.
// Change them here and they change everywhere (the footer year, the hours
// table and the "open now" line on the home page all read from this).
var ZINC = {
  name: 'Zinc Restaurant',
  phone: '028 2766 2341',
  phoneLink: '+442827662341',
  address: {
    line1: 'Unit 3, 1 Rodeing Foot',
    line2: 'Ballymoney, BT53 6JJ',
    full: 'Unit 3, 1 Rodeing Foot, Ballymoney, BT53 6JJ'
  },
  facebook: 'https://www.facebook.com/zincrestaurantballymoney/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Zinc+Restaurant+1+Rodeing+Foot+Ballymoney+BT53+6JJ',

  // [CONFIRM WITH THE RESTAURANT] Google currently shows a 4:30pm weekday
  // opening, which does not match the schedule we were given. These are the
  // hours from the brief. index: 0 = Sunday, to match Date.getDay().
  hours: [
    { day: 'Sunday',    open: '12:00pm', close: '9:00pm',  note: 'Sunday lunch from 12pm' },
    { day: 'Monday',    open: '5:00pm',  close: '9:00pm',  note: '' },
    { day: 'Tuesday',   open: '5:00pm',  close: '9:00pm',  note: 'Teatime menu' },
    { day: 'Wednesday', open: '5:00pm',  close: '9:00pm',  note: 'Teatime menu' },
    { day: 'Thursday',  open: '5:00pm',  close: '9:00pm',  note: 'Teatime menu' },
    { day: 'Friday',    open: '12:00pm', close: '10:00pm', note: 'Lunch from 12pm' },
    { day: 'Saturday',  open: '12:00pm', close: '10:00pm', note: 'Lunch from 12pm' }
  ]
};
