// EVERY MENU LIVES HERE. Edit this one file to change what the menus page shows.
//
// Each menu is: { id, name, when, note, sections: [ { title, note, items } ] }
// and each item is { name, desc, price }. Leave `price` out and no price is shown,
// which is what we are doing until the restaurant sends the priced à la carte.
//
// Where a line is marked [CONFIRM] below, it came from a Facebook poster that was
// cropped or from the written brief rather than from a priced menu. Check it with
// the restaurant before this goes live.

var MENUS = [
  {
    id: 'teatime',
    name: 'Teatime Menu',
    when: 'Tuesday, Wednesday & Thursday',
    note: 'Two courses for the price of one at £19.95. Served Tuesday, Wednesday and Thursday evenings only. ' +
          'The 8oz rump steak carries a £3 supplement.',
    sections: [
      {
        title: 'Starters',
        items: [
          { name: 'Nacho’s', desc: 'Hot cheese cream, chilli, sour cream' },
          { name: 'Breaded Mushrooms', desc: 'Smoked bacon and cream cheese filling, garlic mayo' },
          { name: 'Bang Bang Chicken Spring Rolls', desc: 'Garlic mayo, peanut sauce' },
          { name: '6" Garlic Bread', desc: 'Garlic mayo' }
        ]
      },
      {
        title: 'Mains',
        note: 'Most mains come with your choice of side.',
        items: [
          { name: '8oz Rump Steak', desc: 'Tobacco onions, choice of sauce and side order', price: '+£3' },
          { name: 'Smashed Burger', desc: 'Double smashed patties, bacon, cheese, onion ring and choice of side' },
          { name: 'Pepper Chicken', desc: 'Tobacco onions, pepper sauce and choice of side' },
          { name: 'Marry Me Chicken Pasta', desc: 'Roast chicken, tomato and basil cream, tobacco onions (no side order)' },
          { name: 'Breaded Chicken Goujons', desc: 'Spicy slaw, garlic mayo and choice of side' },
          { name: 'Chilli Chicken Pitta', desc: 'Spicy slaw, garlic mayo and choice of side' },
          { name: '12" Pepperoni Pizza', desc: 'Garlic mayo (no side order)' }
        ]
      }
    ]
  },

  {
    id: 'weekend',
    name: 'Weekend Specials',
    when: 'Friday to Sunday',
    note: 'The specials board changes every week, so this is a taste of it rather than a fixed menu. ' +
          'Ask your server for what the kitchen is running this weekend.',
    sections: [
      {
        title: 'On the board',
        note: 'From a recent weekend specials menu.',
        items: [
          { name: 'Crab & Cauliflower Croquettes', desc: 'White crab, caramelised cauliflower, ginger and lime beurre blanc' },
          { name: 'Roasted Scallops', desc: 'Café de Paris butter, crispy prosciutto' },
          { name: 'Pan Fried Halibut', desc: 'Pancetta and caper cream, roast butternut squash, preserved lemon gel, plus a choice of side' }
        ]
      },
      {
        // [CONFIRM] These come from the written brief, not from a current menu.
        title: 'Also seen on the board',
        note: 'Dishes the kitchen rotates through. Not always on.',
        items: [
          { name: 'Roast Monkfish' },
          { name: 'Chilli & Crab Linguine' },
          { name: 'King Scallops', desc: 'Black pudding crumb, truffle pea purée' },
          { name: 'Beef Brisket Birria Tacos' }
        ]
      }
    ]
  },

  {
    id: 'sunday',
    name: 'Sunday Lunch',
    when: 'Every Sunday from 12pm',
    // [CONFIRM] Sunday lunch prices and the full choice of roasts.
    note: 'Served from noon every Sunday and it gets busy, so book ahead. ' +
          'Prices and the full choice of roasts are still to be confirmed.',
    sections: [
      {
        title: 'The roast',
        items: [
          { name: 'Roast Beef', desc: 'With one of the oversized Yorkshire puddings people come here for' },
          { name: 'Roast Chicken', desc: 'With stuffing and all the trimmings' }
        ]
      },
      {
        title: 'With every roast',
        items: [
          { name: 'Yorkshire pudding', desc: 'Full size, and then some' },
          { name: 'Stuffing and traditional trimmings' },
          { name: 'Roast and seasonal vegetables' },
          { name: 'Plenty of gravy' }
        ]
      }
    ]
  },

  {
    id: 'everyday',
    name: 'All Week',
    when: 'Whenever the kitchen is open',
    // [CONFIRM] We do not have the priced à la carte yet. This section describes
    // what is on it; swap in the real menu and prices when they arrive.
    note: 'The full à la carte is in the restaurant. Here is what is on it — ' +
          'call us on 028 2766 2341 if you want to check something before you come in.',
    sections: [
      {
        title: 'From the kitchen',
        items: [
          { name: 'Stonebaked Pizzas' },
          { name: 'Pasta', desc: 'Including the Marry Me chicken pasta' },
          { name: 'Chicken Dishes', desc: 'Pepper chicken, goujons, chilli chicken pitta' },
          { name: 'Steaks', desc: 'Off the grill, with tobacco onions and a choice of sauce' },
          { name: 'Burgers', desc: 'Including the double smashed burger' },
          { name: 'Fish & Chips' },
          { name: 'Caesar Salad' }
        ]
      },
      {
        title: 'Good to know',
        items: [
          { name: 'Gluten free, dairy free and vegetarian', desc: 'Dedicated options, and the staff know the allergen list' },
          { name: 'Kids’ menu', desc: 'Plus high chairs' },
          { name: 'Licensed bar', desc: 'Draught beer, wine, spirits and cocktails' },
          { name: 'Takeaway', desc: 'Most of the menu is available to collect' }
        ]
      }
    ]
  }
];
